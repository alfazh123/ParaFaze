import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-white p-4 w-full shadow-lg fixed">
            <figure className="flex justify-between gap-2 items-center">
                <Image
                    src="/logo.png"
                    alt="Pharaprase"
                    width={50}
                    height={50}
                    className="md:w-12 md:h-12 h-10 w-10"
                />
                <figcaption
                    className={`font-bold text-[#43588D] md:text-3xl text-2xl ${inter.className}`}
                >
                    ParaFaze
                </figcaption>
            </figure>

            <Link
                href="/"
                className="border-solid border-2 border-slate-600 rounded-lg text-slate-600 md:px-3 md:py-2 px-2 py-1 md:font-bold md:text-base text-sm font-semibold hover:bg-[#0c46a2] hover:text-white transition-all duration-300 ease-in-out"
            >
                Login
            </Link>
        </nav>
    );
}
