import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BreadcrumbSection from "./BreadcrumbSection";

export default function CartPage(){
    return (
        <div>
            <Header />
            <BreadcrumbSection />
            <Footer className="mt-[100px]"/>
        </div>
    )
}