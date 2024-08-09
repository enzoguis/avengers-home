import { BannerInicio } from './components/BannerInicio'
import { Filtro } from './components/Filtro'
import { Cards } from './components/Cards'
import { CardsDown } from './components/CardsDown'
import { Carrossel } from './components/Carrossel'
import { Button } from './components/Button'
import { ImagemBaixo } from './components/ImagemBaixo'


export default function App() {
  return (
        <div className="flex flex-col items-center justify-center gap-y-16">
          <BannerInicio />
          <Filtro />
          <div className='flex flex-col items-center justify-center gap-y-8'>
            <p className='font-bold text-[50px] text-[#3A3A3A]'>Our Products</p>
            <Cards />
            <CardsDown />
          </div>
            <Button />
            <ImagemBaixo />
        </div>
  )
}
