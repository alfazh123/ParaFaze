import React, { useState } from "react"

export function TextAreaInput({ inputLimit = 5000 }) {
    const [text, setText] = useState("")

    React.useEffect(() => {
        const cachedText = localStorage.getItem("cachedText")
        if (cachedText) {
            setText(cachedText)
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const words = e.target.value.split(" ")
        if (words.length > inputLimit) {
            words.splice(inputLimit, words.length - inputLimit)
        }
        const newText = words.join(" ")
        setText(newText)
        localStorage.setItem("cachedText", newText)
    }

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => setText(e.target?.result as string)
            reader.readAsText(file)
        }
    }

    const wordCounts = (str: string) => {
        return str.split(" ").length - 1
    }

    return (
        <div className="flex flex-col p-5 space-y-4 bg-white rounded-lg shadow-md">
            <label htmlFor="input" className="text-gray-700 font-semibold">
                Input Text
            </label>
            <textarea
                title="Enter your text here"
                name="User Input"
                rows={15}
                className="p-4 outline-none w-full bg-gray-100 rounded shadow-inner"
                onChange={handleChange}
                draggable={false}
                style={{ resize: "none", fontFamily: "Inter, sans-serif" }}
                placeholder="Enter your text here..."
                value={text}
            ></textarea>
            <div className="flex justify-between items-center">
                <div>
                    <input
                        type="file"
                        accept=".doc,.docx,.pdf,.txt"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="fileUpload"
                    />
                    <label
                        htmlFor="fileUpload"
                        className="bg-slate-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-slate-600 transition duration-200 md:text-sm text-xs"
                    >
                        Select File .Doc / .Docx / .Pdf /.Txt
                    </label>
                </div>
                <p className="text-gray-700 md:text-sm text-xs">
                    Words : {wordCounts(text)}/{inputLimit}
                </p>
            </div>
        </div>
    )
}
