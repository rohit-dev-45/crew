import Link from "next/link";
import { Button } from "../ui/button";
import { Horizon } from "./horizon";

export function ClosingCta() {
    return (
        <section
            aria-labelledby="cta-title"
            className="flex justify-center px-6 pt-10 pb-30"
        >
            <div className="reveal-scale relative flex w-full max-w-310 flex-col items-center gap-6 overflow-hidden rounded-[36px] border border-night-600 bg-night-900 px-6 pt-24 pb-35 text-center">
                <Horizon className="top-[78%] size-450" />
                <h2
                    id="cta-title"
                    className="relative max-w-205 text-[clamp(38px,5.6vw,76px)] leading-none font-bold tracking-tighter text-balance"
                >
                    Your Crew Is{" "}
                    <span className="text-ember-gradient">Ready To Rise.</span>
                </h2>
                <p className="relative max-w-130 text-[18px] text-muted-foreground">
                    Sign Up With Email Or GitHub, Pick Your Specialists, And
                    Hand Over Your First Job In Minutes.
                </p>
                <div className="relative flex flex-wrap justify-center gap-3">
                    <Button
                        asChild
                        variant="brand"
                        size="xl"
                        className="h-13.5 px-7"
                    >
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
                        className="h-14 px-5.5"
                    >
                        <Link href="/sign-up">
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="size-4.5"
                            >
                                <circle cx="6" cy="5.5" r="2.5" />
                                <circle cx="6" cy="18.5" r="2.5" />
                                <circle cx="18" cy="8" r="2.5" />
                                <path d="M6 8v8" />
                                <path d="M18 10.5c0 4.5-6.5 3.5-11 6" />
                            </svg>
                            Continue With GitHub
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
