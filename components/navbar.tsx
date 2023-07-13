'use client'

import Link from "next/link"
import Image from "next/image"
import logoImage from "../public/logo.png"
import HamburgerLink from "./hamburger-link"
import { useState } from "react"
import NavLink from "./nav-link"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const closeNav = () => {
        setIsOpen(false);
    }

    return (
        <header className="bg-transparent fixed top-0 w-full backdrop-blur border-b-2 border-secondary z-20 px-5">
            <nav className="flex justify-between m-6 group md:container mx-auto" data-isopen={isOpen}>
                <Link href="/" className="inline-flex items-center gap-4">
                    <Image alt="logo" src={logoImage} className="h-8 w-auto"/>
                    <span className="font-bold text-2xl mr-5">KESiN</span>
                </Link>
                <button onClick={() => setIsOpen(!isOpen)} className="block lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 group-data-open:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 group-data-open:block hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <div className="hidden lg:block">
                    <ul className="gap-6 flex">
                    <li>
                            <NavLink href="/">
                                Ana Sayfa
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/about-us">
                                Hakkımızda
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/faq">
                                SSS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink href="/contact-us">
                                İletişim
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="absolute group-data-open:opacity-100 opacity-0 group-data-open:-translate-x-full 
                left-full bg-white h-screen text-secondary p-12 nav-shape pt-36 transition px-24">
                    <ul className="flex flex-col gap-6">
                        <li>
                            <HamburgerLink href="/" onClick={closeNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Ana Sayfa
                            </HamburgerLink>
                        </li>
                        <li>
                            <HamburgerLink href="/about-us" onClick={closeNav}>
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" strokeWidth={0.5} stroke="currentColor" className="w-6 h-6">
                                    <path d="M0 21L5 7L14 16L0 21ZM3.3 17.7L10.35 15.2L5.8 10.65L3.3 17.7ZM12.55 11.55L11.5 10.5L17.1 4.9C17.6333 4.36667 18.275 4.1 19.025 4.1C19.775 4.1 20.4167 4.36667 20.95 4.9L21.55 5.5L20.5 6.55L19.9 5.95C19.6667 5.71667 19.375 5.6 19.025 5.6C18.675 5.6 18.3833 5.71667 18.15 5.95L12.55 11.55ZM8.55 7.55L7.5 6.5L8.1 5.9C8.33333 5.66667 8.45 5.38333 8.45 5.05C8.45 4.71667 8.33333 4.43333 8.1 4.2L7.45 3.55L8.5 2.5L9.15 3.15C9.68333 3.68333 9.95 4.31667 9.95 5.05C9.95 5.78333 9.68333 6.41667 9.15 6.95L8.55 7.55ZM10.55 9.55L9.5 8.5L13.1 4.9C13.3333 4.66667 13.45 4.375 13.45 4.025C13.45 3.675 13.3333 3.38333 13.1 3.15L11.5 1.55L12.55 0.5L14.15 2.1C14.6833 2.63333 14.95 3.275 14.95 4.025C14.95 4.775 14.6833 5.41667 14.15 5.95L10.55 9.55ZM14.55 13.55L13.5 12.5L15.1 10.9C15.6333 10.3667 16.275 10.1 17.025 10.1C17.775 10.1 18.4167 10.3667 18.95 10.9L20.55 12.5L19.5 13.55L17.9 11.95C17.6667 11.7167 17.375 11.6 17.025 11.6C16.675 11.6 16.3833 11.7167 16.15 11.95L14.55 13.55Z" fill="#2A2A2A"/>
                                </svg>
                                Hakkımızda
                            </HamburgerLink>
                        </li>
                        <li>
                            <HamburgerLink href="/faq" onClick={closeNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                                </svg>
                                SSS
                            </HamburgerLink>
                        </li>
                        <li>
                            <HamburgerLink href="/contact-us" onClick={closeNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                </svg>
                                İletişim
                            </HamburgerLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}