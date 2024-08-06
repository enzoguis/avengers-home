import { Cards } from './components/Cards'
import { CardsDown } from './components/CardsDown'

export default function App() {
  return (
    <div>
      <div className="flex justify-center items-center text-5xl font-Poppins-Medium font-bold  text-[#3A3A3A] mb-7 mt-7git">
        <p>Our Products</p>
      </div>
      <div className="">
        <div className="flex flex-col gap-10 justify-center items-center">
          <Cards />
          <CardsDown />
        </div>
      </div>
    </div>
  )
}
