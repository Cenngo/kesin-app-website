import { StaticImageData } from "next/image"
import Image from 'next/image'
import Card from "./card"

export default function PeepsCard({
    children,
    title,
    image
}: {
    children: React.ReactNode,
    title: string,
    image: StaticImageData
}) {
    return (
        <Card>
            <div className="flex justify-between items-center text-center lg:h-[250px] relative">
                <Image src={image} alt="" className="self-end max-h-[250px] w-auto mx-4 lg:absolute"/>
                <div className="m-2 w-full">
                    <h6 className="text-2xl font-bold mb-8 text-highlight">{title}</h6>
                    <p className="text-xs text-highlight lg:mx-56">{children}</p>
                </div>
            </div>
        </Card>
    )
}