export default function InputGMail(params) {
  return (
    <>
      <div className=" bg-[#F7F2EA] mt-[150px] px-[200px]">
        <h3 className=" font-normal text-[40px] pt-[100px]">Want to know more?</h3>
        <div className=" grid grid-cols-2 gap-[40px] pt-[50px] pb-[100px]">
          <p className=" font-light text-[20px]">
            Join our mailing list and stay up-to-date with the latest news, promotions,
            and exclusive offers from our tea store. Be the first to know about new tea
            arrivals, seasonal blends, and special discounts. Don't miss out on the
            tea-rrific perks - sign up today!
          </p>
          <div>
            <div className="flex">
              <input
                type="text"
                placeholder="name@email.com"
                className=" bg-[#F7F2EA] border-b-2 border-black px-2 py-2 text-[20px] font-light h-[22px] bottom-0 w-full"
              />
              <button className="bg-white border-[2px] border-black px-[40px] py-[12px] text-[20px] font-light ml-3">
                Join
              </button>
            </div>
            <div className="flex">
              <input type="checkbox" className=" mr-[10px]" />
              <p className=" font-light text-[13px]">
                We take your privacy seriously and are committed to protecting your
                personal information. By subscribing to our mailing list, you are
                consenting to receive periodic emails from us about our products,
                promotions, and other tea-related information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
