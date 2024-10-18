import { Img } from "../Img";
import {Text} from "../Text"

interface Props {
    className?: string;
    productImage?: string;
    productName?: React.ReactNode;
    productPrice?: React.ReactNode;
}

export default function ProductDetails1({
    productImage = "img_mask_group.png",
    productName = (
        <>
            Green <br/> Warm Jacket
        </>
    ),
    productPrice = "$299",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full gap-4`}>
            <Img src={productImage} width={244} height={244} alt="Product Image" className="h-[244px] w-full object-cover"/>
            <div className='mx-10 flex flex-col items-start gap-2 self-stretch'>
                <Text as="p" size="texts" className="text-center leading-9 text-[24px] font-medium text-gray-800">
                    {productName}
                </Text>
                <Text as="p" className="text-[18px] font-medium text-gray-500">
                    {productPrice}
                </Text>
            </div>
        </div>
    )
}