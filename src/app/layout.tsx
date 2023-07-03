import GlobalContextProvider from "@/context/GlobalContextProvider";
import "@/styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="fa">
            <body>
                <GlobalContextProvider>{children}</GlobalContextProvider>
            </body>
        </html>
    );
}
