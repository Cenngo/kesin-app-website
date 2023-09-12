'use client'
import { useRef, useState } from "react"
import * as reactHookForm from "react-hook-form"
import peepsImage from '../../public/peeps_4.png'
import Image from "next/image"

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
        <main className="min-h-screen md:flex justify-around bg-landing-pattern pt-24 text-secondary px-1">
            <div className="md:container md:px-12 mx-auto order-2 pb-5">
                <form className="bg-white/80 rounded-3xl w-full group p-6" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <div className="mb-5">
                        <label htmlFor="name" className="block after:content-['*'] after:ml-0.5 after:text-red-500 font-bold">Ad Soyad</label>
                        <input type="text" id="name" className="mt-1 px-3 py-2 bg-white/40 border shadow-sm
                        border-slate-300 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                        inline w-full rounded-md sm:text-sm focus:ring-1 flex-shrink data-invalid:border-pink-500
                        data-invalid:text-pink-600 peer" placeholder=""
                               {...register("name", {required: true})} data-invalid={!!errors.name}/>
                        {errors.name && <p className="mt-2 text-pink-600 text-sm">
                            Lütfen doldurunuz.
                        </p>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block after:content-['*'] after:ml-0.5 after:text-red-500 font-bold">E-Posta</label>
                        <input type="email" id="email" className="mt-1 px-3 py-2 bg-white/40 border shadow-sm
                        border-slate-300 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                        block w-full rounded-md sm:text-sm focus:ring-1 flex-shrink data-invalid:border-pink-500
                        data-invalid:text-pink-600 peer z-0" placeholder="" data-invalid={!!errors.email}
                            {...register("email", {required: true})}/>
                        {errors.email && <p className="mt-2 text-pink-600 text-sm">
                            Lütfen doldurunuz.
                        </p>}
                    </div>
                    <div className="mb-5">
                        <label htmlFor="details" className="block after:content-['*'] after:ml-0.5 after:text-red-500 font-bold">
                            Detaylar
                        </label>
                        <textarea className="mt-1 px-3 py-2 bg-white/40 border shadow-sm
                        border-slate-300 placeholder-slate-600 focus:outline-none focus:border-sky-500 focus:ring-sky-500
                        block rounded-md sm:text-sm focus:ring-1 w-full h-48 flex-shrink data-invalid:border-pink-500
                        data-invalid:text-pink-600 peer" data-invalid={!!errors.details}
                            {...register("details", {required: true})}></textarea>
                        {errors.details && <p className="mt-2 text-pink-600 text-sm">
                            Lütfen doldurunuz.
                        </p>}
                    </div>
                    <div className="mb-5">
                        <input type="submit" className="bg-secondary text-white p-3 rounded-xl mr-2 cursor-pointer enabled:hover:bg-primary disabled:opacity-50" value="Gönder" disabled={status.submitted}/>
                        {status.submitted && !status.info.error && (
                            <span className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">{status.info.msg}</span>
                        )}
                        {status.submitted && status.info.error && (
                            <span className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{status.info.msg}</span>
                        )}
                    </div>
                    <div>
                        (*) işareti bulunan yerleri doldurmak zorunludur.
                    </div>
                </form>
            </div>
            <div className="flex flex-col basis-1/2 self-bottom justify-end md:order-1">
                <div className="bg-white/40 p-5 rounded-3xl relative grow-0 text-white font-bold my-20 py-10 w-2/3 self-end
                bg-gradient-to-bl">
                    Merhaba,<br/>
                    Sana nasıl yardımcı olabilirim?
                    <div className="bg-white/40 absolute w-24 h-5 left-0 -bottom-6 rounded-lg"></div>
                    <div className="bg-white/40 absolute w-12 h-5 left-0 -bottom-12 rounded-lg"></div>
                    <div className="bg-white/40 absolute w-6 h-5 left-0 -bottom-[4.5rem] rounded-lg"></div>
                </div>
                <Image src={peepsImage} alt="peep" className="self-start -mt-10"/>
            </div>
        </main>
    )
}