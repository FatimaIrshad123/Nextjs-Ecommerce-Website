"use client";

import { Button, Heading, Img, Input, ReactTable, Text } from "@/components";
import { createColumnHelper } from "@tanstack/react-table";
import { useMemo } from "react";

const tableData = [
    {
        headerProduct: "Gray T-shirt",
        headerQuantity: "img_grid.svg",
        headerPrice: "$100.99",
        headerTotal: "$100.99",
        PlaceholderImage: "img_placeholder_1.png"
    }, {
        headerProduct: "Red Flannel",
        headerQuantity: "img_grid.svg",
        headerPrice: "$100.99",
        headerTotal: "$100.99",
        PlaceholderImage: "img_warm_pants_pxl7hrp.png"   
    }
];

type TableRowType = {
    headerProduct: string;
        headerQuantity: string;
        headerPrice: string;
        headerTotal: string;
        PlaceholderImage: string;
};

export default function BreadcrumbSection() {
    const tableColumns = useMemo(() => {
        const tableColumnHelper = createColumnHelper<TableRowType>();
        return [
            tableColumnHelper.accessor("headerProduct", {
                cell: (info) => (
                    <div>
                        <div>
                            <Img 
                            src={info.row.original.PlaceholderImage as unknown as string}
                            width={180} height={180} alt="Placeholder Image"
                            className="h-[180px] w-[180px] object-cover"/>
                        </div>
                        <Text size="texts" as="p" className="text-[24px] font-medium text-gray-800 lg:text-[20px]">
                            {info.getValue<string>()}
                        </Text>
                    </div>
                ),
                header: (info) => (
                    <Text as="p" className="pb-[34px]">
                        Product
                    </Text>
                ),meta: {width: "660px"}
            }),
            tableColumnHelper.accessor("headerQuantity", {
                cell: (info) => (
                    <div>
                        <Input
                        size="xs"
                        shape="square"
                        name="Quantity Input"
                        placeholder={`1`}
                        className="relative z-[1] !border pr-[34px] font-medium sm:pr-4"/>
                        <div className="relative mt-[-48px] flex justify-between gap-5">
                            <div className="w-[28%] bg-gray-50 px-[18px] py-[22px] sm:py-4">
                                <div className="h-[2px] w-[8px] bg-gray-500"/>
                            </div>
                            <div className="flex flex-col items-center bg-gray-800 p-4">
                                <Img src={info.getValue<string>()}
                                    width={16} height={16} alt="Increase View"
                                    className="h-[16px] w-[16px]"/>
                            </div>
                        </div>
                    </div>
                ),
                header: (info) => (
                    <Text as="p" className="pb-[30px] pt-1 text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4">
                        Quantity
                    </Text>
                ), meta: {width: "310px"}
            }),
            tableColumnHelper.accessor("headerPrice", {
                cell: (info) => (
                    <Text as="p" size="texts" className="ml-[138px] text-[24px] font-medium text-gray-800 lg:text-[20px]">
                        {info.getValue<string>()}
                    </Text>
                ), 
                header: (info) => (
                    <Text as="p" className="pb-8 pt-0.5 text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4">
                        Quantity
                    </Text>
                ), meta: {width: "276px"}
            }),
            tableColumnHelper.accessor("headerTotal", {
                cell: (info) => (
                    <div className="flex items-center justify-between gap-5">
                        <Text as="p" size="texts" className="text-[24px] font-medium text-gray-800 lg:text-[20px]">
                        {info.getValue<string>()}
                    </Text>
                    <Img src="img_close.svg" width={32} height={32} alt="Remove Product" className="h-[32px] w-[32px]"/>
                    </div>
                ), 
                header: (info) => (
                    <Text as="p" className="pb-8 pt-1 text-left text-[18px] font-medium text-gray-500 lg:text-[15px] sm:pb-4">
                        Total
                    </Text>
                ), meta: {width: "384px"}
            }),
        ]
    },[]);

    return (
        <>
            <div className="mt-[30px] flex flex-col items-center">
                <div className="container-xs flex flex-col items-center lg:px-5 md:px-5">
                    <div className="flex flex-wrap self-stretch">
                        <Text as="p" className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                            Home
                        </Text>
                        <Text as="p" className="text-[18px] font-medium text-blue_gray-100 lg:text-[15px]">
                            &gt;
                        </Text>
                        <Text as="p" className="text-[18px] font-medium text-gray-800 lg:text-[15px]">
                            Shopping Cart
                        </Text>
                    </div>
                    <Heading as='h1' className="mt-[42px] text-[36px] font-bold text-gray-800 lg:text-[30px] md:text-[30px] sm:text-[28px]">
                        Shopping Cart
                    </Heading>

                    <div className="mt-24 flex flex-col gap-[78px] self-stretch lg:gap-[78px] md:gap-[58px] sm:gap-[39px]">
                        <div className="mr-[26px] flex md:mr-0 md:flex-col">
                            <div className="flex w-[42%] items-center justify-center gap-[21px] md:w-full md:flex-col">
                                <div className="flex w-[38%] flex-wrap items-center justify-center gap-6 md:w-full">
                                    <Text size="texts" as="p" className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-gray-800 font-medium text-center text-[24px]">
                                        1
                                    </Text>
                                    <Text size="texts" as="p" className="mb-1.5 self-end text-[24px] font-medium text-gray-800 lg:text-[20px]">
                                        Shopping Cart
                                    </Text>
                                </div>
                                <div className="h-[2px] flex-1 bg-gray-800 md:self-stretch"/>
                            </div>

                            <div className="flex-1  gap-8 flex md:flex-col md:self-stretch">
                            <div className="flex flex-1 items-center md:self-stretch md:flex-col">
                                <div className="flex w-[42%] flex-wrap items-center px-7 sm:px-4 justify-center gap-6 md:w-full">
                                    <Text size="texts" as="p" className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-gray-800 font-medium text-center text-[24px]">
                                        2
                                    </Text>
                                    <Text size="texts" as="p" className="text-[24px] font-medium text-blue_gray-100 lg:text-[20px]">
                                        Checkout
                                    </Text>
                                </div>
                                <div className="h-[2px] flex-1 bg-blue_gray-100 md:self-stretch"/>
                            </div>

                            <div className="flex-wrap w-[24%] items-center justify-center gap-6 flex md:w-full">
                                <Text size="texts" as="p" className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] border-2 border-solid border-gray-800 font-medium text-center text-[24px]">
                                    3
                                </Text>
                                <Text size="texts" as="p" className="mb-1.5 self-end text-[24px] font-medium text-gray-800 lg:text-[20px]">
                                    Completed
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[78px] md:gap-[58px] sm:gap[39px]">
                        <div className="flex flex-col gap-[30px]">
                            <div>
                                <ReactTable 
                                size="xs" 
                                bodyProps={{className:""}}
                                cellProps={{className:"border-blue_gray-100 border-b border-solid"}}
                                className="md:block md:overflow-x-auto md:whitespace-nowrap"
                                columns={tableColumns}
                                data={tableData}/>
                            </div>
                            <div className="flex items-start md:flex-col">
                                <div className="flex w-[28%] items-center justify-between gap-5 border-solid border md:w-full bg-blue_gray-100">
                                    <Text size="texts" as='p'
                                    className="mb-3.5 ml-4 self-end text-[18px] font-normal tracking-[0.36px] lg:text-[15px] text-gray-500_7f">
                                        Enter coupon code
                                    </Text>
                                    <Button shape="square" className="min-w-[136px] px-4">
                                        Apply Code
                                    </Button>
                                </div>
                                <div className="flex flex-1 flex-col items-end gap-4 self-center md:self-stretch">
                                    <Text as='p' className="text-[18px] font-medium text-gray-500 lg:text-[15px]">
                                        Total
                                    </Text>
                                    <Heading as='h2' className="text-[36px] font-bold text-gray-800 lg:text[30px] md:text[30px] sm:text[28px]">
                                        $202.00
                                    </Heading>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-[33px]">
                            <Button size="md" variant='outline' shape="square" className="min-w-[206px] !border px-[15px] font-medium">
                                Continue Shopping
                            </Button>
                            <a href="#" target="_blank">
                                <Button size="md" shape="square" className="min-w-[170px] px-34 sm:px-4 font-medium">
                                    Checkout
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}