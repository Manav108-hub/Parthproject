"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
    return (
        <header className="container mx-auto">
            <Link href = "/about">About</Link>
        </header>
    )
}
