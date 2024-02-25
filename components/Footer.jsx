import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-screen h-auto flex bg-dark-blue flex-col md:flex-row justify-around items-center md:items-start text-white px-2 md:px-16 py-16 mt-16 gap-8 md:gap-0">
      <div className="flex flex-col gap-2 w-full h-full justify-start md:w-1/3 px-4">
        <p className="uppercase font-medium text-2xl">Contact</p>
        <div className=" text-gray-400 uppercase flex flex-col gap-2">
          <Link className="hover:underline" href="mailto:contact@ylemjewelry.com">contact@ylemjewelry.com</Link>
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
          <Link className="hover:underline flex justify-end" href="/products/entangle">
            Instagram
          </Link>
        </div>
      </div>
      <div className="flex md:hidden flex-col gap-2 w-full md:w-1/3 items-center">
        <Image src="/logo/logo_footer.png" width={200} height={200} alt={"Ylem logo"} />
      </div>
    </footer>
  )
}
