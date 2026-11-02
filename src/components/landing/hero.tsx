import { cn } from "@/lib/utils";
import { Starfield } from "./starfield";
import { Button } from "../ui/button";
import Link from "next/link";
import { Horizon } from "./horizon";
import { Constellation } from "./constellation";
import { ExampleTicker } from "./example-ticker";

const headline = [
    { word: "One", delay: "0.1s" },
    { word: "Message.", delay: "0.18s" },
    { word: "A", delay: "0.3s" },
    { word: "Whole", delay: "0.38s" },
    { word: "Crew.", delay: "0.46s" },
    { word: "Done.", delay: "0.62s", glow: true },
];

export function Hero() {
    return (
        <section
            aria-labelledby="hero-title"
            className="relative h-260 overflow-hidden"
        >
            <Starfield />
            <div
                aria-hidden="true"
                className="absolute top-105 left-1/2 h-130 w-350 -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,122,26,0.35),rgba(255,122,26,0.08)_45%,transparent_70%)]"
            />
            <div className="relative z-3 flex flex-col items-center px-6 pt-22 text-center">
                <a
                    href="#how"
                    className="inline-flex animate-[shine_5s_linear_infinite,fade-up_0.6s_ease-out_both] rounded-[99px] bg-[linear-gradient(90deg,#3a2a14,#ffb547,#3a2a14)] bg-size-[200%_100%] p-px"
                >
                    <span className="flex h-8 items-center gap-2.5 rounded-[99px] bg-night-900 px-3.5 text-[13px] text-sand-100">
                        <span className="size-1.75 animate-pulse-dot rounded-[99px] bg-ember-400" />
                        Siz AI Specilists. One Chat.
                    </span>
                </a>
                <h1
                    id="hero-title"
                    className="mt-7.5 flex max-w-270 flex-wrap justify-center gap-x-[0.26em] text-[clamp(46px,7.6vw,104px)] leading-none font-bold tracking-tighter"
                >
                    {headline.map(({ word, delay, glow }) => (
                        <span
                            key={word}
                            className={cn(
                                "inline-block animate-word-in",
                                glow && "text-ember-gradient",
                            )}
                            style={{ animationDelay: delay }}
                        >
                            {word}
                        </span>
                    ))}
                </h1>

                <p className="mt-6.5 max-w-155 animate-[fade-up_0.8s_ease-out_0.8s_both] text-[19px] text-pretty text-muted-foreground">
                    Crew Is An AI Chat With Six Specialists Behind It. Hand Over
                    The Job, Approve What Matters, And Get Finished Work Back
                    While You Get On With Your Day.
                </p>
                <div className="mt-8.5 flex animate-[fade-up_0.8s_ease-out_0.95s_both] flex-wrap justify-center gap-3">
                    <Button asChild variant="brand" size="xl">
                        <Link href="/sign-up">
                            Assemble My Crew
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="glass"
                        size="xl"
                        className="h-13.5 px-6"
                    >
                        <a href="#how">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                            Watch How It Works
                        </a>
                    </Button>
                </div>
            </div>

            <Horizon className="top-190 z-1 size-600" />
            <Constellation />
            <ExampleTicker />
        </section>
    );
}
