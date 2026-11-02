import React from "react";

const AuthLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <div className="min-h-screen bg-graphite-950 text-[15px] leading-[1.55] text-graphite-50">
            {children}
        </div>
    );
};

export default AuthLayout;
