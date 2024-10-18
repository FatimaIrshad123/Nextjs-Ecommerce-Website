import { Img } from "../Img";
import {Text} from "../Text"

interface Props {
    className?: string;
    productImage?: string;
    productName?: React.ReactNode;
    productPrice?: React.ReactNode;
}

export default function ProductCard1({
    productImage = "img_placeholder_106*106.png",
    productName = "Checkered Jacket",
    productPrice = "$299",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex items-center w-full gap-4`}>
            <Img src={productImage} width={106} height={106} alt="Product Image" className="h-[106px] w-[106px] object-cover"/>
            <div className='flex-1 flex flex-col items-start gap-2'>
                <Text as="p" size="texts" className="text-[24px] font-medium text-gray-800">
                    {productName}
                </Text>
                <Text as="p" className="text-[24pxpx] font-medium text-gray-500">
                    {productPrice}
                </Text>
            </div>
        </div>
    )
}