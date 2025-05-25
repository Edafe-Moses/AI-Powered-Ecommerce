import Promo from "@/public/icons/TopCategories/promo.png.png"
import Image from "next/image"

const TopSectionCard = ({datas}) => {

    const adsData = {
        id:'1',
        main: "In store or online your health & safety is our top priority",
        side: "The only supermarket that makes you life easier, make you enjoy life and make ti better",
        image: Promo,
    }

    return (
        <div>
            <div className="my-6 flex border-1 border-[#E5E7EB] rounded-lg">
                {datas.map((data) => (
                    <div key={data.id} className="border-y-[#E5E7EB] border-l-[#E5E7EB] border-r-0 border-1 w-[152px] h-[179.33] flex flex-col justify-center gap-1 items-center">
                        <Image
                            src={data.src}
                            alt={data.id}
                            className="w-[122px] h-[122px]"
                        />
                        <p className="text-[13px] font-md">{data.title}</p>
                    </div>
                ))}
            </div>

            <div className="w-full h-[85px] mb-10 bg-[#FFEDD5] relative overflow-hidden z-4 flex flex-col justify-center pl-[31px] rounded-sm">
                <p className="relative z-2 text-[#EA580C] font-bold text-[22px]">{adsData.main}</p>
                <span className=" relative z-2 text-[#6B7280] text-[14px]">{adsData.side}</span>
                <p className="text-[#EA580C] w-fit absolute z-0 font-bold text-[130px] left-1/3 bottom-[-50px] opacity-40">%50</p>
                <Image
                    src={Promo}
                    alt={adsData.id}
                    className="absolute z-0 right-0"
                />
            </div>
        </div>
    )
}

export default TopSectionCard