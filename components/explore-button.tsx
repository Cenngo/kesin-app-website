import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"

export default function ExploreButton({
    children,
    href,
    className
}: {
    children: React.ReactNode,
    href: Url,
    className?: string
}) {
    return (
        <Link href={href} className={className}>
            <div className="bg-secondary px-12 py-3 rounded-full inline-flex group hover-shadow relative overflow-hidden items-center hover:text-secondary">
                <span className="transition z-10">{children}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 z-10 m-1 group-hover:translate-x-6 transition">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                <div className="absolute skew-x-6 left-0 inset-y-0 bg-white scale-x-0 group-hover:scale-x-100 w-full h-full transition"></div>
            </div>
        </Link>
    )
}