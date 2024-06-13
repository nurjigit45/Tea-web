export default function Block_ImageTea() {
  return (
    <>
      <div className=" mt-[150px] px-[200px]">
        <h3 className=" font-normal text-[40px] text-center">Explore our Collections</h3>
        <div className=" mt-[60px]  grid grid-cols-5 gap-[40px]">
          <div className="w-[208px] h-[247px]">
            <img src="public/tea/BlackTea.jpeg" alt="imgTea" />
            <h6 
            className=" pt-[10px] text-center font-normal text-[24px]">blcak</h6>
          </div>
          <div className="w-[208px] h-[247px]">
            <img src="public/tea/GreenTea.jpeg" alt="imgTea" />
            <h6 className=" pt-[10px] text-center font-normal text-[24px]">Green</h6>
          </div>
          <div className="w-[208px] h-[247px]">
            <img src="public/tea/WhiteTea.jpeg" alt="imgTea" />
            <h6 className=" pt-[10px] text-center font-normal text-[24px]">White</h6>
          </div>
          <div className="w-[208px] h-[247px]">
            <img src="public/tea/OolongTea.jpeg" alt="imgTea" />
            <h6 className=" pt-[10px] text-center font-normal text-[24px]">Oolong</h6>
          </div>
          <div className="w-[208px] h-[247px]">
            <img src="public/tea/Pu-erhTea.jpeg" alt="imgTea" />
            <h6 className=" pt-[10px] text-center font-normal text-[24px]">Pu-erh</h6>
          </div>
        </div>
      </div>
    </>
  )
}
