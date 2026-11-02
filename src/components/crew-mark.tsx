export function CrewMark({
    size = 24,
    className,
}: {
    size?: number;
    className?: string;
}) {
    return (
        <svg
            aria-hidden="true"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={className}
        >
            <path d="M12 6.5 6.5 16.5h11z" strokeOpacity="0.45" />
            <circle cx="12" cy="6.5" r="3" fill="currentColor" />
            <circle cx="6.5" cy="16.5" r="3" fill="currentColor" />
            <circle cx="17.5" cy="16.5" r="3" fill="currentColor" />
        </svg>
    );
}
