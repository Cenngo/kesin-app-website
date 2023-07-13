import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function HamburgerLink({
    children,
    href,
    onClick
} : {
    children: React.ReactNode,
    href: Url,
    onClick?: () => void
}) {
    return (
        <Link href={href} className="inline-flex gap-4" onClick={onClick ? ev => onClick() : ev => {}}>
            {children}
        </Link>
    )
}