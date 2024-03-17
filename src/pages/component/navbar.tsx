import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-white py-4 w-full px-4 md:px-8">
            <div className={`lg:max-w-6xl mx-auto flex items-center justify-between`}>
                <Link
                    className="flex justify-between gap-2 items-start p-2"
                    href={"/"}
                    unselectable={"on"}
                    draggable={"false"}
                >
                    <Image
                        src="/logo.png"
                        alt="Pharaprase"
                        width={50}
                        height={50}
                        className="md:w-12 md:h-12 h-10 w-10"
                    />
                    <p
                        className={`font-bold text-[#43588D] pt-2 md:text-xl text-lg lg:text-2xl`}
                    >
                        ParaFaze
                    </p>
                </Link>
                <Link
                    href="/"
                    className="border-solid border-2 border-slate-600 rounded-lg text-slate-600 md:py-2 py-1 md:font-bold md:text-base text-sm font-semibold hover:bg-slate-600
                    hover:text-white transition-all duration-300 ease-in-out px-4 md:px-6"
                >
                    Login
                </Link>
            </div>
        </nav>
    );
}