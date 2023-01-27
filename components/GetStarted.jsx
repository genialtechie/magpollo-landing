import React from "react";
import { Note, Pencil, Button } from '../components';

const GetStarted = () => {
    return (
        <div className="bg-red py-10 px-10 items-center relative font-sans text-center text-white ">
            <h1 className="font-sans font-bold">LET&apos;S BUILD</h1>
            <p className="font-thin">
            We are your go-to source for comprehensive digital solutions
            </p>

            <div className="flex flex-row gap-4  place-content-center mt-6 mx-5 align-center whitespace-normal">
            <div className="bg-darkRed w-30 h-96 align-middle ">
                <Note />
                <Pencil />
                <p className="font-thin px-6 mt-6"> Let us know who you are </p>
            </div>
            <div className="bg-darkRed w-30 h-96 align-middle">
                <Note />
                <Pencil />
                <p className="font-thin px-6 mt-6">Tell us your digital needs</p>
            </div>
            <div className="bg-darkRed w-30 h-96 align-middle">
                <Note />
                <Pencil />
                <p className="font-thin px-6 mt-6">We’ll get back to you</p>
            </div>
            </div>
            <Button className="mx-auto mt-10">GET STARTED</Button>
        </div>
    );
    };

export default GetStarted;
