export default function Card({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div className="bg-[#fafafa] p-2 rounded-[20px] text-b shadow-xl h-full">
            {children}
        </div>
    )
}