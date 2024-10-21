import { CheckBox, Heading, Img, Text } from "@/components"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import JacketCollection from "@/components/JacketCollection"
import UserRating from "@/components/UserRating"
import { Suspense } from "react"

const clothingGrid = [
    {jacketImage: "img_sweater_gray_800.svg", jacketTitle: "Jacket", collectionDescription: "Collection"},
    {jacketImage: "img_tshirt.svg", jacketTitle: "Shirt", collectionDescription: "Collection"},
    {jacketImage: "img_pants.svg", jacketTitle: "Pants", collectionDescription: "Collection"},
    {jacketImage: "img_skirt_gray_800.svg", jacketTitle: "Skirt", collectionDescription: "Collection"},
    {jacketImage: "img_sweater_gray_800.svg", jacketTitle: "Jacket", collectionDescription: "Collection"},
    {jacketImage: "img_sweater_gray_800.svg", jacketTitle: "Jacket", collectionDescription: "Collection"},
    {jacketImage: "img_sweater_gray_800.svg", jacketTitle: "Jacket", collectionDescription: "Collection"},
    {jacketImage: "img_sweater_gray_800.svg", jacketTitle: "Jacket", collectionDescription: "Collection"}
]

export default function CategorieswithSidebarPage() {
    return (
        <div className="flex w-full flex-col items-center bg-white-a700">
            <Header className="self-stretch"/>
            <div className="container-xs mt-8 lg:px-5 md:px-5">
                <div className="flex flex-col gap-[42px]">
                    <div className="flex items-center justify-center">
                        <Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                            Home
                        </Text>
                        <div className="flex flex-1 flex-wrap gap-[17px] px-4">
                            <Text as="p" className="text-[18px] font-medium text-blue_gray-500 lg:text-[15px]">
                                &gt;
                            </Text>
                            <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                Categories
                            </Text>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[70px] lg:gap-[70px] md:gap-[52px] sm:gap-[35px]">
                        <Heading as="h1" className="text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]">
                            Categories
                        </Heading>
                        <div className="flex items-center gap-8 self-stretch md:flex-col">
                            <div className="flex w-[14%] flex-col gap-8 md:w-full">
                                <div className="flex flex-col gap-7">
                                    <div className="flex items-center justify-between gap-5">
                                        <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                            Filter bg Price
                                        </Text>
                                        <Img 
                                        src="img_arrow_down.svg"
                                        width={24} height={24} 
                                        alt="Price Dropdown"
                                        className="h-[24px] w-[24px]"/>
                                    </div>
                                    <div className="flex flex-col items-start gap-6">
                                        <CheckBox 
                                        name="All Price Checkbox"
                                        label="$100 - $250"
                                        id="MidPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"/>
                                        <CheckBox 
                                        name="Mid Price Checkbox"
                                        label="$100 - $250"
                                        id="MidPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-800"/>
                                        <CheckBox 
                                        name="High Price Checkbox"
                                        label="$250 - $500"
                                        id="HighPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"/>
                                        <CheckBox 
                                        name="Premium Price Checkbox"
                                        label="$750 - $1.000"
                                        id="PremiumPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"/>
                                        <CheckBox 
                                        name="Luxury Price Checkbox"
                                        label="$1000 - $1.500"
                                        id="LuxuryPriceCheckbox"
                                        className="gap-4 text-[18px] text-gray-500"/>
                                    </div>
                                </div>
                                <div className="h-px bg-blue_gray-100"/>
                                    <div className="flex flex-col gap-7">
                                        <div className="flex items-center justify-between gap-5">
                                            <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                                Filter by Price
                                            </Text>
                                            <Img 
                                            src="img_arrow_down.svg"
                                            width={24} height={24} 
                                            alt="Price Dropdown"
                                            className="h-[24px] w-[24px]"/>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <div className="flex gap-4">
                                                <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100">
                                                    <Img 
                                                    src="img_star_1.svg"
                                                    width={24} height={24} 
                                                    alt="One Star Image"
                                                    className="h-[24px] w-[24px]"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100">
                                                <div className="flex gap-2 flex-1 px-4"/>
                                                    <Img src="img_star_1_24*24.svg"
                                                    width={24} height={24} 
                                                    alt="First Star Image"
                                                    className="h-[24px] w-[24px]"/>
                                                    <Img src="img_star_2.svg"
                                                    width={24} height={24} 
                                                    alt="Second Star Image"
                                                    className="h-[24px] w-[24px]"/>
                                                </div>
                                            </div>
                                            <div className="flex">
                                                <div className="h-[24px] w-[24px] border-[3px] border-solid border-blue_gray-100">
                                                    <div className="flex gap-2 flex-1 px-4"/>
                                                    <Img src="img_star_1_1.svg"
                                                    width={24} height={24} 
                                                    alt="First Star Image"
                                                    className="h-[24px] w-[24px]"/>
                                                    <Img src="img_star_2_24*24.svg"
                                                    width={24} height={24} 
                                                    alt="Second Star Image"
                                                    className="h-[24px] w-[24px]"/>
                                                    <Img src="img_star_3.svg"
                                                    width={24} height={24} 
                                                    alt="Three Star Image"
                                                    className="h-[24px] w-[24px]"/>
                                                </div>
                                            </div>
                                            <div className="mr-[52px] flex flex-col gap-4 md:mr-0 md:flex-row sm:flex-col">
                                                <UserRating className="mr-8 md:mr-0"/>
                                                <UserRating />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-px bg-blue_gray-100"/>
                                        <div className="flex items-center justify-between gap-5">
                                            <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                                Filter by Price
                                            </Text>
                                            <Img src="img_arrow_down.svg"
                                            width={24} height={24} 
                                            alt="Brand Dropdown"
                                            className="h-[24px] w-[24px]"/>
                                        </div>
                                        <div className="flex items-center justify-between gap-5">
                                            <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                                                Filter by Price
                                            </Text>
                                            <Img src="img_arrow_down.svg"
                                            width={24} height={24} 
                                            alt="Size Dropdown"
                                            className="h-[24px] w-[24px]"/>
                                        </div>
                                    </div>
                                <div className="flex-1 self-center md:self-stretch">
                                    <div className="grid grid-cols-2 gap-8 lg:grid-cols-2 md:grid-cols-1">
                                        <Suspense fallback={<div>Loading feeding...</div>}>
                                            {clothingGrid.map((d,index) => (
                                                <JacketCollection {...d} key={"productsGrid" + index}/>
                                            ))}
                                        </Suspense>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer className="mt-[84px] self-stretch"/>
        </div>

    )
}