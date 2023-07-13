'use client'
import FaqCard from "@/components/faq-card";
import { faqs } from "@/lib/constants"
import { useState } from "react"

export default function FAQ() {
    const [cat, setCat] = useState(0);

    return (
        <main className="text-highlight min-h-screen bg-landing-pattern lg:py-12 py-20 px-1">
            <div className="md:container mx-auto py-12">
                <div className="text-3xl text-center text-white font-bold mb-12">Sıkça Sorulan Sorular</div>
                <section>
                    <ul className="flex justify-around">
                        {faqs.map((x, idx) => (
                            <li key={x.category} onClick={() => setCat(idx)} className="h-full w-full text-center relative data-selected:bg-white/90 py-3
                            cursor-pointer rounded-t-3xl bg-white data-selected:border-b-2 border-primary" data-selected={idx === cat}>
                                <span>{x.category}</span>
                            </li>
                        ))}
                    </ul>
                </section>
                <section className="bg-white py-12 rounded-b-3xl">
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