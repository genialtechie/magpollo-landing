import React from "react";
import { Button, SmallCard } from '../components';

const RecentWork = () => {
    return (
        <div className="bg-lightBlue py-10 px-10 items-center relative font-mono text-center text-black ">
        <h1 className="font-sans font-bold">RECENT WORK</h1>
        <p className="font-thin">
            The key to elevating your digital game and standing out
        </p>
        <div className="h-fit w-fit grid lg:grid-cols-2 sm:grid-cols-1 gap-10 mt-6 content-around mx-auto">
            <SmallCard image="https://via.placeholder.com/400x475.png?text=Image+Placeholder" />
            <SmallCard image="https://via.placeholder.com/400x475.png?text=Image+Placeholder" />
            <SmallCard image="https://via.placeholder.com/400x475.png?text=Image+Placeholder" />
            <SmallCard image="https://via.placeholder.com/400x475.png?text=Image+Placeholder" />
        </div>
        </div>
    );
};

export default RecentWork;
