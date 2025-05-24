
const Important = ({text,background, percentage, size}) => {
    return (
        <span className={`text-[${size}] absolute -top-2 -right-1 px-1 text-white bg-[${background}] rounded-[${percentage}]`}>{text}</span>
    )
}

export default Important