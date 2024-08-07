import { BannerInicio } from './components/BannerInicio'
import { Button } from './components/Button'
import { Cards } from './components/Cards'
import { CardsDown } from './components/CardsDown'
import { Filtro } from './components/Filtro'
import { ImagemBaixo } from './components/ImagemBaixo'


export default function App() {
  return (
      <div className="">
        <div className="flex flex-col items-center justify-center gap-y-6">
          <BannerInicio />
          <Filtro />
          <div className='flex flex-col items-center justify-center gap-y-6'>
            <Cards />
            <CardsDown />
            <Button />
            <ImagemBaixo />
          </div>
        </div>
      </div>
  )
}
