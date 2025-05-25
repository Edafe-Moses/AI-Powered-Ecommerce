import Link from "next/link"
import Image from "next/image"
import siteLogo from '@/public/icons/Navbar/g10.png'
import Location from "@/public/icons/Navbar/loc.png"
import Search from "@/public/icons/Navbar/search.png"
import SignIn from "@/public/icons/Navbar/human.png"
import Like from "@/public/icons/Navbar/Like.png"
import Cart from "@/public/icons/Navbar/Shop.png"
import Important from "@/components/ui/important"
import DropDown from "@/components/ui/linkDropdown"
import downAccord from "@/public/icons/Navbar/down-accord.png"

const NavBar = () => {
    const navData = {
        fouthSectionLeft: [
            {id: 1, name:'Home', href:""},
            {id: 2, name:'Shop', href:""},
            {id: 3, name:'Fruits & Vegetables', href:""},
            {id: 4, name:"Beverages", href:""},
            {id: 5, name:"Blog", href:""},
            {id: 6, name:"Contact", href:""},
        ],
        fourthSectionRight: [
            {id: 1, name: "Trending Products", href:""},
            {id: 2, name: "Almost Finished", href:""}
        ],
    }
    return (
        /**
         * The nav is divided into Four Section
         * First: Promo with Countdown
         * Second: About Us, My Account, Wishlist, Time of Delivery at set Location, Language, Currency, and Order Tracking
         * Thrid: Company Logo and Name: Location, Search, Account, Cart, Liked Products
         */
        <nav className="">
            {/* This is the First section */}
            <section className="bg-[#634C9F] flex justify-around items-center h-10">
                <span>FREE delivery & 40% Discount for next 3 orders! Place you 1st order In.</span>
                <div className="flex gap-2 text-slate-400 items-center">
                    <span>Until the end of the sale</span>
                    <p><span className="text-lg font-bold text-white mr-1">47</span>days</p>
                    <p><span className="text-lg font-bold text-white mr-1">06</span>hours</p>
                    <p><span className="text-lg font-bold text-white mr-1">55</span>minutes</p>
                    <p><span className="text-lg font-bold text-white mr-1">51</span>sec.</p>
                </div>
            </section>
            {/* This is the Second Section */}
            <section className="text-[#6B7280] border-b-2 border-[#E5E7EB] text-[12px] flex items-center justify-around h-10">
                <div className="flex gap-3.5 items-center">
                    <Link 
                    href={``}
                    >
                        About Us
                    </Link>

                    <Link 
                    href={``}
                    >
                        My account
                    </Link>

                    <Link 
                    href={``}
                    >
                        Wishlist
                    </Link>

                    <p className="pl-3.5 border-l-2 border-[#E5E7EB]">We deliver to you every day from <span className="text-[#EA580C] font-bold ">7:00 to 23:00</span></p>
                </div>
                <div className="flex items-center gap-3.5">
                    <DropDown text={"English"} href={''} width={7.78} height={10} />

                    <DropDown text={"USD"} href={''} width={7.78} height={10} />

                    <Link 
                        href={``}
                    >
                        Order Tracking
                    </Link>
                </div>
            </section>
            {/* This is the Thrid Section */}
            <section className="h-[79px] border-b-2 border-[#E5E7EB] w-full flex items-center justify-center gap-5">
                {/* Title and Image of the Website */}
                <div className="flex items-center gap-2.5">
                    <Image src={siteLogo} width={45} height={39.12} alt="" />
                    <span className="font-bold text-2xl text-black">JinStore</span>
                </div>
                {/* Location*/}
                <div className="grid grid-cols-1 gap-x-4 items-center">
                    <Image src={Location} width={19.08} height={23.4} alt="" className="row-span-2 col-end-1" />
                    <span className="row-end-1 col-end-2 text-[11px]">Deliever to</span>
                    <span className="row-end-2 col-end-2 text-[13px] font-medium text-black">all</span>
                </div>
                {/* Search Bar */}
                <div className="relative w-2/4 h-[46px] flex items-center">
                    <input type="text" name="" id="" className="w-full h-full outline-none rounded-lg bg-[#F3F4F6] text-[#6B7280] text-sm pl-[18px] pr-16" placeholder={`Search for products, categories or brands...`} />
                    <Image src={Search} width={21.13} height={21.11} alt="" className="absolute right-3.5" />
                </div>
                {/* Sign In Account */}
                <div className="grid grid-cols-1 gap-x-4 items-center">
                    <Image src={SignIn} width={19.5} height={21.68} alt="" className="row-span-2 col-end-1" />
                    <span className="row-end-1 col-end-2 text-[11px]">Sign In</span>
                    <span className="row-end-2 col-end-2 text-[13px] font-medium text-black">Account</span>
                </div>
                {/* Like and Cart*/}
                <div className="relative">
                    <Image src={Like} width={23.82} height={20.59} alt="" />
                    <Important
                        text={0}
                        background={'red'}
                        percentage={"full"}
                        size={'sm'}
                    ></Important>
                </div>
                <div className="relative">
                    <Image src={Cart} width={24.18} height={19.5} alt="" />  
                    <Important
                        text={0}
                        background={"red"}
                        percentage={"full"}
                        size={"sm"}
                    ></Important>
                </div>
            </section>
            {/* This it the Fourth Section */}
            <section className="font-semibold text-[15px] border-b-2 border-[#E5E7EB] h-[49px] text-[#030712] flex items-center justify-around">
                <div className="flex items-center gap-6">
                    {navData.fouthSectionLeft.map((data, index) => (
                        (index < 2 ? <DropDown key={data.id} text={data.name} href={data.href} width={9.9} height={5.31} /> :
                            <Link 
                                href={data.href}
                                key={data.id}
                            >
                                {data.name}
                            </Link>
                        )
                    ))}
                </div>

                <div className="flex gap-6">
                    {navData.fourthSectionRight.map((data, index) => (
                        (index == 1 ? 
                            <Link 
                                href={data.href}
                                key={data.id}
                                className="flex items-center gap-1.5 text-[#DC2626]"
                            >
                                {data.name}
                                <span className="bg-gradient-to-r from-[#DC2626] to-[#EA580C] font-bold text-[10px] rounded-sm p-0.5 text-white">SALE</span>
                                <Image src={downAccord} width={9.9} height={5.31} alt="" />
                            </Link>

                            : 
                            
                            <DropDown key={data.id} text={data.name} href={data.href} width={9.9} height={5.31} />)
                    ))}
                </div>
            </section>
        </nav>
    )
}

export default NavBar