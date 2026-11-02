export function PrimaryButton({ children }: { children: React.ReactNode }) {
    return (
        <button
            type="button"
            className="flex h-12 cursor-pointer items-center justify-center rounded-[14px] bg-graphite-50 font-semibold text-graphite-950"
        >
            {children}
        </button>
    );
}
