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
            <div className="h-[60px] w-[178px] rounded-[20px] inline-flex  items-center text-b bg-background shadow justify-center hover:bg-white transition-all">
                <span className="transition z-10">{children}</span>
            </div>
        </Link>
    )
}