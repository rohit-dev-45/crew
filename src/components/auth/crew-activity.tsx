import { cn } from "@/lib/utils";
import { CrewSigil, Teammate } from "../landing/crew-sigil";

const activity: {
    teammate: Teammate;
    name: string;
    doing: string;
    status: "time" | "working" | "done" | "waiting";
}[] = [
    {
        teammate: "harper",
        name: "Harper",
        doing: "Split Your Trip Into 3 Jobs",
        status: "time",
    },
    {
        teammate: "tyler",
        name: "Tyler",
        doing: "Checking Live Flights, LHE → DXB",
        status: "working",
    },
    {
        teammate: "mason",
        name: "Mason",
        doing: "Compared 3 Bean Suppliers",
        status: "done",
    },
    {
        teammate: "chloe",
        name: "Chloe",
        doing: "Needs Your OK To Post",
        status: "waiting",
    },
];

function Status({ status }: { status: (typeof activity)[number]["status"] }) {
    if (status === "time") {
        return (
            <span className="font-mono text-[11px] text-graphite-400">
                00:04
            </span>
        );
    }

    if (status === "working") {
        return (
            <span className="size-2 animate-[pulse-dot_1.4s_ease-in-out_infinite] rounded-[99px] bg-status-working" />
        );
    }
    if (status === "done") {
        return (
            <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-graphite-300"
            >
                <path d="m5 12 5 5 9-10" />
            </svg>
        );
    }
    return (
        <span className="rounded-[99px] border border-status-waiting-border px-2.5 py-0.5 text-[12px] text-status-waiting">
            Needs You
        </span>
    );
}

export function CrewActivity() {
    return (
        <div
            aria-hidden="true"
            className="box-content flex max-w-120 flex-col gap-0.5 rounded-[20px] border border-graphite-750 bg-graphite-900 p-2"
        >
            {activity.map((row) => (
                <div
                    key={row.name}
                    className={cn(
                        "flex items-center gap-3 px-3 py-2.5",
                        row.status === "working" &&
                            "rounded-[12px] bg-graphite-850",
                    )}
                >
                    <span className="flex size-8.5 flex-none items-center justify-center rounded-[99px] border border-graphite-700 bg-graphite-825 text-graphite-50">
                        <CrewSigil
                            teammate={row.teammate}
                            size={16}
                            strokeWidth={1.8}
                            strokeLinecap="butt"
                            strokeLinejoin="miter"
                        />
                    </span>
                    <span className="min-w-0 flex-1 text-[14px]">
                        <span className="font-semibold">{row.name}</span>
                        <span className="text-graphite-400"> {row.doing}</span>
                    </span>
                    <Status status={row.status} />
                </div>
            ))}
        </div>
    );
}
