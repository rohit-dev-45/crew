export function OrDivider({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-3 text-[13px] text-graphite-400">
            <span className="h-px flex-1 bg-graphite-750" />
            {children}
            <span className="h-px flex-1 bg-graphite-750" />
        </div>
    );
}
