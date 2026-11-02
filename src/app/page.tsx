import { ClosingCta } from "@/components/landing/closing-cta";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Marquee } from "@/components/landing/marquee";
import { Safety } from "@/components/landing/safety";
import React from "react";

const Home = () => {
    return (
        <div className="overflow-x-clip bg-ember-950">
            <div className="relative z-1 rounded-b-[48px] bg-night-950 shadow-[0_40px_80px_rgba(0,0,0,0.7)]">
                <Header />
                <main>
                    <Hero />
                    <HowItWorks />
                    <Marquee />
                    <Features />
                    <Safety />
                    <Faq />
                    <ClosingCta />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
