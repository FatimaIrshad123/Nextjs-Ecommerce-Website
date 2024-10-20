import { Img } from "../Img";

interface Props {
    className?: string;
}

export default function UserRating({...props}: Props) {
    return (
        <div {...props} className={`${props.className} flex items-center gap-4 flex-1`}>
            <Img src="img_checkmark.svg" width={24} height={24} alt="Checkmark" className="h-[24px] w-[24px]"/>
            <div className="flex flex-1 gap-2">
                <Img src="img_star_1_2.svg" width={24} height={24} alt="Star Half" className="h-[24px] w-[24px]"/>
                <Img src="img_star_2_1.svg" width={24} height={24} alt="Star Full" className="h-[24px] w-[24px]"/>
                <Img src="img_star_3_24*24.svg" width={24} height={24} alt="Star Three" className="h-[24px] w-[24px]"/>
                <Img src="img_star_5.svg" width={24} height={24} alt="Star FIve" className="h-[24px] w-[24px]"/>
            </div>
        </div>
    )
}