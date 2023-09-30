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
            <div className="flex justify-between px-10 border-2 border-white rounded-lg p-3 items-center gap-2 bg-[#212121] text-white shadow-2xl w-80">
                {children}
            </div>
        </Link>
    )
}