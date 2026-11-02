import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className="font-mono text-[12px] tracking-widest text-ember-400">
            {children}
        </span>
    );
}

export function SectionTitle({
    className,
    ...props
}: React.ComponentProps<"h2">) {
    return (
        <h2
            className={cn(
                "text-[clamp(34px,4.4vw,56px)] leading-[1.04] font-bold tracking-[-0.045em]",
                className,
            )}
            {...props}
        />
    );
}
