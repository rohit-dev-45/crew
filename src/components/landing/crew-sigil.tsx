export type Teammate =
    "harper" | "ethan" | "chloe" | "tyler" | "mason" | "brooke";

const shapes: Record<Teammate, React.ReactNode> = {
    harper: (
        <>
            <circle cx="12" cy="12" r="7" />
            <circle cx="12" cy="12" r="2.5" fill="currentColor" />
        </>
    ),
    ethan: <path d="M12 5 19 18H5z" />,
    chloe: <path d="M12 4 20 12 12 20 4 12z" />,
    tyler: (
        <>
            <path d="M4 16a8 8 0 0 1 16 0" />
            <path d="M8 16a4 4 0 0 1 8 0" />
        </>
    ),
    mason: <rect x="6" y="6" width="12" height="12" rx="1.5" />,
    brooke: <path d="M12 4l7 4v8l-7 4-7-4V8z" />,
};

export function CrewSigil({
    teammate,
    size = 24,
    ...props
}: {
    teammate: Teammate;
    size?: number;
} & React.ComponentProps<"svg">) {
    return (
        <svg
            aria-hidden="true"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            {shapes[teammate]}
        </svg>
    );
}
