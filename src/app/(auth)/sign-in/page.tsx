import { AuthLogo } from "@/components/auth/auth-logo";
import { GitHubButton } from "@/components/auth/github-button";
import { OrDivider } from "@/components/auth/or-divider";
import { PasswordField } from "@/components/auth/password-field";
import { PrimaryButton } from "@/components/auth/primary-button";
import { TextField } from "@/components/auth/text-field";
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
    title: "Crew · Sign In",
};

const SignInPage = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="flex items-center justify-between gap-4 px-8 py-6">
                <AuthLogo />
                <Link
                    href="/sign-up"
                    className="flex h-10.5 items-center rounded-[12px] border border-graphite-700 px-4 text-[14px] font-medium hover:text-white"
                >
                    Create Account
                </Link>
            </header>
            <main className="flex flex-1 items-center justify-center px-5 pt-6 pb-20">
                <div className="flex w-full max-w-100 flex-col gap-5.5">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-[34px] font-semibold tracking-[-0.03em]">
                            Welcome Back
                        </h1>
                        <p className="text-graphite-300">
                            Your Crew Kept Working While You Were Away.
                        </p>
                    </div>
                    <GitHubButton />
                    <OrDivider>Or Use Your Email</OrDivider>
                    <form className="flex flex-col gap-4">
                        <TextField
                            id="signin-email"
                            label="Email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@company.com"
                        />

                        <PasswordField
                            id="signin-password"
                            label="Password"
                            autoComplete="current-password"
                            className="border-graphite-600"
                            labelAction={
                                <Link
                                    href="/sign-in"
                                    className="text-[13px] text-graphite-300 underline underline-offset-3"
                                >
                                    Forgot Password?
                                </Link>
                            }
                        />

                        <PrimaryButton>Sign In</PrimaryButton>
                    </form>

                    <p className="text-center text-[14px] text-graphite-300">
                        New To Crew?{" "}
                        <Link
                            href="/sign-up"
                            className="font-medium text-graphite-50 underline underline-offset-3"
                        >
                            Create An Account
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default SignInPage;
