export default function Card({
    children
} : {
    children: React.ReactNode
}) {
    return (
        <div className="bg-card-border p-2 rounded-3xl text-secondary">
            <div className="bg-card-light rounded-2xl">
                {children}
            </div>
        </div>
    )
}