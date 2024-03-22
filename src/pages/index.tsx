import Head from "next/head"
import { useState } from "react"
import { SlPencil } from "react-icons/sl"

import LanguageDropdown from "@/component/lang-dropdown"
import Navbar from "@/component/navbar"
import { TextAreaInput } from "@/component/text-area-input"
import { TextAreaOutput } from "@/component/text-area-output"

import { useSession } from "next-auth/react"
import { CgSpinner } from "react-icons/cg"

const LANGUAGE = ["English", "Indonesia", "German", "Malay", "South Korea"]
const BUTTONS = ["Standard", "Premium"]

const activeUsageButton =
    "bg-red-600 hover:bg-red-800 transition duration-500 ease-in-out"
const inactiveUsageButton =
    "bg-gray-400 hover:bg-gray-600 transition duration-500 ease-in-out"

const Metadata = () => (
    <Head>
        <title>ParaFaze - Fast and Accurate Paraphrasing Tool</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
)

export default function Home() {
    const { data: session } = useSession()

    const [activeButton, setActiveButton] = useState("Standard")
    const [textOutput, setTextOutput] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName)
    }

    const handleSubmit = async () => {
        setIsLoading(true)
        const inputText = localStorage.getItem("cachedInputText") || ""
        const language = localStorage.getItem("selectedLanguage") || "English"
        setTextOutput(" ")

        try {
            const response = await fetch("http://localhost:8000/paraphrase", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    sentence: inputText,
                    language: language,
                }),
            })

            if (!response.ok) {
                console.error(`HTTP error! status: ${response.status}`)
            } else {
                const data = await response
                    .json()
                    .then((data) => data.paraphrase)
                setTextOutput(data)
            }
        } catch (error) {
            console.error("An error occurred while fetching the data.", error)
        } finally {
            setIsLoading(false)
        }
    }

    const renderButton = (buttonName: string) => {
        const buttonDisabled = buttonName === "Premium" && !session
        return (
            <button
                title={buttonName}
                type="button"
                className={`md:px-4 md:py-2 px-2 py-1 select-none rounded-lg text-white font-semibold shadow-md  transition-all duration-300 ease-in-out ${
                    activeButton === buttonName
                        ? activeUsageButton
                        : inactiveUsageButton
                } ${
                    buttonDisabled
                        ? "bg-opacity-20 hover:bg-opacity-20 cursor-not-allowed"
                        : ""
                }`}
                onClick={() => handleButtonClick(buttonName)}
                disabled={buttonDisabled}
            >
                {buttonName}
            </button>
        )
    }

    return (
        <>
            <Metadata />
            <main className="bg-slate-100 flex flex-col items-center min-h-screen font-inter pb-4">
                <Navbar />
                <div className={`w-full lg:max-w-6xl pt-16 px-4 md:px-8`}>
                    <div className="flex flex-wrap md:text-base text-sm justify-between w-full">
                        <div className="flex gap-2 md:gap-4">
                            {BUTTONS.map(renderButton)}
                        </div>
                        <LanguageDropdown language={LANGUAGE} />
                    </div>
                    <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-2 md:space-y-0 space-x-0 space-y-4 rounded-lg w-full pt-6 gap-4 pb-6">
                        <TextAreaInput
                            inputLimit={
                                activeButton === "Standard" ? 500 : 1000
                            }
                        />
                        <div className={`md:grid hidden`}>
                            <TextAreaOutput
                                textOutput={textOutput}
                                isLoading={isLoading}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 w-full">
                        <button
                            type="submit"
                            className={`bg-green-600 flex justify-center items-center text-white py-3 rounded-lg gap-2 w-fit mx-auto px-4 ${
                                isLoading
                                    ? "bg-opacity-50 cursor-wait"
                                    : "hover:bg-green-800"
                            } transition-all duration-300 ease-in-out font-semibold tracking-tight shadow-md`}
                            onClick={handleSubmit}
                            disabled={isLoading}
                        >
                            {!isLoading ? (
                                <SlPencil className="text-lg" />
                            ) : (
                                <CgSpinner className="animate-spin" />
                            )}{" "}
                            Paraphrase Text
                        </button>
                        <div className={`md:hidden pb-6`}>
                            <TextAreaOutput
                                textOutput={textOutput}
                                isLoading={isLoading}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
