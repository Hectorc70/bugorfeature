import type { AppDispatch, RootState } from "@/redux/store";
import { TiThMenu } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Header: React.FC = () => {
    // const location = useLocation();
    const dispatch = useDispatch<AppDispatch>();

    const navigate = useNavigate()
    const handleGoBack = () => {

        if (window.history.length > 1) {
            navigate(-1);
        }
    };
    return (
        <header className="flex justify-between items-center py-2  text-onPrimary ">
            <div className="flex items-center gap-2">

                {/* Sidebar toggle (tablet ↓) */}
                {/* <div className="lg:hidden bg-primary p-1 rounded-md hover:bg-hoverPrimary cursor-pointer">
                    <TiThMenu className="text-xl text-onPrimary" onClick={() => dispatch(openOrCloseSidebar())} />
                </div> */}

                {/* {canGoBack && (
                    <div className="bg-primary p-1 rounded-md mr-2 hover:bg-hoverPrimary">
                        <IoChevronBackOutline
                            className="text-xl cursor-pointer text-onPrimary"
                            onClick={handleGoBack}
                        />
                    </div>
                )} */}

                <div className="flex flex-col">
                    {/* <span className="text-colorText font-bold text-2xl">{title}</span> */}
                    {/* <span className="text-colorText text-lg">{subtitleHeader}</span> */}
                </div>
            </div>
            <div className=" flex flex-row items-center">
                <div className="flex flex-row items-center bg-hintColor rounded-2xl py-2 px-4">
                    <div className="w-8 h-8 rounded-full">
                        <img className="w-full h-full rounded-full" src={` https://ui-avatars.com/api/?name=${name}&background=0D8ABC&&color=fff`} alt="" />
                    </div>
                    <div className="flex flex-col justify-center items-start">
                        {/* <span className=" text-primary ml-2">{name}</span> */}
                        {/* <span className="text-primary ml-2 text-xs">{rool}</span> */}
                    </div>
                </div>
                {/* <div className="ml-10">
                </div> */}
            </div>
        </header>
    );
};

export default Header;

