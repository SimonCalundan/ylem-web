import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-screen h-auto flex bg-dark-blue flex-col md:flex-row justify-around items-center md:items-start text-white px-2 md:px-16 py-16 mt-16 gap-8 md:gap-0">
      <div className="flex flex-col gap-2 w-full h-full justify-start md:w-1/3 px-4">
        <p className="uppercase font-medium text-2xl">Contact</p>
        <div className=" text-gray-400 uppercase flex flex-col gap-2">
          <Link className="hover:underline" href="mailto:contact@ylemjewelry.com">contac@ylemjewelry.com</Link>
          <p>Denmark</p>
          <Link className="hover:underline" href="phoneto:12 34 56 78">FAQ</Link>
          <Link className="hover:underline" href="phoneto:12 34 56 78">Privacy policy</Link>
          <Link className="hover:underline" href="phoneto:12 34 56 78">Terms and conditions</Link>
        </div>
      </div>
      <div className="hidden md:flex flex-col gap-2 w-full md:w-1/3 h-full self-center items-center">
        <Image src="/logo/logo_footer.png" width={200} height={200} alt={"Ylem logo"} />
      </div>
      <div className="flex flex-col gap-2 w-full md:w-1/3 px-4 text-left md:text-right h-full justify-start">
        <p className="uppercase font-medium text-2xl">Ylem Universe</p>
        <div className=" text-gray-400 uppercase flex flex-col gap-2">
          <Link className="flex justify-end" href="/products/entangle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-white hover:opacity-80" width={24} height={24} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M16.5 7.5l0 .01" />
            </svg></Link>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-2 w-full md:w-1/3 items-center">
        <Image src="/logo/logo_footer.png" width={200} height={200} alt={"Ylem logo"} />
      </div>
    </footer>
  )
}
