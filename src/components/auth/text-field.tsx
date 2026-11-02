import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export function FieldLabel({
    className,
    ...props
}: React.ComponentProps<typeof Label>) {
    return (
        <Label
            className={cn(
                "text-[13px] leading-[1.55] font-normal text-graphite-300",
                className,
            )}
            {...props}
        />
    );
}

export function TextField({
    id,
    label,
    ...props
}: { id: string; label: string } & React.ComponentProps<"input">) {
    return (
        <div className="flex flex-col gap-2">
            <FieldLabel htmlFor={id}>{label}</FieldLabel>
            <Input
                id={id}
                className="h-12 rounded-[14px] border-graphite-700 bg-graphite-925 px-4 py-0 text-[15px] placeholder:text-graphite-500 focus-visible:border-graphite-600 focus-visible:ring-graphite-600/50 md:text-[15px] dark:bg-graphite-925"
                {...props}
            />
        </div>
    );
}
