'use client'
import { useState } from 'react'
import { groupTea } from '../db'

function Blog({ params }) {
  return (
    <>
      <div key={params.id}>
        <div className=" flex h-[180px] w-[542px] ">
          {}
          <div>
            <img src={params.img} alt="imgTea" className=" h-[180px] w-[270px]" />
          </div>
          <div className=" ml-[20px]  h-[180px]">
            <h6 className=" text-[24px] font-normal">{params.title}</h6>
            <a className=" text-[13px] font-light" href="#">
              by {params.author}
            </a>
            <div>
              <button className=" text-[13px] font-light ">Read</button>
              <img
                src="public/Readicon.svg"
                alt="icon"
                className=" h-[10px] w-[5px] inline ml-[8px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Our_Tea_Blog() {
  const [viewState, useView] = useState(false)
  const [number, setNumber] = useState(4)
  return (
    <>
      <div className=" mt-[150px] px-[200px]">
        <h3 className=" text-[40px] font-normal text-center">Our Tea Blog</h3>
        <div className=" mt-[60px] grid grid-cols-2 gap-x-[57px] gap-y-[40px]">
          {viewState
            ? groupTea.slice(0, number).map((x) => <Blog params={x} />)
            : groupTea.slice(0, number).map((x) => <Blog params={x} />)}
        </div>
        <div className="flex justify-center ">
          {viewState ? (
            <button
              onClick={() => {
                useView(!viewState), setNumber(8)
              }}
              className="bg-white border-[2px] border-black px-[40px] py-[12px] text-[20px] font-light mt-[60px] "
            >
              View All
            </button>
          ) : (
            <button
              onClick={() => {
                useView(!viewState), setNumber(4)
              }}
              className="bg-white border-[2px] border-black px-[40px] py-[12px] text-[20px] font-light mt-[60px] "
            >
              Closed
            </button>
          )}
        </div>
      </div>
    </>
  )
}
