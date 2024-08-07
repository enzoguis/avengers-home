import { BannerInicio } from './components/BannerInicio'
import { Button } from './components/Button'


export default function App() {
  return (
    <div>
      <div className="">
        <div className="flex flex-col">
          <BannerInicio />
          <Button />
        </div>
      </div>
    </div>
  )
}
