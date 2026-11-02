import { AuthLogo } from "@/components/auth/auth-logo";
import { CrewActivity } from "@/components/auth/crew-activity";
import { GitHubButton } from "@/components/auth/github-button";
import { OrDivider } from "@/components/auth/or-divider";
import { PasswordField } from "@/components/auth/password-field";
import { PrimaryButton } from "@/components/auth/primary-button";
import { TextField } from "@/components/auth/text-field";
import { CrewMark } from "@/components/crew-mark";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Crew · Sign Up",
};

const SignUpPage = () => {
    return (
        <div className="flex min-h-screen flex-col lg:flex-row lg:flex-wrap">
            <header className="flex h-22.5 items-center px-8 lg:hidden">
                <AuthLogo />
            </header>
            <section
                aria-label="What Crew does"
                className="hidden min-w-0 flex-[1_1_520px] flex-col justify-between gap-12 border-r border-graphite-810 bg-[radial-gradient(var(--color-graphite-800)_1px,transparent_1px)] bg-size-[24px_24px] px-14 py-10 lg:flex"
            >
                <Link
                    href="/"
                    className="flex items-center gap-2.5 self-start hover:text-white"
                >
                    <CrewMark size={26} className="text-graphite-50" />
                    <span className="text-[18px] font-semibold tracking-[-0.02em]">
                        CREW
                    </span>
                </Link>
                <div className="flex max-w-140 flex-col gap-7">
                    <h1 className="text-[60px] leading-[1.02] font-semibold tracking-[-0.035em] text-balance">
                        One Ask.
                        <br />A Whole Crew On It.
                    </h1>
                    <p className="max-w-115 text-[18px] text-graphite-300">
                        Chat Like You Always Do. When a Job Needs More Than An
                        Answer, Harper Splits It Across Your Teammates, And They
                        Work In Their Own Computer Until It’s Done.
                    </p>
                    <CrewActivity />
                </div>

                <div className="text-[13px] text-gray-400">
                    Your Teammates Ask Before They Pay, Send, Book Or Publish
                    Anything.
                </div>
            </section>
            <main className="flex min-w-0 flex-[1_1_420px] items-center justify-center px-6 py-12">
                <div className="flex w-full max-w-95 flex-col gap-6">
                    <div className="flex flex-col gap-1.5">
                        <h2 className="text-[28px] font-semibold tracking-[-0.02em]">
                            Create Your Account
                        </h2>
                        <p className="text-graphite-300">
                            It Takes Less Than a Minute.
                        </p>
                    </div>

                    <GitHubButton />

                    <OrDivider>Or Sign Up With Email</OrDivider>

                    <form className="flex flex-col gap-4">
                        <TextField
                            id="signup-email"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@company.com"
                        />
                        <PasswordField
                            id="signup-password"
                            label="Password"
                            autoComplete="new-password"
                            placeholder="At Least 12 Characters"
                            hint="Use 12 Or More Characters. A Short Phrase Works Well."
                        />
                        <PrimaryButton>Create Account</PrimaryButton>
                    </form>
                    <p className="text-[14px] text-graphite-300">
                        Already Have An Account?{" "}
                        <Link
                            href="/sign-in"
                            className="font-medium text-graphite-50 underline underline-offset-3"
                        >
                            Sign In
                        </Link>
                    </p>
                    <p className="text-[12px] text-graphite-400">
                        By Continuing You Agree To The{" "}
                        <Link href="/" className="text-gray-300 underline">
                            Terms
                        </Link>
                        {" and "}
                        <Link href="/" className="text-gray-300 underline">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default SignUpPage;
