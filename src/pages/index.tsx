import {SlPencil} from "react-icons/sl";
import {useState} from 'react';
import Head from "next/head";

import {TextAreaOutput} from "@/pages/component/text-area-output";
import {TextAreaInput} from "@/pages/component/text-area-input";
import Navbar from "@/pages/component/navbar";
import LanguageDropdown from "@/pages/component/lang-dropdown";

const LANGUAGE = ["English", "Indonesia", "Arabic", "Spanish"];
const BUTTONS = ['Standard', 'Premium'];

export default function Home() {
    const [activeButton, setActiveButton] = useState('Standard');

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    const activeUsageButton = "bg-red-500 md:px-4 md:py-2 px-2 py-1 rounded-md text-slate-50 font-semibold shadow-md hover:bg-red-600 transition-all duration-300 ease-in-out";
    const inactiveUsageButton = "bg-slate-600 md:px-4 md:py-2 px-2 py-1 rounded-md text-slate-50 font-semibold shadow-md hover:bg-slate-800 transition-all duration-300 ease-in-out";

    const renderButton = (buttonName: string) => (
        <button
            title="accessButton"
            type="button"
            className={activeButton === buttonName ? activeUsageButton : inactiveUsageButton}
            onClick={() => handleButtonClick(buttonName)}
        >
            {buttonName}
        </button>
    );

    return (
        <>
            <Head>
                <title>ParaFaze - Lakukan parafrase dengan mudah</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <main className="flex flex-col items-center bg-sky-100 min-h-screen">
                <Navbar/>
                <div className={`w-full lg:max-w-6xl pt-16 px-4 md:px-8`}>
                    <div className="flex flex-wrap md:text-base text-sm justify-between w-full">
                        <div className="flex gap-2 md:gap-4">
                            {BUTTONS.map(renderButton)}
                        </div>
                        <LanguageDropdown language={LANGUAGE}/>
                    </div>
                    <div
                        className="grid md:grid-cols-2 grid-cols-1 md:space-x-2 md:space-y-0 space-x-0 space-y-4 rounded-lg w-full pt-6 gap-4 pb-6">
                        <TextAreaInput/>
                        <div className={`md:grid hidden`}>
                            <TextAreaOutput/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <button
                            type="submit"
                            className="bg-red-500 flex justify-center items-center text-white py-3 rounded-lg gap-2 w-fit mx-auto px-4 hover:bg-red-600 transition-all duration-300 ease-in-out font-semibold tracking-tight"
                        >
                            <SlPencil className="text-lg"/> Parafrase Teks
                        </button>
                        <div className={`md:hidden pb-6`}>
                            <TextAreaOutput/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}