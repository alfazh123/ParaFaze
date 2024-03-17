import { FaCopy, FaDownload } from "react-icons/fa";
import React, { useState } from "react";

interface TextAreaOutputProps {
    textOutput: string;
}

export function TextAreaInput() {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    };
    console.log(text);

    const wordCounts = (str: string) => {
        return str.split(" ").length - 1;
    };

    return (
        <div className="md:p-5 w-full">
            <div className="shadow-2xl rounded-md border-solid border-x-2 border-[#e2e8ed]">
                <div className="flex flex-col">
                    <label
                        htmlFor="input"
                        className="text-[#665F5F] bg-[#e2e8ed] md:font-bold font-semibold text-lg p-2 rounded-t-md"
                    >
                        Teks Anda
                    </label>
                    <textarea
                        title="input"
                        name="input"
                        id=""
                        rows={10}
                        className="text-[#665F5F] w-full p-2"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <div className="flex flex-wrap bg-[#e2e8ed] p-2 rounded-b-md justify-between md:w-full">
                    <button
                        type="submit"
                        className="bg-white shadow-md text-[#665F5F] p-2 rounded-sm md:text-base text-sm"
                    >
                        🔗 Pilih File .Doc / .Docx / .Pdf /.Txt
                    </button>
                    <p className="flex text-[#665F5F] text-sm justify-center items-center p-2">
                        Words : {wordCounts(text)}
                        /500
                    </p>
                </div>
            </div>
        </div>
    );
}

export function TextAreaOutput({ textOutput }: TextAreaOutputProps) {
    function copyToClipboard() {
        navigator.clipboard.writeText(textOutput);
        alert("Copied to clipboard");
    }
    return (
        <div className="md:p-5 w-full">
            <div className="shadow-2xl rounded-md">
                <div className="flex flex-col">
                    <label
                        htmlFor="output"
                        className="text-[#665F5F] bg-[#e2e8ed] p-2 md:font-bold font-semibold text-lg rounded-t-md"
                    >
                        Hasil Parafrase
                    </label>
                    <textarea
                        title="output"
                        name="output"
                        id=""
                        rows={10}
                        className="text-[#665F5F] p-2"
                        readOnly
                        value={textOutput}
                    ></textarea>
                </div>
                <div className="flex bg-[#e2e8ed] p-2 rounded-b-md justify-between md:w-full">
                    <ul className="flex gap-4 right-0 [&_li]:shadow-lg">
                        <li>
                            <button
                                onClick={copyToClipboard}
                                title="copyButton"
                                className="bg-white p-2 rounded-sm text-slate-700"
                            >
                                <FaCopy />
                            </button>
                        </li>
                        <li>
                            <button
                                title="downloadButton"
                                className="bg-white p-2 rounded-sm text-slate-700"
                            >
                                <FaDownload />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
