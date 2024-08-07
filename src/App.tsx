import { BannerInicio } from './components/BannerInicio'
import { Button } from './components/Button'
import { Cards } from './components/Cards'
import { CardsDown } from './components/CardsDown'
import { ImagemBaixo } from './components/ImagemBaixo'


export default function App() {
  return (
    <div>
      <div className="">
        <div className="flex flex-col">
          <BannerInicio />
          <Cards />
          <CardsDown />
          <Button />
          <ImagemBaixo />
        </div>
      </div>
    </div>
  )
}
