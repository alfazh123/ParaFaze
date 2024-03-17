interface MenuProps {
    access: string[];
    language: string[];
}

export default function Menu({ access, language }: MenuProps) {
    return (
        <div className="flex flex-wrap md:text-base text-sm justify-between w-full md:px-7 px-2">
            <div className="flex gap-4">
                {access.map((item) => (
                    <button
                        title="accessButton"
                        type="button"
                        key={item}
                        className="bg-[#F94B34] md:px-3 md:py-2 px-2 py-1 rounded-md"
                    >
                        {item}
                    </button>
                ))}
            </div>

            <select
                title="language"
                name="language"
                id="language"
                className="text-slate-600 px-3 py-2"
            >
                {language.map((item) => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    );
}
