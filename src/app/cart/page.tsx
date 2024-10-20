import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
    title: "Shopping Cart - Find Your Favorite Products | Elliye",
    description: "View your Shopping Cart to review items selected for purchase. Apply coupon codes, update quantities, and proceed to checkout to complete your order"
};

export default function CartPage(){
    return <Page />
}