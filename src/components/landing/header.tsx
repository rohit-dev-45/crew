import Link from "next/link";
import { Button } from "../ui/button";
import { Logo } from "./logo";

const links = [
    { href: "#how", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#safety", label: "Safety" },
    { href: "#faq", label: "FAQ" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-30 flex justify-center border-b border-white/5 bg-night-950/55 px-6 backdrop-blur-[14px]">
            <div className="flex h-17 w-full max-w-310 items-center gap-8">
                <Logo />
                <nav
                    aria-label="Main"
                    className="flex gap-7 text-[14px] max-[900px]:hidden"
                >
                    {links.map((link) => (
                        <a
                            href={link.href}
                            key={link.href}
                            className="text-muted-foreground hover:text-foreground"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="ml-auto flex items-center gap-2">
                    <Button
                        asChild
                        variant="glass"
                        size="md"
                        className="h-10.5 border-transparent bg-transparent"
                    >
                        <Link href="/sign-in">Sign In</Link>
                    </Button>
                    <Button asChild variant="brand" size="md">
                        <Link href="/sign-up">Get Started</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
}
