import { Text, Heading, Img } from "./..";

interface Props {
    classname?: string;
    truchImage?: string;
    headingText?: React.ReactNode;
    descriptionText?: React.ReactNode;
}

export default function DeliveryInfo({
    truchImage = "img_truch.svg",
    headingText = "Free Delivery",
    descriptionText = (
        <>
        This free shipping
        <br/>
        only for selected region
        </>
    ), ...props
} : Props){
    return (
        <div {...props} className={`${props.classname} flex flex-col items-center md:w-full gap-8`}>
            <div className="mx-11 self-stretch rounded-[60px] border-2 border-solid border-gray-500 p-[26px] sm:p-5">
                <Img src={truchImage} width={64} height={64} alt="Truck Image" className="h-[64px] w-[64px]"/>
            </div>
            <div className="flex flex-col items-center justify-center gap-3.5 self-stretch">
                <Heading size="heading" as="h4" className="text-[24px] font-bold text-gray-800">
                    {headingText}
                </Heading>
                <Text as="p" className="text-center text-[18px] font-normal text-gray-500 leading-[27px]">
                    {descriptionText}
                </Text>
            </div>
        </div>
    )
}