import { Geist, Geist_Mono, Sora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-sans",
    fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
    adjustFontFallback: false,
});

const fontMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
});

const sora = Sora({
    subsets: ["latin"],
    variable: "--font-sora",
});

export const metadata: Metadata = {
    title: "Crew · One message. A Whole Crew. Done",
    description:
        "Crew Is An AI Chat With Six Specialists Behind It. Hand Over The Job, Approve What Matters, And Get Finished Work Back.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            data-scroll-behaviour="smooth"
            className={cn(
                "scroll-smooth antialiased",
                fontMono.variable,
                "font-sans",
                geist.variable,
                sora.variable,
            )}
        >
            <body>
                <ThemeProvider forcedTheme="dark">{children}</ThemeProvider>
            </body>
        </html>
    );
}
