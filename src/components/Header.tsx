"use client";
import React, { useState, useEffect, useRef } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function Header( props: any) {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    )
}

function Navbar({className}: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About Us">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Catalog">
                    <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                        <ProductItem
                            title="Algochurn"
                            href="https://algochurn.com"
                            src="https://assets.aceternity.com/demos/algochurn.webp"
                            description="Prepare for tech interviews like never before."
                        />
                        <ProductItem
                            title="Tailwind Master Kit"
                            href="https://tailwindmasterkit.com"
                            src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                            description="Production ready Tailwind css components for your next project"
                        />
                        <ProductItem
                            title="Moonbeam"
                            href="https://gomoonbeam.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                            description="Never write from scratch again. Go from idea to blog in minutes."
                        />
                        <ProductItem
                            title="Rogue"
                            href="https://userogue.com"
                            src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                            description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Cart">

                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="signup"></MenuItem>
                <MenuItem setActive={setActive} active={active} item="Contact Us"></MenuItem>
            </Menu>
        </div>
    );
}