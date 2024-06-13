// import { IconName } from "react-icons/ai";

// width: 1200px;
// height: 142px;
// font-family: var(--font-family);
// font-weight: 400;
// font-size: 18px;
// color: #151618;

function List({ children }) {
  return (
    <>
      <li>
        <a href="#" className=" text-lg font-normal">
          Black
        </a>
      </li>
    </>
  )
}

export default function Header() {
  return (
    <>
      <div className=" flex justify-between px-[200px] py-[29px]">
        <img src="/public/Group 4.svg" alt="icon" className=" h-[105px] w-[73px]" />
        <ul className=" flex gap-[70px] pt-[50px]">
          <li>
            <a href="#" className=" text-[18px] font-normal">
              Black
            </a>
          </li>
          <li>
            <a href="#" className=" text-[18px] font-normal">
              Green
            </a>
          </li>
          <li>
            <a href="#" className=" text-[18px] font-normal">
              Whtie
            </a>
          </li>
          <li>
            <a href="#" className=" text-[18px] font-normal">
              Ooling
            </a>
          </li>
          <li>
            <a href="#" className=" text-[18px] font-normal">
              Pu-erh
            </a>
          </li>
        </ul>
        <ul className=" flex pt-[50px]">
          <li>
            <a href="#">
              <img src="public/basket-icon.svg" alt="basket" />
            </a>
          </li>
          <li className=" ml-[20px]">
            <a href="#">
              <img src="public/admin-icon.svg" alt="admin" />
            </a>
          </li>
          <li className=" ml-[100px]">
            <a href="#">
              <img src="public/search-icon.svg" alt="search" />
            </a>
          </li>
        </ul>
      </div>

      <div className=" relative">
        <div className=" absolute pl-48 bottom-0 text-white">
          <p className=" text-6xl font-normal font-boby">
            A cup of tea is a moment of calm in the chaos of life
          </p>
          <p className=" text-2xl font-normal font-boby">
            Wide selection of high-quality teas from all over the world, carefully curated
            by tea experts.
          </p>
        </div>
        <img src="/public/Rectangle 75.png" alt="icon" />
      </div>
    </>
  )
}
