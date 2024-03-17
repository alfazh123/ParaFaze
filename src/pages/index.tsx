import Image from "next/image";
import { SlPencil } from "react-icons/sl";
import { TextAreaInput, TextAreaOutput } from "./component/textarea";
import Menu from "./component/menu";

export default function Home() {
    const handleButtonClick = () => {
        console.log("Button Clicked");
        return true;
    };
    return (
        <main className="flex flex-col items-center md:pt-32 pt-24 md:p-5">
            <Menu
                access={["Standard", "Premium"]}
                language={["Indonesia", "Inggris"]}
            />
            <div className="flex md:flex-row flex-col md:space-x-2 md:space-y-0 space-x-0 space-y-4 p-2 rounded-lg w-full">
                <TextAreaInput />
                <TextAreaOutput textOutput="halo" />
            </div>
            <div className="flex flex-col gap-5 p-4">
                <button
                    type="submit"
                    className="bg-[#F94B34] flex justify-center items-center text-white p-3 rounded-lg gap-2"
                >
                    <SlPencil className="text-lg" /> Paraphrase Teks
                </button>
            </div>
        </main>
    );
}
