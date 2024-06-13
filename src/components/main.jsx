import Block_ImageTea from '../ui/block_ImageTea'
import Blockcomments from '../ui/block_Comments'
import InputGMail from '../ui/input'
import FuncPrioritise from '../ui/prioritise'
import Our_Tea_Blog from '../ui/our_Tea_Blog'


export default function Main() {
  return (
    <>
      <div>
        <div className=" px-[200px]">
          <p className=" text-center font-body font-light text-[40px] mt-[150px]">
            "Tea is not just a drink, it's a way of life and a <br /> way to connect with
            our loved ones."
          </p>
        </div>
        <Block_ImageTea />
        <Blockcomments />
        <Our_Tea_Blog/>
        <InputGMail />
        <FuncPrioritise />
      </div>
    </>
  )
}
