import Link from "next/link";
import { Button } from "../ui/button";

const columns = [
    {
        title: "Product",
        links: [
            { label: "How It Works", href: "#how" },
            { label: "Features", href: "#features" },
            { label: "Safety", href: "#safety" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About", href: "/" },
            { label: "Contact", href: "/" },
            { label: "Status", href: "/" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Privacy", href: "/" },
            { label: "Terms", href: "/" },
            { label: "Security", href: "/" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="sticky bottom-0 z-0 flex justify-center overflow-hidden bg-ember-950 px-6 pt-24">
            <div className="flex w-full max-w-310 flex-col gap-12">
                <div className="flex flex-wrap gap-x-16 gap-y-10">
                    <div className="flex flex-[1_1_280px] flex-col gap-3.5">
                        <span className="font-heading text-[26px] font-bold tracking-[-0.04em]">
                            Hand It To Your Crew.
                        </span>
                        <p className="max-w-75 text-[14px] text-muted-foreground">
                            The AI Chat With Six Specilists Behind It.
                        </p>
                        <Button
                            asChild
                            variant="brand"
                            size="md"
                            className="h-10.5 self-start px-4.5"
                        >
                            <Link href="/sign-up">Get Started</Link>
                        </Button>
                    </div>
                    {columns.map((column) => (
                        <nav
                            key={column.title}
                            aria-label={column.title}
                            className="flex flex-[0_1_160px] flex-col gap-2.5 text-[14px]"
                        >
                            <span className="font-semibold">
                                {column.title}
                            </span>
                            {column.links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-muted-foreground hover:text-foreground"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    ))}
                </div>

                <div className="flex flex-wrap justify-between gap-3 border-t border-ember-890 pt-6 text-[13px] text-muted-foreground">
                    <span>
                        &copy; {new Date().getFullYear()} Crew. All Rights
                        Reserved.
                    </span>
                    <span>Built For People With Bigger Things To Do.</span>
                </div>

                <div
                    aria-hidden="true"
                    className="-mx-6 reveal-wordmark bg-[linear-gradient(180deg,#ffb547_0%,rgba(255,122,26,0.55)_45%,rgba(18,12,6,0)_92%)] bg-clip-text text-center font-heading text-[clamp(120px,26vw,380px)] leading-[0.78] font-extrabold tracking-[-0.07em] text-transparent select-none"
                >
                    CREW
                </div>
            </div>
        </footer>
    );
}
