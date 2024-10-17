import { Img } from "../Img";
import {Text} from "../Text"

interface Props {
    className?: string;
    jacketImage?: string;
    jacketDescription?: React.ReactNode;
}

export default function JacketCollection({
    jacketImage = "img_sweater_gray_800.svg",
    jacketDescription = "Jacket",
    ...props
}: Props) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-[14%] md:w-full gap-1.5 p-9 sm:p-4`}>
            <Img src={jacketImage} width={96} height={96} alt="Jacket Image" className="h-[96px] w-[96px]"/>
            <Text as="p" className="mb-2.5 text-[18px] font-normal text-gray-500">
                {jacketDescription}
            </Text>
        </div>
    )
}