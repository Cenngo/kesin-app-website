import PeepsCard from "@/components/peeps-card"
import peepsOneImage from '../../public/peeps_1.png'
import peepsTwoImage from '../../public/peeps_2.png'
import peepsThreeImage from '../../public/peeps_3.png'

export default function AboutUs() {
    return (
        <main className="bg-landing-pattern lg:pt-12 pt-20">
            <section className="py-6 min-h-screen flex md:container mx-auto">
                <ul className="flex flex-col gap-5 mx-2 justify-center">
                    <li>
                        <PeepsCard image={peepsOneImage} title="Biz Kimiz?">
                            Biz Türkiye’de yapılan çekilişlerin gerçekliğini, şeffaflığını ve güvenilirliğini sağlamak için çalışan bir grup insanız. Yapmak istediğimiz çekiliş   şeffaf, güvenilir ve katılımının kolay olmasını sağlamak, katılınan çekilişin sonucunu kolay öğrenebilmek, kimin kazandığını takip edebilmek,canlı yayınlar ile çekilişleri görünür kılmak.
                        </PeepsCard>
                    </li>
                    <li>
                        <PeepsCard image={peepsTwoImage} title="Peki Bu Mümkün mü?">
                            Tabii ki de mümkün! Bunu ücretsiz olarak başarabilmek için kurduğumuz bu platformda, çekiliş yapmak isteyen firmalarla görüşüp, onların çekilişlerini üstlenip, sizlerle paylaşıyoruz.
                        </PeepsCard>
                    </li>
                    <li>
                        <PeepsCard image={peepsThreeImage} title="Bu Arada Katılmak Ücretsiz!">
                            Daha önce söylemiş olabiliriz ama tekrar söylemek istiyoruz kimin
                            ÇEKİLİŞLERE KATILMAK “ÜCRETSİZ”
                        </PeepsCard>
                    </li>
                </ul>
            </section>
        </main>
    )
}