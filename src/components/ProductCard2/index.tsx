import { Img } from "../Img";
import {Text} from "../Text"
import {RatingBar} from "../RatingBar";

interface Props {
    className?: string;
    productName?: React.ReactNode;
    productPrice?: React.ReactNode;
}

export default function ProductCard2({
    productName = (
        <>
            Black Adventure <br/> Boots
        </>
    ),
    productPrice = "$299",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center md:w-full gap-4 w-[14%]`}>
            <Img src="img_mask_group.png" width={244} height={244} alt="Product Image" className="h-[244px] w-full object-cover"/>
            <div className='mx-[22px] flex flex-col items-center gap-4 self-stretch'>
                <Text as="p" size="texts" className="text-center leading-9 text-[24px] font-medium text-gray-800">
                    {productName}
                </Text>
                <RatingBar value={4} isEditable={true} color="#f6f7fb" activeColor="#fae952" size={16} className="mx-[42px] flex gap-2.5"/>
                <Text as="p" className="text-[18px] font-medium text-gray-500">
                    {productPrice}
                </Text>
            </div>
        </div>
    )
}