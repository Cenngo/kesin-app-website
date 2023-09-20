import { StaticImageData } from "next/image"
import Image from 'next/image'
import Card from '@/components/card'

export default function FeaturesCard({
    children,
    title,
    image,
}: {
    children: React.ReactNode,
    title: string,
    image: string | StaticImageData,
}) {
    return (
        <Card>
            <div className="flex flex-col justify-center text-center items-center max-w-[380px] mx-auto">
                <Image src={image} alt="" className="h-[220px]"/>
                <div className="m-8 basis-2/3">
                    <h4 className="text-2xl font-bold my-8">{title}</h4>
                    <p className="text-lg">{children}</p>
                </div>
            </div>
        </Card>
    )
}