import Link from "next/link";
import { CrewMark } from "../crew-mark";

export function Logo() {
    return (
        <Link
            href="/"
            className="flex flex-none items-center gap-2.5 hover:text-white"
        >
            <CrewMark className="text-ember-400" />
            <span className="font-heading text-[19px] font-bold tracking-[-0.03em]">
                CREW
            </span>
        </Link>
    );
}
