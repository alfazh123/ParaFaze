import {SlPencil} from "react-icons/sl";
import {useState} from 'react';


import {TextAreaOutput} from "@/pages/component/text-area-output";
import {TextAreaInput} from "@/pages/component/text-area-input";
import Navbar from "@/pages/component/navbar";
import LanguageDropdown from "@/pages/component/lang-dropdown";

const LANGUAGE = ["English", "Indonesia", "Arabic", "Spanish"];

export default function Home() {
    const [activeButton, setActiveButton] = useState('Standard');

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const activeUsageButton = "bg-red-500 md:px-4 md:py-2 px-2 py-1 rounded-md text-slate-50 font-semibold shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out";
    const inactiveUsageButton = "bg-slate-600 md:px-4 md:py-2 px-2 py-1 rounded-md text-slate-50 font-semibold shadow-md hover:bg-slate-800 transition-all duration-300 ease-in-out";


    return (
        <main className="flex flex-col items-center bg-sky-100 min-h-screen">
            <Navbar/>
            <div className={`w-full lg:max-w-6xl pt-16`}>
                <div className="flex flex-wrap md:text-base text-sm justify-between w-full md:px-7 px-2">
                    <div className="flex gap-4">
                        <button
                            title="accessButton"
                            type="button"
                            className={activeButton === 'Standard' ? activeUsageButton : inactiveUsageButton}
                            onClick={() => handleButtonClick('Standard')}
                        >
                            Standard
                        </button>
                        <button
                            title="accessButton"
                            type="button"
                            className={activeButton === 'Premium' ? activeUsageButton : inactiveUsageButton}
                            onClick={() => handleButtonClick('Premium')}
                        >
                            Premium
                        </button>
                    </div>
                    <LanguageDropdown language={LANGUAGE}/>
                </div>
                <div
                    className="grid md:grid-cols-2 grid-cols-1 md:space-x-2 md:space-y-0 space-x-0 space-y-4 p-2 rounded-lg w-full">
                    <TextAreaInput/>
                    <TextAreaOutput textOutput="halo"/>
                </div>
                <div className="flex flex-col gap-5 w-full">
                    <button
                        type="submit"
                        className="bg-red-500 flex justify-center items-center text-white py-3 rounded-lg gap-2 w-fit mx-auto px-4 hover:bg-red-600 transition-all duration-300 ease-in-out font-semibold tracking-tight"
                    >
                        <SlPencil className="text-lg"/> Parafrase Teks
                    </button>
                </div>
            </div>
        </main>
    );
}
