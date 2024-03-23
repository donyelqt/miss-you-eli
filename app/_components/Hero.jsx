import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <section>
    <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
        <div className="relative z-10 lg:py-16">
          <div className="relative h-100 sm:h-80 lg:h-full">
            <Image
              alt="logo"
              src="/myeli2.jpg"
              height={300}
              width={800}
              quality={100}
              className='rounded-xl'
            />
          </div>
        </div>
  
        <div className="relative flex items-center bg-purple-300 bg-blend-multiply bg-opacity-50">
          <span
            className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"
          ></span>
  
          <div className="p-8 sm:p-16 lg:p-24">
            <h2 className="text-2xl font-bold sm:text-3xl" style={{ fontFamily: '"Lucida Fax Demi", serif' }}>
              Miss na kita, <span className='text-primary'>Eli</span>. Sana magbati na tayo💜🌷🪻🐈‍⬛ㅤ
            </h2>
  
            <p className="mt-4 text-sm text-gray-600">
            Magbati na tayo, Eli. Pasensya ka na, Eli. Nirerespeto ko naman ang personal mong buhay. Ganito 'yan, naalala mo nung hindi ako nakakapagreply agad sayo dahil busy ako, nagalit ka at nagtatampo at blinock mo pa nga ako. Kaya ngayon, nagiging responsive na ako at sinisikap na kausapin ka lagi pero sumobra na hanggang sa point na kinukulit na kita. Akala ko ganun ang gusto mo, kaya din kita kinukulit kahit pagod ka kasi bigla kang nag-iba ng kilos kaya i-overthink, na akala ko na may iba pang dahilan, which is wag naman dapat. Tas ayun, naging lead na pangungulit ko sayo na di ko naman ginusto na kulitin ka. Kung di ako nag-overthink, probably hinayaan kita magpahinga, which is deserved mo yun, kagaya nung nagrereview ka. Kaya pasensya na din sa pagiging overthink ko at sa naging galaw ko. Kaya sana mapatawad mo ako, magbati na tayo, Eli at sana ma-unblock mo na’ko sa fb at ig. miss na kita, eli💜🪻
            </p>
  
            <a href="https://flowers-for-eli.vercel.app/" className='mt-10'>
              <Button className='mt-10'>CLICK MO ITO, ELI 💌</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero