import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router";
import { TiThMenu } from "react-icons/ti";
import { Toaster } from "sileo";


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
        <div className="h-screen w-screen bg-background">

            {/* APP CONTAINER */}
            <div className="flex h-full overflow-hidden bg-background">
                {/* SIDEBAR */}
                <div className="p-4 bg-background">
                    <Sidebar isOpen={isOpenSideBar} />
                </div>

                {/* RIGHT SIDE */}
                <div className="flex-1 flex flex-col bg-background pb-4 pr-4">

                    {/* HEADER */}
                    <Header />

                    {/* CONTENT */}
                    <main className="bg-onBackground rounded-2xl w-full h-full p-4 overflow-auto">
                        <Outlet />
                    </main>


                </div>
            </div>
        </div>
    );
};

export default HubLayout;
