import Image from 'next/image'
import divier from '../public/divider.svg'
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
import ScrollIndicator from '@/components/scroll-indicator'
import AppGaleryButton from '@/components/app-galery-button'

export default function Home() {
  return (
    <main className="bg-background min-h-screen items-center justify-betweeen">
      <section className="min-h-screen flex flex-col justify-center items-center gap-4 pb-5 relative">
        <Image src={divier} alt='divider' className="w-full absolute top-0 left-0"/>
        <div className="mb-3 relative z-10 pt-20">
            <div className="text-base max-w-[657px] mb-10">
              <h1 className="capitalize text-5xl text-black text-center my-5">Yeni Nesil Çekiliş Platformu</h1>
              <h3 className="text-lg text-center">KESiN kullanıcıları çekilişleri rahatlıkla görebiliyor, katılım koşullarını uygulayarak hızlıca katılabiliyor ve sonuçları kolaylıkla takip edebiliyor.</h3>
            </div>
            <div className="flex flex-col items-center relative">
              <ExploreButton href="/about-us" className="mx-auto">Keşfet</ExploreButton>
              <Image src={giftImage} alt='gift' className='max-h-[720px] w-auto mx-auto -mt-12'/>
              <div className="flex flex-col gap-3 justify-center items-center w-[298px] mx-auto mt-16 absolute top-20 -right-56">
                <AppStoreBtn/>
                <PlayStoreBtn/>
                <AppGaleryButton/>
              </div>
            </div>
        </div>
      </section>
      <section className="flex flex-col justify-between items-center min-h-screen md:min-h-fit bg-[#f1f1f1] pb-24">
        <div className="container mx-auto">
          <h4 className="text-5xl font-bold text-center my-5 text-base max-w-[597px] mx-auto">KESiN’le çekilişlere katılmak hem KOLAY hem de ÜCRETSİZ</h4>
          <ul className="gap-5 flex flex-col lg:flex-row mx-2 justify-center place-items-center items-stretch">
              <li className="flex-1 basis-0">
                  <FeaturesCard image={glassImage} title="Görebilmek">
                    Ana ekrandaki “Çekilişler” butonuyla aktif olan çekilişlerin hepsini görebilirsin
                  </FeaturesCard>
              </li>
              <li className="flex-1 basis-0">
                  <FeaturesCard image={gameboyImage} title="Katılabilmek">
                    Çekilişlere ücretsiz bir şekilde reklam izleyerek veya çeşitli görevleri yaparak katılabilirsin
                  </FeaturesCard>
              </li>
              <li className="flex-1 basis-0">
                  <FeaturesCard image={dartImage} title="Takip Edebilmek">
                    “Katıldığım Çekilişler” butonunu kullanarak çekiliş sonuçlarını takip edebilirsin
                  </FeaturesCard>
              </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
