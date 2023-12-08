import client from "./sanity/client";
import React from "react";
import HomePage from "./components/homePage/HomePage";
export default async function Home() {
const pets = await client.fetch(`*[_type == "home"]`);
console.log(pets)
    return (
        <>
        <HomePage/>
        </>
    );
}
