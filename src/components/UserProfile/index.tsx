import { Img } from "../Img";
import { Text } from "../Text";

interface Props {
    className?: string;
    userImage?: string;
    userDescription?: React.ReactNode;
}

export default function UserProfile({userImage="img_rectangke_28.png", userDescription,...props}: Props) {
    return (
        <div {...props} className={`${props.className} w-[48%] relative h-[400px] md:w-full`}>
            <Img 
            src={userImage} width={800} height={400} alt="Collection Image"
            className="mx-auto h-[400px] w-full flex-1 object-cover"/>
            <Text size="textlg" as="p" className="absolute bottom-0 left-[10%] top-0 my-auto h-max w-[28%] text-[36px] font-normal leading-[54px] text-white-a700 sm:w-[28%] sm:text-[30px]">
                <span>
                    <>
                        Casual
                        <br/>
                    </>
                </span>
                <span className="font-playfairdisplay text-[48px] font-bold">Collection</span>
            </Text>
        </div>
    )
}