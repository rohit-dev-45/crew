"use client";

import { useState } from "react";
import { FieldLabel } from "./text-field";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";

export function PasswordField({
    id,
    label,
    autoComplete,
    placeholder,
    labelAction,
    hint,
    className,
}: {
    id: string;
    label: string;
    autoComplete: string;
    placeholder?: string;
    labelAction?: React.ReactNode;
    hint?: string;
    className?: string;
}) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-3">
                <FieldLabel htmlFor={id}>{label}</FieldLabel>
                {labelAction}
            </div>
            <div
                className={cn(
                    "flex h-12 items-center rounded-[14px] border border-graphite-700 bg-graphite-925 pr-1.5 pl-4 focus-within:border-graphite-600 focus-within:ring-3 focus-within:ring-graphite-600/50",
                    className,
                )}
            >
                <Input
                    id={id}
                    type={visible ? "text" : "password"}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    className="h-11.5 flex-1 rounded-none border-0 bg-transparent px-0.5 py-px text-[15px] placeholder:text-graphite-500 focus-visible:ring-0 md:text-[15px] dark:bg-transparent"
                />

                <button
                    type="button"
                    aria-label={visible ? "Hide password" : "Show password"}
                    onClick={() => setVisible(!visible)}
                    className="flex size-9 cursor-pointer items-center justify-center rounded-[10px] text-graphite-400"
                >
                    <svg
                        aria-hidden="true"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {visible ? (
                            <path d="M3 3l18 18M10.6 5.1A9.7 9.7 0 0 1 12 5c6.5 0 10 7 10 7a17 17 0 0 1-3.2 4.2M6.6 6.6C3.7 8.5 2 12 2 12s3.5 7 10 7a9.5 9.5 0 0 0 5.4-1.6M9.9 9.9a3 3 0 0 0 4.2 4.2" />
                        ) : (
                            <>
                                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
                                <circle cx="12" cy="12" r="3" />
                            </>
                        )}
                    </svg>
                </button>
            </div>
            {hint && (
                <span className="text-[12px] text-graphite-400">{hint}</span>
            )}
        </div>
    );
}
