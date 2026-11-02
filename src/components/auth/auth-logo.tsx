import Link from "next/link";
import { CrewMark } from "../crew-mark";

export function AuthLogo() {
    return (
        <Link href="/" className="flex items-center gap-2.5 hover:text-white">
            <CrewMark className="text-graphite-50" />
            <span className="text-[17px] font-semibold tracking-[-0.02em]">
                CREW
            </span>
        </Link>
    );
}
