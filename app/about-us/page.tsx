import PeepsCard from "@/components/peeps-card"
import peepsOneImage from '../../public/peeps_1.png'
import peepsTwoImage from '../../public/peeps_2.png'
import peepsThreeImage from '../../public/peeps_3.png'

export default function AboutUs() {
    return (
        <main className="bg-background pt-[40px] px-1 min-h-screen">
            <div className="text-center text-b mb-12 rounded-b-[20px] bg-[#fafafa] w-[345px] mx-auto h-[60px] flex items-center justify-center text-2xl">Hakkımızda</div>
            <section className="container mx-auto max-w-[900px]">
                <ul className="grid grid-cols-1 mx-2 auto-rows-fr place-items-stretch place-content-start">
                    <li className="h-full">
                        <PeepsCard image={peepsOneImage} title="Biz Kimiz?">
                        Biz Türkiye’de yapılan çekilişlerin gerçekliğini, şeffaflığını ve güvenilirliğini sağlamak için çalışan bir grup insanız. Yapmak istediğimiz çekiliş   şeffaf, güvenilir ve katılımının kolay olmasını sağlamak, katılınan çekilişin sonucunu kolay öğrenebilmek, kimin kazandığını takip edebilmek,canlı yayınlar ile çekilişleri görünür kılmak.
                        </PeepsCard>
                    </li>
                    <li className="h-full">
                        <PeepsCard image={peepsTwoImage} title="Peki Bu Mümkün mü?" inverse>
                        Tabii ki de mümkün! Bunu ücretsiz olarak başarabilmek için kurduğumuz bu platformda, çekiliş yapmak isteyen firmalarla siz kullanıcıları bir araya getiriyoruz. Böylece kullanıcılar  çekilişlerin hepsini görebiliyor, tekrar tekrar oturum açmadan çok kısa sürede çekilişlere katılabiliyor. 
                        </PeepsCard>
                    </li>
                    <li className="h-full">
                        <PeepsCard image={peepsThreeImage} title="İndirmek ve Çekilişlere Katılmak ÜCRETSİZ">
                        Bu arada hatırlatmak isteriz ki çekilişlere katılmak tamamen ÜCRETSiZ ! Sadece belirli görevleri yerine getirerek çekilişlere ücretsiz katılmak için hemen KESiN’i indir !
                        </PeepsCard>
                    </li>
                </ul>
            </section>
        </main>
    )
}