import React from "react";
import { Lightbulb, Target, Button, Contact } from '../components';
import LottieAnimation from '../components/ui/LottieAnimation'

const GetStarted = () => {
    return (
        <div className="bg-red py-10 px-10 items-center relative font-sans text-center text-white ">
            <h1 className="font-sans font-bold">LET&apos;S BUILD</h1>
            <p className="font-thin">
            Let’s  work with you every step of the way to bring your project to life.
            </p>

            <div className="flex flex-row gap-5  place-content-center mt-6 mx-100 align-center whitespace-normal">
            <div className="bg-darkRed w-25 h-56 align-middle ">
            <LottieAnimation animationData={Lightbulb} size={126} />
                <p className="font-thin px-6 mt-6"> Let us know  you and your digital needs</p>
            </div>
            <div className="bg-darkRed w-25 h-56 align-middle">
            <LottieAnimation animationData={Target}  size={126} />
                <p className="font-thin px-6 mt-6">We&apos;ll work with you  to reach your targets.</p>
            </div>

            </div>
            <Button className="mx-auto mt-10">GET STARTED</Button>
        </div>
    );
    };

export default GetStarted;
