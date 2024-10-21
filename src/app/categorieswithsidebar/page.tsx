import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
    title: "Shop by Category with Sidebar - Elliye",
    description: "View your Shopping Cart to review items selected for purchase. Apply coupon codes, update quantities, and proceed to checkout to complete your order"
}

export default function CartPage(){
    return <Page />
}