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
import mobileBackdropImage from '../public/mobile-backdrop.svg'

export default function Home() {
  return (
    <main className="bg-background min-h-screen items-center justify-betweeen">
      <section className="min-h-screen flex flex-col justify-center items-center gap-4 pb-5 relative">
        <Image src={divier} alt='divider' className="w-full absolute top-0 left-0 hidden xl:block min-w-[570px]"/>
        <div className="mb-3 relative xl:z-20 pt-10 flex flex-col-reverse xl:flex-col">
            <div className="text-b max-w-[657px] mb-10 flex flex-col justify-center item-center text-center self-center">
              <h1 className="capitalize xl:text-5xl text-4xl font-bold text-center xl:my-10 mb-5 relative z-20">Yeni Nesil Çekiliş Platformu</h1>
              <h3 className="text-lg text-center mx-5 mb-9 relative z-20">KESiN kullanıcıları çekilişleri rahatlıkla görebiliyor, katılım koşullarını uygulayarak hızlıca katılabiliyor ve sonuçları kolaylıkla takip edebiliyor.</h3>
              <ExploreButton href="#cards-section" className="mx-auto relative z-20 mb-9">Keşfet</ExploreButton>
              <div className="flex flex-col gap-3 justify-center items-center w-[320px] mx-auto xl:absolute xl:top-20 xl:-right-56 relative z-20 xl:hidden">
                <AppStoreBtn/>
                <PlayStoreBtn/>
              </div>
            </div>
            <div className="flex justify-center relative">
              <Image src={giftImage} alt='gift' className='max-h-[720px] w-auto mx-auto -mb-8 xl:-mt-36 relative top-[40px] xl:block'/>
              <div className="flex-col gap-3 justify-center items-center w-[320px] mx-auto mt-16 xl:absolute xl:top-20 xl:-right-56 relative z-20 hidden xl:flex">
                <AppStoreBtn/>
                <PlayStoreBtn/>
              </div>
            </div>
        </div>
        <Image src={mobileBackdropImage} alt='mobile-backdrop' className='w-full xl:hidden block absolute z-10 top-[280px]'/>
        <div className="bottom-24 w-full flex lg:justify-center justify-end lg:m-0 mr-10 z-40 sticky">
          <ScrollIndicator />
        </div>
      </section>
      <section className="flex flex-col justify-between items-center min-h-screen md:min-h-fit bg-[#f1f1f1] py-24" id="cards-section">
        <div className="container mx-auto">
          <h4 className="lg:text-5xl text-2xl font-bold text-center mb-12 text-b max-w-[726px] mx-auto lg:leading-relaxed leading-relaxed">KESiN’le çekilişlere katılmak hem KOLAY hem de ÜCRETSİZ</h4>
          <ul className="gap-5 flex flex-col lg:flex-row mx-2 justify-center place-items-center items-stretch">
              <li className="flex-1 basis-0">
                  <FeaturesCard image={glassImage} title="İncelemek">
                    Hızlıca üye ol, favori markalarınızın çekilişlerini incele
                  </FeaturesCard>
              </li>
              <li className="flex-1 basis-0">
                  <FeaturesCard image={gameboyImage} title="Takip Edebilmek">
                    Çekilişlere ücretsiz katıl, katıldığın gibi indirim kuponu kazan  
                  </FeaturesCard>
              </li>
              <li className="flex-1 basis-0">
                  <FeaturesCard image={dartImage} title="Görebilmek">
                    İndirim kuponlarınızı favori mağazalarınızda kullanın
                  </FeaturesCard>
              </li>
          </ul>
        </div>
      </section>
    </main>
  )
}
