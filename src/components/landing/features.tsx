import { Eyebrow, SectionTitle } from "./section-heading";

const features = [
    {
        title: "Specialists In Parallel",
        body: "Research, Travel, Marketing, Operations And Customers, All Working At The Same Time.",
        icon: (
            <>
                <circle cx="9" cy="8" r="3.5" />
                <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6 6 0 0 1 3.5 5.5" />
            </>
        ),
    },
    {
        title: "A Computer Of Their Own",
        body: "Real Browsers In The Cloud. Watch Any Teammate Live And Take Over With One Click.",
        icon: (
            <>
                <rect x="3" y="4" width="18" height="12" rx="2" />
                <path d="M8 20h8M12 16v4" />
            </>
        ),
    },
    {
        title: "Decisions In One Inbox",
        body: "Every Approval And Question In One Place, With Exactly What Will Happen Next.",
        icon: (
            <>
                <path d="M3 13h5l1.5 3h5l1.5-3h5" strokeLinejoin="round" />
                <path d="M5 5h14l2 8v6H3v-6z" strokeLinejoin="round" />
            </>
        ),
    },
    {
        title: "Routines On Autopilot",
        body: "“Every Friday At 5” Is All It Takes. Results Arrive On Schedule Without A Reminder.",
        icon: (
            <>
                <circle cx="12" cy="12" r="8" />
                <path d="M12 8v4l3 2" />
            </>
        ),
    },
    {
        title: "Memory That Sticks",
        body: "Your Preferences And Brand Voice Carry Into Every Job. See And Edit What Each One Remembers.",
        icon: (
            <path
                d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"
                strokeLinejoin="round"
            />
        ),
    },
    {
        title: "Hire With A Sentence",
        body: "Describe A Role And Harper Drafts Your New Teammate: Name, Instructions And Tools.",
        icon: <path d="M12 5v14M5 12h14" />,
    },
];

export function Features() {
    return (
        <section
            id="features"
            aria-labelledby="features-title"
            className="flex justify-center border-t border-night-750 px-6 py-25"
        >
            <div className="flex w-full max-w-310 flex-col gap-14">
                <div className="flex reveal flex-col items-center gap-4 text-center">
                    <Eyebrow>FEATURES</Eyebrow>
                    <SectionTitle
                        id="features-title"
                        className="max-w-205 text-balance"
                    >
                        A Team That Never Sleeps, Never Forgets, Never Guesses.
                    </SectionTitle>
                </div>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] gap-4.5">
                    {features.map((feature) => (
                        <article
                            key={feature.title}
                            className="tilt reveal-scale flex flex-col gap-3.5 rounded-[24px] border border-night-700 bg-[radial-gradient(90%_70%_at_0%_0%,#1a130a,#0d0c0b_55%)] p-7.5"
                        >
                            <span className="flex size-13.5 items-center justify-center rounded-[16px] border border-ember-800 bg-ember-925">
                                <svg
                                    aria-hidden="true"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                    strokeLinecap="round"
                                    className="text-ember-400"
                                >
                                    {feature.icon}
                                </svg>
                            </span>
                            <h3 className="text-[20px] font-semibold tracking-[-0.02em]">
                                {feature.title}
                            </h3>
                            <p className="text-muted-foreground">
                                {feature.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
