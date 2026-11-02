import Link from "next/link";

const examples = [
    "Tyler Is Comparing Morning Flights To Dubai",
    "Mason Picked The Best Of Three Bean Suppliers",
    "Chloe Drafted A 20% Expo-Week Post",
    "Brooke Wrote Replies To This Week’s Reviews",
    "Ethan Sent This Morning’s News Brief",
];

export function ExampleTicker() {
    return (
        <div className="absolute inset-x-0 top-220 z-3 flex animate-[fade-up_0.8s_ease-out_1.9s_both] justify-center px-6">
            <div className="flex h-12 max-w-full items-center gap-3 rounded-[99px] border border-night-600 bg-night-850/75 pr-2 pl-4.5 backdrop-blur-[10px]">
                <span className="flex-none font-mono text-[12px] text-ember-400">
                    EXAMPLE
                </span>
                <span className="block h-9 min-w-0 overflow-hidden">
                    <span className="flex animate-ticker flex-col">
                        {[...examples, examples[0]].map((example, index) => (
                            <span
                                key={index}
                                className="flex h-9 items-center text-[14px] whitespace-nowrap text-sand-100"
                            >
                                {example}
                            </span>
                        ))}
                    </span>
                </span>
                <Link
                    href="/sign-up"
                    className="flex h-8.5 flex-none items-center rounded-[99px] border border-ember-800 bg-ember-925 px-3 text-[13px] text-ember-200"
                >
                    Try It
                </Link>
            </div>
        </div>
    );
}
