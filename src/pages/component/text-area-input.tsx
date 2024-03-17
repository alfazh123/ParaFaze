import React, {useState} from "react";

export function TextAreaInput() {
    const [text, setText] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setText(e.target?.result as string);
            reader.readAsText(file);
        }
    };

    const wordCounts = (str: string) => {
        return str.split(" ").length - 1;
    };

    return (
        <div className="p-5 w-full flex flex-col">
            <div className="rounded-md">
                <div className="flex flex-col">
                    <label
                        htmlFor="input"
                        className="text-gray-800 text-opacity-80 bg-gray-200 rounded-t-md py-2 pl-4 font-semibold"
                    >
                        Input Teks
                    </label>
                    <textarea
                        title="input"
                        name="input"
                        id=""
                        rows={15}
                        className="text-gray-800 py-4 pl-4 outline-none w-full"
                        onChange={handleChange}
                        draggable={false}
                        style={{resize: "none"}}
                        placeholder="Masukkan teks anda disini..."
                    ></textarea>
                </div>
                <div className="flex flex-wrap bg-gray-200 p-2 rounded-b-md justify-between w-full">
                    <div className="flex items-center">
                        <input
                            type="file"
                            accept=".doc,.docx,.pdf,.txt"
                            onChange={handleFileUpload}
                            className="hidden"
                            id="fileUpload"
                        />
                        <label
                            htmlFor="fileUpload"
                            className="bg-white text-gray-800 py-2 rounded-md text-xs pr-4 pl-2 hover:bg-sky-100 transition duration-200 ease-in-out cursor-pointer"
                        >
                            🔗
                            <span className="pl-2">
                                Select File .Doc / .Docx / .Pdf /.Txt
                            </span>
                        </label>
                    </div>
                    <p className="flex text-gray-800 text-sm justify-center items-center p-2">
                        Words : {wordCounts(text)}
                        /500
                    </p>
                </div>
            </div>
        </div>
    );
}