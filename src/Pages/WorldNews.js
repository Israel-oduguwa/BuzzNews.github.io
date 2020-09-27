import React from 'react';
import Foote from "../Components/Foote";
import WorldFeed from "../Components/worldFeed";
import NigeriaFeeds from "../Components/NigeriaFeeds";

export default function News() {
    return (
        <>
           <div className="home-page">
            <WorldFeed/>
            <NigeriaFeeds/>
            </div>
            <Foote/>
        </>
    )
}
