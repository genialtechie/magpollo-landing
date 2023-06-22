import { useFormik } from 'formik';
import { ButtonDisabled } from '../components';
import { contactSchema } from '../utils/validateInputs';
import sendMail from '../utils/sendMail';

const LetsBuildForm = ({ hide, services, file }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      website: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: async (values) => {
      const data = { ...values, services, file };
      const success = await sendMail(data);
    },
    validateOnChange: true,
  });

  return (
    <div className="px-5 md:w-9/12 mx-auto h-fit">
      <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
        <h1 className="text-red text-5xl font-mono uppercase font-bold mb-2">
          Let&apos;s Build
        </h1>
        <div
          className="cursor-pointer text-lg font-sans hover:text-red hover:underline"
          onClick={hide}
        >
          Go back
        </div>
      </div>

      <div className="w-full h-fit mb-10 flex flex-row">
        <div className="mx-2 w-1/2 bg-red h-1"></div>
        <div className="bg-red mx-2 w-1/2 h-1"></div>
      </div>
      <p className="font-sans mb-16">
        To start the building process, kindly provide us with details about your
        project or desired development, as well as your personal and company
        information.
      </p>
      <h1 className="text-gray-500 font-sans text-xl font-bold mb-5">
        Your Info
      </h1>
      <form
        id="contact-form"
        onSubmit={formik.handleSubmit}
      >
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red mb-2 text-xs">{formik.errors.name}</div>
        ) : null}
        <input
          type="text"
          required
          placeholder="Your Name *"
          id="name"
          {...formik.getFieldProps('name')}
          className="w-full h-10 border-b-[2px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:[#666666] text-sm font-sans placeholder:font-sans placeholder:font-thin placeholder:text-sm outline-none focus:border-black mb-5"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red mb-2 text-xs">{formik.errors.email}</div>
        ) : null}
        <input
          type="text"
          placeholder="Email *"
          id="email"
          {...formik.getFieldProps('email')}
          className="w-full h-10 border-b-[2px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:[#666666] text-sm font-sans placeholder:font-sans placeholder:font-thin placeholder:text-sm outline-none focus:border-black mb-5"
        />
        {formik.touched.phone && formik.errors.phone ? (
          <div className="text-red mb-2 text-xs">{formik.errors.phone}</div>
        ) : null}
        <input
          type="text"
          placeholder="Phone "
          id="phone"
          {...formik.getFieldProps('phone')}
          className="w-full h-10 border-b-[2px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:[#666666] text-sm font-sans placeholder:font-sans placeholder:font-thin placeholder:text-sm outline-none focus:border-black mb-5"
        />
        {formik.touched.company && formik.errors.company ? (
          <div className="text-red mb-2 text-xs">{formik.errors.company}</div>
        ) : null}
        <input
          type="text"
          placeholder="Company"
          id="company"
          {...formik.getFieldProps('company')}
          className="w-full h-10 border-b-[2px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:[#666666] text-sm font-sans placeholder:font-sans placeholder:font-thin placeholder:text-sm outline-none focus:border-black mb-5"
        />
        {formik.touched.website && formik.errors.website ? (
          <div className="text-red mb-2 text-xs">{formik.errors.website}</div>
        ) : null}
        <input
          type="text"
          placeholder="Website"
          id="website"
          {...formik.getFieldProps('website')}
          className="w-full h-10 border-b-[2px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:[#666666] text-sm font-sans placeholder:font-sans placeholder:font-thin placeholder:text-sm outline-none focus:border-black mb-5"
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red mb-2 text-xs">{formik.errors.message}</div>
        ) : null}
        <textarea
          type="text"
          placeholder="Anything you'd like us to know?"
          id="message"
          {...formik.getFieldProps('message')}
          className="w-full h-40 border-b-[2px] border-0 focus:ring-0 border-gray-400 p-2 bg-inherit placeholder:[#666666] text-sm font-sans placeholder:font-sans placeholder:font-thin placeholder:text-sm outline-none focus:border-black mb-5"
        />
        {formik.values.name === '' || formik.values.email === '' ? (
          <ButtonDisabled className="my-14 mx-auto">Submit</ButtonDisabled>
        ) : (
          <div className={'mx-auto my-14 relative w-fit h-fit group'}>
            <svg
              className="object-cover w-full h-full fill-black group-hover:scale-x-105 group-hover:fill-red transition-all duration-300 ease-in-out"
              width="390"
              height="70"
              viewBox="0 0 390 70"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.1552 68.2057C19.3085 70.0586 23.4775 70.9851 29.6621 70.9851H32.0622L361.709 71.3225L364.037 71.3231C370.222 71.3231 374.391 70.3967 376.544 68.5438C378.648 66.6909 379.699 62.9977 379.699 57.4641V48.4877C379.699 46.5347 379.962 44.9322 380.488 43.6802C381.014 42.4283 381.802 41.4142 382.854 40.638C384.782 39.1858 387.586 38.4596 391.267 38.4596H392.559C393.173 38.4596 393.671 37.9618 393.671 37.3477V34.2007C393.671 33.5866 393.173 33.0888 392.559 33.0888H391.267C389.539 33.0888 387.949 32.9135 386.497 32.563C385.07 32.2124 383.856 31.6741 382.854 30.948C381.802 30.1968 381.014 29.2078 380.488 27.9809C379.962 26.7289 379.699 25.1265 379.699 23.1734V14.1595C379.699 8.60083 378.648 4.90761 376.544 3.07978C374.491 1.25194 370.322 0.338024 364.037 0.338024H361.711C361.71 0.338024 361.709 0.33898 361.709 0.340159C361.709 0.341338 361.708 0.342294 361.707 0.342293L32.0658 0.000500029L29.6621 0C23.3773 0 19.2084 0.913917 17.1552 2.74175C15.0269 4.56959 13.9627 8.26281 13.9627 13.8214V22.8354C13.9627 26.5412 13.2992 29.1327 11.9722 30.61C10.6451 32.0372 8.21633 32.7508 4.68586 32.7508H1.44104C0.826934 32.7508 0.329102 33.2486 0.329102 33.8627V37.0097C0.329102 37.6238 0.826935 38.1216 1.44104 38.1216H4.68586C8.19129 38.1216 10.6201 38.8477 11.9722 40.3C13.2992 41.7773 13.9627 44.3938 13.9627 48.1497V57.1261C13.9627 62.6847 15.0269 66.3779 17.1552 68.2057Z" />
            </svg>

            <button
              type="submit"
              className="absolute cursor-pointer m-auto inset-0 w-full h-full font-mono bg-transparent text-white uppercase transition-all duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        )}
      </form>
      {/* {state.succeeded && (
        <div className="text-center text-gray-500">
          <h2 className="font-bold mb-4">Thanks for your interest!</h2>
          <p className="text-sm">
            Our team will be in touch shortly. Click <Link href="/">here</Link>{' '}
            to go back to the homepage.
          </p>
        </div>
      )} */}
    </div>
  );
};

export default LetsBuildForm;
