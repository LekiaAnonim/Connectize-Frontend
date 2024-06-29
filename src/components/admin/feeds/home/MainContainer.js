import React from "react";
import CreateFeed from "./CreateFeed";
import RecommendedProduct from "./RecommendedProduct";

export default function MainContainer(params) {
    return(
        <section className="main-container">
            <CreateFeed />
            <RecommendedProduct />
        </section>
    )
}