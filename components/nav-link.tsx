import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function NavLink({
    href,
    children
} : {
    href: Url,
    children: React.ReactNode
}) {
    const pathname = usePathname();

    return (
        <Link href={href} className={`group relative data-active:text-secondary hover:text-gray-300`} data-active={pathname === href.toString()}>
            {children}
            <div className="w-full bg-secondary h-1 absolute -bottom-1 scale-x-0 group-data-active:scale-x-100 transition"></div>
        </Link>
    )
}