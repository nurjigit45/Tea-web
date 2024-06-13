import { db } from '../db'

function CommentsFunc({ key, name, comment }) {
  return (
    <>
      <div key={key}>
        <div className="font-light text-[16px]">{comment}</div>
        <div className="font-semibold text-[20px]">{name}</div>
      </div>
    </>
  )
}

export default function Blockcomments() {
  //   const b = db
  return (
    <>
      <div className=" bg-[#F7F2EA] mt-[150px] px-[200px]">
        <h3 className=" font-boby font-normal text-[40px] pt-[60px] text-center">
          What our Clients say
        </h3>
        <div className=" pt-[60px] grid grid-cols-4 gap-[26px]">
          {db.map((b) => (
            <CommentsFunc key={b.id} name={b.name} comment={b.comment} />
          ))}
        </div>
      </div>
    </>
  )
}
