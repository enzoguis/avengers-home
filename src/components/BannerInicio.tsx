export function BannerInicio() {
    return (
        <div className="bg-[url('./assets/banner.png')] bg-cover w-screen h-[716px] flex relative">
            <div className="bg-red-50 bg-opacity-100 px-10 py-16 rounded-lg shadow-lg  max-h-none absolute top-[200px] right-[200px]">
                <span className="text-sm text-gray-500 tracking-wide">NEW ARRIVAL</span>
                <h1 className="text-4xl text-[#B88E2F] font-bold mt-2 text-custom-golden">Discover Our <br /> New Collection</h1>
                <p className="text-gray-600 mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br /> elit tellus, luctus nec ullamcorper mattis.</p>
                <button className="mt-6 bg-[#B88E2F] text-white font-semibold py-4 px-10">BUY NOW</button>
            </div>
        </div>
    );}