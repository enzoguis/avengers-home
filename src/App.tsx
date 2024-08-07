import { BannerInicio } from './components/BannerInicio'
import { Filtro } from './components/Filtro'
import { Cards } from './components/Cards'
import { CardsDown } from './components/CardsDown'
import { Button } from './components/Button'
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
          </div>
          <Button />
          <ImagemBaixo />
        </div>
      </div>
  )
}
