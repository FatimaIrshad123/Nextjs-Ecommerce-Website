import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/homepagevtwo`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1 
        }, {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/homepagevthree`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        }, 
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/categorieswithsidebar`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1 
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/productlist`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1 
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/productdetails`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1 
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1 
        }, 
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1 
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/completed`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1 
        }
    ]
}