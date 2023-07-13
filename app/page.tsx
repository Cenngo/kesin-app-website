import Image from 'next/image'
import giftImage from '../public/gift.png'
import glassImage from '../public/glass.png'
import gameboyImage from '../public/gameboy.png'
import dartImage from '../public/dart.png'
import ExploreButton from '@/components/explore-button'
import AppStoreBtn from '@/components/app-store-button'
import PlayStoreBtn from '@/components/play-store-button'
import Card from '@/components/card'
import FeaturesCard from '@/components/features-card'
import PeepsCard from '@/components/peeps-card'

export default function Home() {
  return (
    <main className="bg-landing-pattern min-h-screen items-center justify-betweeen bg-white pt-20 lg:pt-12">
      <section className="min-h-screen flex flex-col justify-center items-center gap-4 pb-5">
        <div className="mb-3 lg:flex items-center">
            <Image src={giftImage} alt='gift' className='max-h-[450px] w-auto mx-auto'/>
            <div>
              <h1 className="capitalize text-4xl text-center my-5">Yeni Nesil Çekiliş Platformu</h1>
              <h3 className="text-xl font-bold text-center">KESiN platformuyla çekilişlere katılmak artık çok daha kolay!</h3>
            </div>
        </div>
        <div className="flex justify-center items-center gap-12 lg:justify-around mb-3 flex-col lg:flex-row">
            <ExploreButton href="/about-us" className="mx-auto">Keşfet</ExploreButton>
            <div className="flex flex-col gap-3 justify-center items-center w-10/12 mx-auto">
              <AppStoreBtn/>
              <PlayStoreBtn/>
            </div>
        </div>
      </section>
      <section className="py-6 flex flex-col justify-between min-h-screen md:min-h-fit bg-white">
        <h4 className="text-2xl font-bold text-center my-5 text-highlight">KESiN’le çekilişlere katılmak hem kolay hem de ücretsiz</h4>
        <ul className="gap-5 flex flex-col lg:flex-row mx-2 justify-center place-items-center items-stretch">
            <li className="flex-1 basis-0">
                <FeaturesCard image={glassImage} title="Çekilişler Tek Yerde">
                    Ana ekrandaki “Çekilişler” butonu sayesinde, tüm çekilişleri rahatlıkla görebilirsin
                </FeaturesCard>
            </li>
            <li className="flex-1 basis-0">
                <FeaturesCard image={gameboyImage} title="Çekilişlere Katılmak">
                    Reklam izleyerek veya farklı görevleri tamamlayarak, çekilişlere ücretsiz bir şekilde katılabilirsin
                </FeaturesCard>
            </li>
            <li className="flex-1 basis-0">
                <FeaturesCard image={dartImage} title="Sonuçları Takip Etmek Çok Kolay">
                    Bu sayede sonuçları gönül rahatlığıyla öğrenebilirsin
                </FeaturesCard>
            </li>
        </ul>
      </section>
    </main>
  )
}
