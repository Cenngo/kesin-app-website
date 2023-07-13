export default function FormInput({
    id, ...props
}: {
    id: string
}) {
    return (
        <>
            <label htmlFor=""></label>
            <input className="block after:content-['*'] after:ml-0.5 after:text-red-500 font-bold" {...props}/>
        </>
    )
}