import { FaCopy, FaDownload } from "react-icons/fa"

export function TextAreaOutput({ textOutput = "" }) {
    const copyToClipboard = () => {
        navigator.clipboard
            .writeText(textOutput)
            .then((_) => alert("Copied to clipboard"))
    }

    const downloadText = () => {
        const element = document.createElement("a")
        const file = new Blob([textOutput], { type: "text/plain" })
        element.href = URL.createObjectURL(file)
        element.download = "output.txt"
        document.body.appendChild(element)
        element.click()
    }

    return (
        <div className="flex flex-col p-5 space-y-4 bg-white rounded-lg shadow-md">
            <label
                htmlFor="output"
                className="text-gray-700 font-semibold select-none"
            >
                Paraphrased Text
            </label>
            <textarea
                title="Paraphrased text will appear here"
                name="User Output"
                rows={15}
                className="p-4 outline-none w-full bg-gray-100 rounded shadow-inner"
                readOnly
                value={textOutput}
                style={{ resize: "none", fontFamily: "Inter, sans-serif" }}
                placeholder="Paraphrased text will appear here..."
            ></textarea>
            <div className="flex justify-end items-center space-x-4">
                <button
                    onClick={copyToClipboard}
                    title="copyButton"
                    className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 transition duration-200"
                >
                    <FaCopy />
                </button>

                <button
                    onClick={downloadText}
                    title="downloadButton"
                    className="bg-green-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-600 transition duration-200"
                >
                    <FaDownload />
                </button>
            </div>
        </div>
    )
}
