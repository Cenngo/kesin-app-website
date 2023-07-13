import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export default function DownloadButton({
    children,
    href,
    className,
}: {
    children: React.ReactNode,
    href: Url,
    className?: string,
}) {
    return (
        <Link href={href} className={className}>
            <div className="flex justify-between border rounded-lg p-3 items-center gap-2 bg-slate-900">
                {children}
            </div>
        </Link>
    )
}