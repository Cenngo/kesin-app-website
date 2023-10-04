export default function Card({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div className="bg-[#fafafa] py-4 px-10 rounded-[20px] text-b shadow-xl h-full flex flex-col justify-center">
            {children}
        </div>
    )
}