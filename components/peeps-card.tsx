import { StaticImageData } from "next/image"
import Image from 'next/image'
import Card from "./card"

export default function PeepsCard({
    children,
    title,
    image,
    inverse
}: {
    children: React.ReactNode,
    title: string,
    image: StaticImageData,
    inverse?: boolean
}) {
    return (
        <div className={`flex text-center text-[#2a2a2a] ${inverse ? 'flex-row-reverse' : 'flex-row'}`}>
            <Image src={image} alt="" className="max-h-[250px] w-auto mx-4 self-end"/>
            <div className="w-full mx-w-[530px] mb-8">
                <Card>
                    <h6 className="lg:text-2xl text-base font-bold mb-4">{title}</h6>
                    <p className="lg:text-lg text-xs">{children}</p>
                </Card>
            </div>
        </div>
    )
}