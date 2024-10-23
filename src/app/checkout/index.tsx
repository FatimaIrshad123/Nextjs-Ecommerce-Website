"use client";

import { Heading, Input, Text } from "@/components";
import Header from "@/components/Header";

const dropDownOptions = [
    {label: "Option1", value: "option1"},
    {label: "Option2", value: "option2"},
    {label: "Option3", value: "option3"}
];

export default function CheckoutPage(){
    return (
        <div className="flex w-full flex-col items-center bg-white-a700">
            <Header className="self-stretch"/>

            <div className="container-xs mt-[30px] lg:px-5 md:px-5">
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap self-stretch">
                        <Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                            Home
                        </Text>
                        <Text as="p" className="ml-4 text-[18px] font-medium text-gray-500 lg:text-[15px]">
                            &gt
                        </Text>
                        <Text as="p" className="ml-4 text-[18px] font-medium text-gray-500 lg:text-[15px]">
                            Shopping Cart
                        </Text>
                        <Text as="p" className="ml-4 text-[18px] font-medium text-gray-500 lg:text-[15px]">
                            Checkout
                        </Text>
                    </div>
                    <Heading as="h1" className="mt-[38px] text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]">
                        Checkout
                    </Heading>

                    <div className="mt-[100px] self-stretch">
                        <div className="flex flex-col gap-20 lg:gap-20 md:gap-[60px] sm:gap-10">
                            <div className="mr-7 flex md:mr-0 md:flex-col">
                                <div className="flex w-[42%] items-center justify-center gap-[21px] md:w-full md:flex-col">
                                    <div className='flex w-[38%] flex-wrap items-center justify-center gap-6 md:w-full'>
                                    <Text as="p" size="texts" className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid font-medium text-center text-gray-800 text-[24px]">
                                        1
                                    </Text>
                                    <Text size="texts" as="p" className="mb-1.5 text-[24px] self-end font-medium text-gray-800 lg:text-[20px]">
                                        Shopping Cart
                                    </Text>
                                    </div>
                                    <div className="h-2px] flex-1 bg-gary-800 md:self-stretch"/>
                                </div>

                                <div className="flex flex-1 items-center md:self-stretch md:flex-col">
                                    <div className='flex flex-1 flex-wrap items-center justify-center gap-6 px-6 md:self-stretch sm:px-4'>
                                    <Text as="p" size="texts" className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid font-medium text-center text-gray-800 text-[24px]">
                                        2
                                    </Text>
                                    <Text size="texts" as="p" className="mb-1.5 text-[24px] self-end font-medium text-gray-800 lg:text-[20px]">
                                        Checkout
                                    </Text>
                                    </div>
                                    <div className="ml-8 h-[2px]w-[44%] bg-blue_gary-800 md:ml-0"/>

                                    <div className='flex flex-1 flex-wrap items-center justify-center gap-6 md:self-stretch'>
                                    <Text as="p" size="texts" className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid font-medium text-center text-gray-800 text-[24px]">
                                        3
                                    </Text>
                                    <Text size="texts" as="p" className="mb-1.5 text-[24px] self-end font-medium text-gray-800 lg:text-[20px]">
                                        Completed
                                    </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center md:flex-col">
                                <div className="flex w-[46%] flex-col gap-8 md:w-full">
                                    <Input size="md"
                                    variant="underline"
                                    shape="square" name="Buyer Info Title" placeholder={`Buyer Info`}
                                    className="w-[88%] !border-b font-medium"/>
                                    <div className="flex flex-col items-start gap-4">
                                    <Text size="texts" as="p" className=" text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                        Full name
                                    </Text>
                                    <Input               shape="square" name="Full Name Input" 
                                    className="w-[88%] !border-b "/>
                                    </div>

                                    <div className="flex flex-col items-start gap-4">
                                    <Text size="texts" as="p" className=" text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                        Address
                                    </Text>
                                    <Input               shape="square" name="Contact Input" 
                                    className="w-[88%] !border-b "/>
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                    <Text size="texts" as="p" className=" text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                        COntact
                                    </Text>
                                    <Input               shape="square" name="Contact Input" 
                                    className="w-[88%] !border-b "/>
                                    </div>
                                    <div className="flex flex-col items-start gap-4">
                                    <Text size="texts" as="p" className=" text-[18px] font-normal text-gray-500 lg:text-[15px]">
                                        City
                                    </Text>
                                    <Input               shape="square" name="City Input" 
                                    className="w-[88%] !border-b "/>
                                    </div>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
    )
}