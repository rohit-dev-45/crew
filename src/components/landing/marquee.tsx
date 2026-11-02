import { cn } from "@/lib/utils";

type Look = "outline" | "solid" | "glow";

const looks: Record<Look, string> = {
    outline: "text-outline",
    solid: "text-sand-50",
    glow: "text-ember-gradient",
};

const rows: { words: [string, Look][]; animation: string }[] = [
    {
        words: [
            ["RESEARCH", "outline"],
            ["COMPARE", "solid"],
            ["BOOK", "outline"],
            ["WRITE", "glow"],
        ],
        animation: "animate-marquee-left",
    },
    {
        words: [
            ["PLAN", "solid"],
            ["SCHEDULE", "outline"],
            ["REPLY", "solid"],
            ["HIRE", "outline"],
        ],
        animation: "animate-marquee-right",
    },
];

export function Marquee() {
    return (
        <section
            aria-label="What your crew does"
            className="flex flex-col gap-1 overflow-hidden pt-10 pb-25"
        >
            {rows.map((row) => (
                <div
                    key={row.animation}
                    aria-hidden="true"
                    className={cn(
                        "flex w-max font-heading text-[clamp(64px,9vw,132px)] leading-[1.1] font-extrabold tracking-[-0.04em] whitespace-nowrap",
                        row.animation,
                    )}
                >
                    {[...row.words, ...row.words].map(([word, look], index) => (
                        <span key={index} className={looks[look]}>
                            {`${word} .`}
                        </span>
                    ))}
                </div>
            ))}
            <p className="mt-7 px-6 text-center text-[17px] text-muted-foreground">
                Research, Compare, Book, Write, Plan, Schedule, Reply And Hire.
                Your Crew Handles All Of It.
            </p>
        </section>
    );
}
