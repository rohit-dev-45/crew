import { cn } from "@/lib/utils";

export function Horizon({ className }: { className?: string }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                "absolute left-1/2 -translate-x-1/2 animate-horizon rounded-full bg-night-950",
                className,
            )}
        ></div>
    );
}
