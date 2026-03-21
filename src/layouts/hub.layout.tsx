import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router";
import { TiThMenu } from "react-icons/ti";
import {Toaster } from "sileo";


const HubLayout = () => {
    //Persisten entre renders
    const navigate = useNavigate();
    // const isOpenSideBar = useSelector((state: RootState) => state.global.isOpenSidebar);
    const [isOpenSideBar, setIsOpenSideBar] = useState(true);
    const [showPushModal, setShowPushModal] = useState(false);
    const [showPushDeniedModal, setShowPushDeniedModal] = useState(false);

    // const onOpenSideBAr = () => {
    //     dispatch(openOrCloseSidebar());
    // };

    return (
        <div className="relative flex h-screen w-screen bg-background m-0 overflow-hidden text-onPrimary p-2">

            {/* Overlay (tablet ↓) */}
            {true && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={() => {}}
                />

            )}
            {/* Sidebar */}
            <div
                className={`
                    fixed lg:relative z-50 h-screen
                    transition-all duration-300 ease-in-out
                    ${isOpenSideBar ? "translate-x-0" : "-translate-x-full"}
                    lg:translate-x-0
                    ${isOpenSideBar ? "lg:w-52" : "lg:w-16"}
                    w-64 lg:w-auto
                `}
            >
                <div
                    className="p-4 cursor-pointer w-full flex items-center justify-center lg:hidden"
                    onClick={() => setIsOpenSideBar(!isOpenSideBar)}
                >
                    <TiThMenu className="text-xl text-onPrimary" />
                </div>

                <Sidebar isOpen={isOpenSideBar} />
            </div>
            {/* Main Content */}
            <div className={`
                    flex-1 min-w-0 flex flex-col bg-background
                    lg:mr-3 lg:my-3
                    rounded-none lg:rounded-2xl
                    p-2
                    ${isOpenSideBar ? "pointer-events-none lg:pointer-events-auto" : ""}
                `}>
                <Header />

                <main className="flex-1 p-2 overflow-hidden w-full h-full bg-hintColor rounded-2xl bg-red">
                    <Toaster position="top-right" />
                    <Outlet />
                </main>
            </div>
        </div >

    );
};

export default HubLayout;
