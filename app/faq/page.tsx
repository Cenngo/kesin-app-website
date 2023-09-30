'use client'
import FaqCard from "@/components/faq-card";
import { faqs } from "@/lib/constants"
import { useState } from "react"
import cornerImage from '../../public/corner.svg'

export default function FAQ() {
    const [cat, setCat] = useState(0);

    return (
        <main className="text-b min-h-screen bg-background pt-[40px] py-20 px-1">
            <div className="text-center text-b mb-12 rounded-b-[20px] bg-[#fafafa] w-[345px] mx-auto h-[60px] flex items-center justify-center text-2xl">Sıkça Sorulan Sorular</div>
            <div className="md:container mx-auto">
                <section className="">
                    <ul className="flex justify-around">
                        {faqs.map((x, idx) => (
                            <li key={x.category} onClick={() => setCat(idx)} className="h-full w-full text-center relative py-3 data-selected:shadow-none shadow-inner shadow-black/20
                            cursor-pointer rounded-t-3xl bg-[#fafafa] data-selected:z-30" data-selected={idx === cat}>
                                <span>{x.category}</span>
                                {idx === cat && idx !== 0 && <img src="/corner.svg" alt="corner" className="absolute -bottom-[2px] -left-[37px] z-30 w-10 h-10 -scale-x-100"/>}
                                {idx === cat && idx !== 2 && <img src="/corner.svg" alt="corner" className="absolute -bottom-[2px] -right-[37px] z-30 w-10 h-10"/>}
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="py-12 rounded-b-3xl bg-[#fafafa] relative z-20">
                    <ul>
                        {faqs[cat].questions.map((x, idx) => (
                            <li key={`${cat}-${idx}`}>
                                <FaqCard title={x.question}>
                                    {x.answer}
                                </FaqCard>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    )
}