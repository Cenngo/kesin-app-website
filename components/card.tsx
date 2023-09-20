export default function Card({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div className="bg-[#fafafa] p-2 rounded-[20px] text-base shadow-xl h-full">
            {children}
        </div>
    )
}