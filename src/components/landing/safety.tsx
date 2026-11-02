import { cn } from "@/lib/utils";
import { Eyebrow, SectionTitle } from "./section-heading";

const rules = [
    "Only You Type Passwords And Card Details",
    "Nothing Is Sent Or Posted Without Your OK",
    "Every Job Has A Time Limit You Choose",
    "Every Step Is Visible And Logged",
];

function RequestCard({
    from,
    title,
    className,
}: {
    from: string;
    title: string;
    className: string;
}) {
    return (
        <div
            className={cn(
                "absolute box-content rounded-[20px] border border-night-600 bg-night-850 p-5.5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]",
                className,
            )}
        >
            <div className="text-[12px] text-muted-foreground">{from}</div>
            <div className="mt-1.5 font-heading text-[17px] font-semibold">
                {title}
            </div>
            <div className="mt-3.5 h-17.5 rounded-[12px] bg-night-750" />
        </div>
    );
}

export function Safety() {
    return (
        <section
            id="safety"
            aria-labelledby="safety-title"
            className="flex justify-center border-t border-night-750 px-6 py-25"
        >
            <div className="flex w-full max-w-310 flex-wrap items-center gap-18">
                <div className="flex flex-[1_1_440px] reveal flex-col gap-5">
                    <Eyebrow>SAFE BY DESIGN</Eyebrow>
                    <SectionTitle id="safety-title">
                        All The Work. None Of The Risk.
                    </SectionTitle>
                    <p className="max-w-115 text-[17px] text-muted-foreground">
                        Your Crew Is Fast, But Never Reckless. You Set The
                        Ground Rules Once, And Every Teammate Follows Them On
                        Every Job.
                    </p>
                    <ul className="mt-1.5 flex flex-col gap-3">
                        {rules.map((rule) => (
                            <li key={rule} className="flex items-center gap-3">
                                <svg
                                    aria-hidden="true"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-ember-400"
                                >
                                    <path d="m5 12 5 5 9-10" />
                                </svg>
                                {rule}
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    aria-hidden="true"
                    className="group reveal-scale relative h-105 flex-[1_1_440px]"
                >
                    <RequestCard
                        from="Chloe · Marketing"
                        title="Post The Expo-Week Offer?"
                        className="top-10 left-[6%] w-[78%] -rotate-4 group-hover:-translate-x-7.5 group-hover:-translate-y-5 group-hover:-rotate-8"
                    />

                    <RequestCard
                        from="Brooke · Customers"
                        title="Send 3 Review Replies?"
                        className="top-37.5 right-[2%] w-[76%] rotate-3 group-hover:translate-x-7.5 group-hover:translate-y-6 group-hover:rotate-7"
                    />

                    <div className="absolute top-22.5 left-[12%] box-content w-[78%] animate-float rounded-[20px] border border-ember-800 bg-[linear-gradient(160deg,#2a1a08,#120c06)] p-6 shadow-[0_40px_80px_rgba(0,0,0,0.7),0_0_60px_rgba(255,122,26,0.18)]">
                        <div className="flex items-center gap-2 text-[12px] text-ember-200">
                            <span className="size-1.75 rounded-[99px] bg-ember-400" />
                            Needs Your OK
                        </div>
                        <div className="mt-2 font-heading text-[20px] font-semibold">
                            Tyler Wants To Open The Payment Page
                        </div>
                        <div className="mt-1 text-[14px] text-sand-300">
                            EK 623 · Fri 14 Nov · 07:20 · You Enter The Card
                            Details
                        </div>
                        <div className="mt-4.5 flex gap-2">
                            <span className="flex h-10 flex-1 items-center justify-center rounded-[10px] bg-ember-gradient text-[14px] font-semibold text-ember-ink">
                                Approve
                            </span>
                            <span className="flex h-10.5 flex-1 items-center justify-center rounded-[10px] border border-ember-800 text-[14px]">
                                Not Now
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
