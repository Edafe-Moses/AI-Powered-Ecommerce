import Image from "next/image"
import Important from "@/components/ui/important"

const products = ({datas}) => {
    return (
        <div className="my-6 flex border-1 border-[#E5E7EB] rounded-lg">
            {datas.map((data) => (
                <div key={data.id} className="relative border-y-[#E5E7EB] border-l-[#E5E7EB] border-r-0 border-1 w-[227px] h-[413px] flex flex-col justify-center gap-1 items-center">
                    <Image
                        src={data.src}
                        alt={data.id}
                        className="w-[122px] h-[122px]"
                    />
                    <Important
                        text={data.important2}
                        background={data.important2Color}
                        size={'xsm'}
                    />
                    <Important
                        text={data.important1}
                        background={'red'}
                        size={'xsm'}
                    />
                    <p className="text-[13px] font-md">{data.title}</p>
                    <div>
                        <span className="text-[#DC2626] font-bold text-[22px]">
                            ${data.price}
                        </span>
                        <span className="font-medium text-base">
                            ${data.originalPrice}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default products