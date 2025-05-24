import Image from "next/image"

const TopSectionCard = ({datas}) => {
    return (
        <div className="mt-6.">
            {datas.map((data) => (
                <div>
                    <Image
                        src={data.src}
                        alt={data.id}
                        className=""
                    />
                    <p>{data.title}</p>
                </div>
            ))}
        </div>
    )
}

export default TopSectionCard