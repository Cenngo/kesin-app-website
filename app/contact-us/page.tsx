'use client'
import { useRef, useState } from "react"
import * as reactHookForm from "react-hook-form"
import peepsImage from '../../public/peeps_4.png'
import Image from "next/image"
import envelopeImage from '../../public/envelope.png'

interface FormInputs {
    name: string,
    email: string,
    details: string
}

export default function ContactUs() {
    const [status, setStatus] = useState({ submitted: false, submitting: false, info: { error: false, msg: "" } });

    const formRef = useRef(null);
    const { register, handleSubmit, formState: {errors}} = reactHookForm.useForm<FormInputs>();
    const onSubmit: reactHookForm.SubmitHandler<FormInputs> = async data => {
        setStatus({ submitted: false, submitting: true, info: { error: false, msg: "" } });

        const res = await fetch('/api/contact-us', {
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                details: data.details
            })
        });

        if (res.ok) {
            setStatus({ submitted: true, submitting: false, info: { error: false, msg: 'Mesajınız başarıyla gönderildi.' } });
        }
        else {
            setStatus({ submitted: false, submitting: false, info: { error: true, msg: `Bir hata oluştu. Lütfen tekrar deneyiniz.` } })
        }
    }

    return (
        <main className="bg-background pt-[40px] text-secondary px-1">
            <div className="text-center text-b rounded-b-[20px] bg-[#fafafa] w-[345px] mx-auto h-[48px] flex items-center justify-center">İletişim</div>
            <div className="container mx-auto grid grid-cols-2 place-items-stretch place-content-end mt-10">
                <div className="order-2 pb-5 flex justify-center">
                    <form className="bg-white shadow-2xl rounded-3xl w-full max-w-[492px] group p-6 text-xl text-b" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                        <div className="mb-5">
                            <label htmlFor="name" className="block after:content-['*'] after:ml-0.5">Ad Soyad</label>
                            <input type="text" id="name" className="mt-6 px-3 py-2 bg-[#e1e1e1] shadow-sm h-[44px]
                            border-slate-300 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                            inline w-full rounded-md sm:text-sm focus:ring-1 flex-shrink data-invalid:border-pink-500
                            data-invalid:text-pink-600 peer" placeholder=""
                                {...register("name", {required: true})} data-invalid={!!errors.name}/>
                            {errors.name && <p className="mt-2 text-pink-600 text-sm">
                                Lütfen doldurunuz.
                            </p>}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block after:content-['*'] after:ml-0.5">E-Posta</label>
                            <input type="email" id="email" className="mt-6 px-3 py-2 bg-[#e1e1e1] shadow-sm h-[44px]
                            border-slate-300 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                            block w-full rounded-md sm:text-sm focus:ring-1 flex-shrink data-invalid:border-pink-500
                            data-invalid:text-pink-600 peer z-0" placeholder="" data-invalid={!!errors.email}
                                {...register("email", {required: true})}/>
                            {errors.email && <p className="mt-2 text-pink-600 text-sm">
                                Lütfen doldurunuz.
                            </p>}
                        </div>
                        <div className="mb-5">
                            <label htmlFor="details" className="block after:content-['*'] after:ml-0.5">
                                Detaylar
                            </label>
                            <textarea className="mt-6 px-3 py-2 bg-[#e1e1e1] shadow-sm h-[293px]
                            border-slate-300 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                            block rounded-md sm:text-sm focus:ring-1 w-full flex-shrink data-invalid:border-pink-500
                            data-invalid:text-pink-600 peer" data-invalid={!!errors.details}
                                {...register("details", {required: true})}></textarea>
                            {errors.details && <p className="mt-2 text-pink-600 text-sm">
                                Lütfen doldurunuz.
                            </p>}
                        </div>
                        <div className="mb-5">
                            <input type="submit" className="h-[60px] w-[178px] rounded-[20px] inline-flex  items-center text-b hover:bg-background shadow justify-center bg-white transition-all disabled:bg-white/50" value="Gönder" disabled={status.submitted}/>
                            {status.submitted && !status.info.error && (
                                <span className="bg-tertiary text-white px-4 py-3 rounded relative" role="alert">{status.info.msg}</span>
                            )}
                            {status.submitted && status.info.error && (
                                <span className="bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{status.info.msg}</span>
                            )}
                        </div>
                        <div>
                            (*) işareti bulunan yerleri doldurmak zorunludur.
                        </div>
                    </form>
                </div>
                <div className="md:order-1 relative flex flex-col justify-end items-center">
                    <Image src={envelopeImage} alt="envelope" className="absolute w-full h-full top-0 left-0"/>
                    <div className="self-start">
                        <div className="bg-[#fafafa] p-5 rounded-[20px] w-[315px] h-[100px] relative grow-0 text-b text-lg py-10 ml-[200px]">
                            Merhaba,<br/>
                            Sana nasıl yardımcı olabilirim?
                            <div className="bg-[#fafafa] absolute w-[66px] h-[27px] left-0 -bottom-10 rounded-[10px]"></div>
                        </div>
                        <Image src={peepsImage} alt="peep" className="relative z-10 max-w-[250px]"/>
                    </div>
                </div>
            </div>
        </main>
    )
}