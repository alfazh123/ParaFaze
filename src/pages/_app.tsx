import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./component/navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className={` ${inter.className} `}>
            <Navbar />
            <div className="mx-auto min-w-3.5 max-w-screen-xl">
                <Component {...pageProps} />
            </div>
        </div>
    );
}
