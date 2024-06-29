import { Metadata } from "next";
import React from "react";
import { 
    Header, Hero, FAQ 
} from "../components";

export const metadata: Metadata = {  
    title: "The No.1 Marketplace Solution - NFTify",
    description:
        "The one-stop NFT platform to turn your creative ideas into a full-blown NFT marketplace. Create your own NFT marketplace today for free.A Next.js 13 starter project built without using create-next-app.",
};

const page = () => {
    return (
        <div className="relative">
            <Header/>
            <main>
                <Hero/>
                <FAQ/>
            </main>
        </div>
    );
};

export default page;