import { Img } from "../Img";
import {Text} from "../Text"

interface Props {
    className?: string;
    productImage?: string;
    productName?: React.ReactNode;
    productPrice?: React.ReactNode;
}

export default function ProductCard({
    productImage = "img_placeholder_3.png",
    productName = "Black Highheels",
    productPrice = "$299",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full gap-4`}>
            <Img src={productImage} width={250} height={250} alt="JProduct Image" className="h-[250px] w-full object-cover"/>
            <div className='mx-7 flex flex-col justify-center items-center self-stretch gap-1.5'>
                <Text as="p" size="texts" className="text-[24px] font-medium text-gray-800">
                    {productName}
                </Text>
                <Text as="p" className="text-[18px] font-medium text-gray-500">
                    {productPrice}
                </Text>
            </div>
        </div>
    )
}