import {
  Backdrop,
  Paper,
  Divider,
  Stepper,
  Step,
  StepLabel,
  Skeleton,
  Snackbar,
  Tooltip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { carSchema } from '@/lib/carSchema';
import Image from 'next/image';
import { useAtlasUser } from '@/context/UserContext';
import { Suspense } from 'react';
import { useError } from '@/context/ErrorContext';

const steps = ['Search by VIN', 'Enter specs manually', 'Add your car'];
const authKey = process.env.NEXT_PUBLIC_CARMD_AUTH_KEY;
const partnerTkn = process.env.NEXT_PUBLIC_CARMD_PARTNER_TOKEN;

export default function StartForm({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}) {
  const { user } = useAtlasUser();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>()); //set of steps that have been skipped
  const [carData, setCarData] = useState<{
    year?: string;
    make?: string;
    model?: string;
    engine?: string;
    transmission?: string;
    mileage?: any;
  } | null>({});
  const { setError } = useError();

  const formik = useFormik({
    initialValues: {
      year: '',
      make: '',
      model: '',
      vin: '',
      plate: '',
      usState: '',
      mileage: 0,
    },
    validationSchema: carSchema,
    onSubmit: (values) => {
      console.log(values);
      // get car data from api
      let url = '';
      if (values.year && values.make && values.model) {
        setCarData({ ...values });
      } else {
        console.log('vin', values.vin);
        url = `https://api.carmd.com/v3.0/decode?vin=${values.vin}`;

        fetch(url, {
          method: 'GET',
          headers: {
            'content-type': 'application/json',
            authorization: `${authKey}`,
            'partner-token': `${partnerTkn}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            data.message.code === 1003 && setError(true);
            setCarData(data.data);
          })
          .catch((err) => {
            console.log(err);
            setError(true);
          });
      }

      // set step completed and skip to last step
      setSkipped((prevSkipped) => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.add(activeStep);
        return newSkipped;
      });
      setActiveStep(steps.length - 1);
    },
    validateOnChange: true,
  });

  const isStepOptional = (step: number) => {
    return step === 0;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

    if (activeStep === steps.length - 1) {
      //submit form
      handleSubmit();
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error('You cannot skip a step that is not optional.');
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleSubmit = () => {
    //add car to db
    const car = { ...formik.values, ...carData, userId: user?.id };
    fetch('/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        data?.error && setError(true);
        formik.resetForm();
        // set step to 0
        setActiveStep(0);
        // refresh page
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });

    // close modal
    setOpenModal(false);
  };

  //fetch makes and models from api based on year
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);

  const fetchMakes = (year: string) => {
    const url = `https://api.carmd.com/v3.0/make?year=${year}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `${authKey}`,
        'partner-token': `${partnerTkn}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.message.code === 1003 && setError(true);
        const makesArr = data.data;
        setMakes(makesArr);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const fetchModels = (year: string, make: string) => {
    const url = `https://api.carmd.com/v3.0/model?year=${year}&make=${make}`;
    fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `${authKey}`,
        'partner-token': `${partnerTkn}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.message.code === 1003 && setError(true);
        setModels(data.data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  useEffect(() => {
    formik.values.year.length == 4 && fetchMakes(formik.values.year);
  }, [formik.values.year]);

  useEffect(() => {
    formik.values.make !== '' &&
      fetchModels(formik.values.year, formik.values.make);
  }, [formik.values.make]);

  return (
    <Backdrop
      open={openModal}
      className="z-10"
    >
      <Paper className="w-full max-w-xl p-5 rounded-2xl">
        <h1 className="text-left font-bold font-serif text-secondary-dark">
          {user?.cars?.length === 0 ? 'Add a car to get started' : 'Add a car'}
          {user?.cars && user?.cars?.length > 0 && (
            <CloseIcon
              className="float-right cursor-pointer"
              onClick={() => setOpenModal(false)}
            />
          )}
        </h1>
        <Divider className="my-5" />

        <Stepper
          activeStep={activeStep}
          alternativeLabel
          className="mt-3"
        >
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: { optional?: React.ReactNode } = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <span className="text-black/60">Optional</span>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step
                key={label}
                {...stepProps}
              >
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <form
          className="mt-3"
          onSubmit={formik.handleSubmit}
        >
          {activeStep === 0 && (
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <label className="text-secondary-dark font-bold">
                  VIN <br />
                  <input
                    type="text"
                    className="uppercase border focus:outline focus:outline-secondary-dark text-black font-normal focus:border-secondary-dark rounded-md p-2"
                    id="vin"
                    {...formik.getFieldProps('vin')}
                  />
                  {formik.touched.vin && formik.errors.vin ? (
                    <div className="text-red-500 text-xs font-normal">
                      {formik.errors.vin}
                    </div>
                  ) : null}
                </label>
                <label className="text-secondary-dark font-bold mt-3 md:mt-0 md:ml-5">
                  Mileage <br />
                  <input
                    type="text"
                    className="uppercase border focus:outline focus:outline-secondary-dark text-black font-normal focus:border-secondary-dark rounded-md p-2"
                    id="mileage"
                    {...formik.getFieldProps('mileage')}
                  />
                  {formik.touched.mileage && formik.errors.mileage ? (
                    <div className="text-red-500 text-xs font-normal">
                      {formik.errors.mileage}
                    </div>
                  ) : null}
                </label>
              </div>

              <Divider className="mt-3">OR</Divider>
              <span className="text-sm">For US users</span>
              <span className="text-red-500 text-sm mb-3">
                Temporarily unavailable
              </span>
              <div className="flex flex-col md:flex-row mb-3">
                <div className="mb-3 md:m-0">
                  <label className="text-secondary-dark/50 font-bold">
                    License Plate <br />
                    <input
                      type="text"
                      className="uppercase border focus:outline focus:outline-secondary-dark text-black font-normal focus:border-secondary-dark rounded-md p-2"
                      id="plate"
                      {...formik.getFieldProps('plate')}
                      disabled
                    />
                    {formik.touched.plate && formik.errors.plate ? (
                      <div className="text-red-500 text-xs font-normal">
                        {formik.errors.plate}
                      </div>
                    ) : null}
                  </label>
                </div>
                <div className="md:ml-5">
                  <label className="text-secondary-dark/50 font-bold">
                    State <br />
                    <input
                      type="text"
                      className="uppercase border focus:outline focus:outline-secondary-dark text-black font-normal focus:border-secondary-dark rounded-md p-2"
                      id="usState"
                      {...formik.getFieldProps('usState')}
                      disabled
                    />
                    {formik.touched.usState && formik.errors.usState ? (
                      <div className="text-red-500 text-xs font-normal">
                        {formik.errors.usState}
                      </div>
                    ) : null}
                  </label>
                </div>
              </div>

              <button
                className="bg-secondary-dark text-white rounded-md py-2 px-16 mt-2 mx-auto hover:bg-white hover:text-secondary-dark hover:border hover:border-secondary-dark"
                type="submit"
                disabled={
                  formik.values.vin.length !== 17 ||
                  formik.values.mileage === 0 ||
                  formik.values.mileage < 1000
                }
              >
                Search
              </button>
            </div>
          )}
          {activeStep === 1 && (
            <div className="flex flex-col">
              <div className="flex md:flex-row flex-col">
                <div>
                  <label className="text-secondary-dark font-bold">
                    Year <br />
                    <input
                      type="text"
                      className="uppercase border focus:outline focus:outline-secondary-dark text-black font-normal focus:border-secondary-dark rounded-md p-2"
                      id="year"
                      {...formik.getFieldProps('year')}
                    />
                    {formik.touched.year && formik.errors.year ? (
                      <div className="text-red-500 text-xs font-normal">
                        {formik.errors.year}
                      </div>
                    ) : null}
                  </label>
                </div>
                <div className="mt-3 md:mt-0 md:ml-5">
                  <label className="text-secondary-dark font-bold">
                    Make <br />
                    <Tooltip title="Enter year first">
                      <select
                        className="uppercase border w-[240px] focus:outline focus:outline-secondary-dark text-black font-normal focus:border-secondary-dark rounded-md p-2"
                        id="make"
                        {...formik.getFieldProps('make')}
                      >
                        <option
                          selected
                          value=""
                        >
                          Select make
                        </option>
                        {makes?.map((make) => (
                          <option
                            key={make}
                            value={make}
                          >
                            {make}
                          </option>
                        ))}
                      </select>
                    </Tooltip>
                    {formik.touched.make && formik.errors.make ? (
                      <div className="text-red-500 text-xs font-normal">
                        {formik.errors.make}
                      </div>
                    ) : null}
                  </label>
                </div>
              </div>
              <div className="flex md:flex-row flex-col">
                <label className="text-secondary-dark font-bold mt-3">
                  Model <br />
                  <Tooltip title="Enter year and make first">
                    <select
                      className="uppercase border w-[240px] focus:outline focus:outline-secondary-dark text-black font-normal focus:border-secondary-dark rounded-md p-2"
                      id="model"
                      {...formik.getFieldProps('model')}
                    >
                      <option
                        selected
                        value=""
                      >
                        Select model
                      </option>
                      {models?.map((model) => (
                        <option
                          key={model}
                          value={model}
                        >
                          {model}
                        </option>
                      ))}
                    </select>
                  </Tooltip>
                  {formik.touched.model && formik.errors.model ? (
                    <div className="text-red-500 text-xs font-normal">
                      {formik.errors.model}
                    </div>
                  ) : null}
                </label>
                <label className="text-secondary-dark font-bold mt-3 md:ml-5">
                  Mileage <br />
                  <input
                    type="text"
                    className="uppercase border focus:outline focus:outline-secondary-dark text-black font-normal focus:border-secondary-dark rounded-md p-2"
                    id="mileage"
                    {...formik.getFieldProps('mileage')}
                  />
                  {formik.touched.mileage && formik.errors.mileage ? (
                    <div className="text-red-500 text-xs font-normal">
                      {formik.errors.mileage}
                    </div>
                  ) : null}
                </label>
              </div>
              <button
                className="bg-secondary-dark text-white rounded-md py-2 px-16 mt-5 mx-auto hover:bg-white hover:text-secondary-dark hover:border hover:border-secondary-dark"
                type="submit"
                disabled={
                  formik.values.make === '' ||
                  formik.values.model === '' ||
                  formik.values.year === '' ||
                  formik.values.mileage === 0
                }
              >
                Search
              </button>
            </div>
          )}
        </form>
        {activeStep === 2 && (
          <div className="flex flex-col md:ml-5">
            <h1 className="text-xl mt-2 mb-5">Confirm your vehicle details</h1>
            <Paper
              elevation={8}
              className="p-4 w-[300px]"
            >
              {carData ? (
                <div className="flex flex-row">
                  <Image
                    src="/classic-car.png"
                    alt="car"
                    width={50}
                    height={50}
                  />
                  <div className="ml-4">
                    {carData.model ? (
                      <p className="uppercase">
                        {carData?.year} {carData?.make} {carData?.model}
                      </p>
                    ) : (
                      <Skeleton
                        variant="text"
                        width={100}
                        height={20}
                      />
                    )}

                    {carData?.engine ? (
                      <p className="text-sm">Engine: {carData?.engine}</p>
                    ) : (
                      <Skeleton
                        variant="text"
                        width={100}
                        height={20}
                      />
                    )}

                    {carData?.transmission ? (
                      <p className="text-sm">
                        Transmission: {carData?.transmission}
                      </p>
                    ) : (
                      <Skeleton
                        variant="text"
                        width={100}
                        height={20}
                      />
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-row justify-center">
                  <Skeleton
                    variant="circular"
                    width={50}
                    height={50}
                  />
                  <div className="ml-5 flex flex-col justify-around">
                    <Skeleton
                      variant="text"
                      width={150}
                      height={20}
                    />
                    <Skeleton
                      variant="text"
                      width={150}
                      height={20}
                    />
                  </div>
                </div>
              )}
            </Paper>
          </div>
        )}
        <div className="flex flex-row justify-between mt-8">
          <button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={`${
              activeStep === 0 ? 'text-slate-400' : 'text-secondary-dark'
            } font-bold uppercase`}
          >
            Back
          </button>
          <div className="flex flex-row">
            {isStepOptional(activeStep) && (
              <button
                className="text-secondary-dark font-bold uppercase mr-3"
                onClick={handleSkip}
              >
                Skip
              </button>
            )}
            <button
              className="text-secondary-dark font-bold uppercase"
              onClick={handleNext}
              disabled={
                (activeStep === 0 &&
                  formik.values.vin.length !== 17 &&
                  (formik.values.plate.length !== 7 ||
                    formik.values.usState === '')) ||
                (activeStep === 1 &&
                  (formik.values.make === '' ||
                    formik.values.model === '' ||
                    formik.values.year === ''))
              }
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </Paper>
    </Backdrop>
  );
}
