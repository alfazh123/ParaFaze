import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel={"icon"} href={"/logo.png"} />
                <meta
                    name="description"
                    content="Aplikasi web untuk parafrase teks"
                />
                <meta
                    name="keywords"
                    content="parafrase, paraphrase, paraphrasing, parafrase teks"
                />
                <meta name="author" content="ParaFaze Team" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="msapplication-TileColor" content="#ffffff" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
