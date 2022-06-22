import Layout from "../Layout";
import HeaderImage from "./HeaderImage";
import {Outlet} from "react-router";

export default function Header() {
    return (
        <>
            <Layout/>
            <HeaderImage/>
            <Outlet/>
        </>
    );
}