import Logout from "@/components/common/Logout";
import GlobalContextProvider from "@/context/GlobalContextProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <GlobalContextProvider>
                <Component {...pageProps} />
                <Logout />
            </GlobalContextProvider>
        </>
    );
}
