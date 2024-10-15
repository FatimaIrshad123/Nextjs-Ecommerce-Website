import {Text,Heading,Img} from "./..";

interface Props {
    className?: string;
    deliveryImage?: string;
    deliveryTitle?: React.ReactNode;
    deliveryDescription?: React.ReactNode;
}

export default function FreeDeliveryInfo ({
    deliveryImage = "img_truck.svg",
    deliveryTitle = "Free Delivery",
    deliveryDescription = (
        <>
            This is free shipping
            <br/>
            only for selected region
        </>
    ), ...props
}: Props) {
    return (
        <div className={`${props.className} flex justify-between items-center gap-5`} {...props}>
            <Img src={deliveryImage} width={48} height={48} alt="Delivery Icon"/>
            <div className="flex w-[72%] flex-col items-start justify-center gap-1.5">
                <Heading size="heading" as="h6" className="text-[18px] font-bold text-gray-800">
                    {deliveryTitle}
                </Heading>
                <Text as="p" className="text-[18px] font-normal leading-[27px] text-gray-500">
                    {deliveryDescription}
                </Text>
            </div>
        </div>
    )
}