import { cn } from "@/lib/utils";
import { CrewSigil, Teammate } from "./crew-sigil";

const lines = [
    {
        to: "370 112",
        opacity: 0.45,
        offset: 200,
        duration: "2s",
        delay: "1.2s",
    },
    {
        to: "730 112",
        opacity: 0.45,
        offset: 200,
        duration: "2s",
        delay: "1.3s",
    },
    {
        to: "190 160",
        opacity: 0.35,
        offset: 400,
        duration: "2.4s",
        delay: "1.4s",
    },
    {
        to: "910 160",
        opacity: 0.35,
        offset: 400,
        duration: "2.4s",
        delay: "1.5s",
    },
    {
        to: "40 228",
        opacity: 0.25,
        offset: 600,
        duration: "2.8s",
        delay: "1.6s",
    },
    {
        to: "1060 228",
        opacity: 0.25,
        offset: 600,
        duration: "2.8s",
        delay: "1.7s",
    },
];

const tiers = {
    lead: "size-24 bg-sand-50 text-night-950 shadow-[0_0_0_8px_rgba(255,181,71,0.12),0_0_60px_rgba(255,160,60,0.6)]",
    near: "size-16.5 border border-ember-800 bg-night-850 shadow-[0_0_30px_rgba(255,140,40,0.35)]",
    mid: "size-15.5 border border-ember-850 bg-night-850 shadow-[0_0_24px_rgba(255,140,40,0.25)]",
    far: "size-14.5 border border-ember-875 bg-night-850",
};

const members: {
    teammate: Teammate | "hire";
    tier: keyof typeof tiers;
    icon: number;
    left: number;
    top: number;
    rise: string;
    float: string;
    floatDelay: string;
}[] = [
    {
        teammate: "harper",
        tier: "lead",
        icon: 42,
        left: 502,
        top: 22,
        rise: "1.05s",
        float: "6s",
        floatDelay: "0s",
    },
    {
        teammate: "ethan",
        tier: "near",
        icon: 26,
        left: 338,
        top: 80,
        rise: "1.2s",
        float: "6.5s",
        floatDelay: "0.4s",
    },
    {
        teammate: "chloe",
        tier: "near",
        icon: 26,
        left: 698,
        top: 80,
        rise: "1.3s",
        float: "7s",
        floatDelay: "0.8s",
    },
    {
        teammate: "tyler",
        tier: "mid",
        icon: 24,
        left: 160,
        top: 130,
        rise: "1.4s",
        float: "6.2s",
        floatDelay: "0.2s",
    },
    {
        teammate: "mason",
        tier: "mid",
        icon: 24,
        left: 880,
        top: 130,
        rise: "1.5s",
        float: "6.8s",
        floatDelay: "1s",
    },
    {
        teammate: "brooke",
        tier: "far",
        icon: 22,
        left: 12,
        top: 200,
        rise: "1.6s",
        float: "7.2s",
        floatDelay: "0.6s",
    },
    {
        teammate: "hire",
        tier: "far",
        icon: 20,
        left: 1032,
        top: 200,
        rise: "1.7s",
        float: "6.4s",
        floatDelay: "0.3s",
    },
];

export function Constellation() {
    return (
        <div
            aria-hidden="true"
            className="absolute top-140 left-1/2 z-2 h-65 w-275 -translate-x-1/2"
        >
            <svg
                width="1100"
                height="260"
                viewBox="0 0 1100 260"
                fill="none"
                className="absolute inset-0"
            >
                {lines.map((line) => (
                    <path
                        key={line.to}
                        d={`M550 70 L${line.to}`}
                        className="animate-dash stroke-ember-400"
                        strokeOpacity={line.opacity}
                        strokeWidth="1.2"
                        strokeDasharray="4 6"
                        strokeDashoffset={line.offset}
                        style={{
                            animationDuration: line.duration,
                            animationDelay: line.delay,
                        }}
                    />
                ))}
            </svg>

            {members.map((member) => (
                <div
                    key={member.teammate}
                    className={cn(
                        "absolute animate-rise",
                        member.tier === "far" && "max-[900px]:hidden",
                    )}
                    style={{
                        left: member.left,
                        top: member.top,
                        animationDelay: member.rise,
                    }}
                >
                    <span
                        className={cn(
                            "flex animate-float items-center justify-center rounded-[99px] text-sand-50",
                            tiers[member.tier],
                            member.teammate === "hire" &&
                                "border-dashed border-ember-800",
                        )}
                        style={{
                            animationDuration: member.float,
                            animationDelay: member.floatDelay,
                        }}
                    >
                        {member.teammate === "hire" ? (
                            <svg
                                width={member.icon}
                                height={member.icon}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                className="text-ember-400"
                            >
                                <path d="M12 5v14M5 12h14" />
                            </svg>
                        ) : (
                            <CrewSigil
                                teammate={member.teammate}
                                size={member.icon}
                            />
                        )}
                    </span>
                </div>
            ))}
        </div>
    );
}
