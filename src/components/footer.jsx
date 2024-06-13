export default function Footer() {
  return (
    <>
      <div className=" px-[200px] bg-[#F7F2EA] grid grid-cols-4 mt-[150px]">
        <div className="">
          <h6 className=" text-[24px] font-normal">Products</h6>
          <ul>
            <li className=" text-[16px] font-light">Black tea</li>
            <li className=" text-[16px] font-light">Green tea</li>
            <li className=" text-[16px] font-light">White tea</li>
            <li className=" text-[16px] font-light">Oolong tea</li>
            <li className=" text-[16px] font-light">Pu-erh tea</li>
          </ul>
        </div>
        <div className="">
          <h6 className=" text-[24px] font-normal">Company</h6>
        </div>
        <div className="">
          <p>
            “Tea is a journey. It can take you to new places and open your mind to new
            experiences. Let every sip transport you to a world of wonder and possibility”
          </p>
        </div>
        <div className="">
          <h6 className=" text-[24px] font-normal">Stay In Touch</h6>
        </div>
      </div>
    </>
  )
}
