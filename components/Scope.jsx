import React from "react";
import { FauxButton } from '../components';

const Scope = () => {
    {/*let names = ['Website', 'Mobile apps', 'API design'] */}
    return (
        <div className="bg-white py-10 px-10 items-center relative text-center text-black ">
        <div className="mx-auto w-1/4">
        <h1 className="font-mono text-5xl uppercase whitespace-normal "> <span className="text-red">One-stop-shop </span> for all your digital needs</h1>
        </div>
        <p className="font-sans mt-4">
        We are your go-to source for comprehensive digital solutions
        </p>
        <div>
        
            <div className="h-fit w-3/4 flex justify-evenly flex-row flex-wrap mt-10 content-around mx-auto">
                {/* Future refactor get a list of thse services and map to the faux button */}
                {/* {names.map(t => <FauxButton key={t} buttonText={t}/>)} */} 
                <FauxButton buttonText={'Website'}/>
                <FauxButton buttonText={'Mobile apps'}/>
                <FauxButton buttonText={'API design'}/>
                <FauxButton buttonText={'Design systems'}/>
                <FauxButton buttonText={'Logos & branding'}/>
                <FauxButton buttonText={'Pitch decks'}/>
                <FauxButton buttonText={'Digital ads'}/>
                <FauxButton buttonText={'Email design'}/>
                <FauxButton buttonText={'Infographics'}/>
                <FauxButton buttonText={'Brochures'}/>
                <FauxButton buttonText={'Brand guides'}/>
                <FauxButton buttonText={'AI automation'}/>
                <FauxButton buttonText={'Blockchain integration'}/>
                <FauxButton buttonText={'Icons'}/>
                <FauxButton buttonText={'E-commerce services'}/>
                <FauxButton buttonText={'Billboards'}/>
                <FauxButton buttonText={'Resumes & Portfolios'}/>
                <FauxButton buttonText={'API integration'}/>
                <FauxButton buttonText={'Business cards'}/>
                <FauxButton buttonText={'Social media graphics'}/>
                <FauxButton buttonText={'SAAS'}/>
                <FauxButton buttonText={'Packaging'}/>
                <FauxButton buttonText={'Wireframes'}/>
            </div>
        </div>
        </div>
        
    );
};

export default Scope;