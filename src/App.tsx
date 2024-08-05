import { Cards } from './components/Cards'

export default function App() {
  return (
    <div>
      <div className="flex justify-center items-center text-5xl font-Poppins-Medium font-bold  text-[#3A3A3A] mb-7 mt-7git">
        <p>Our Products</p>
      </div>
      <div className="">
        <div className="flex justify-center items-center">
          <Cards />
        </div>
      </div>
    </div>
  )
}
