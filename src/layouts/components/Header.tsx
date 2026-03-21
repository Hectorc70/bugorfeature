import type { AppDispatch, RootState } from "@/redux/store";
import { AiFillBell } from "react-icons/ai";
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
        <header className="bg-background px-6 py-4 flex items-center justify-end">
            {/* <div className="flex items-center gap-4">
                <TiThMenu className="text-xl cursor-pointer lg:hidden" />
                <input
                    placeholder="Buscar..."
                    className="bg-gray-100 rounded-full px-4 py-2 text-sm outline-none"
                />
            </div> */}

            <div className="flex items-center gap-4">
                <AiFillBell />
                <div className="w-8 h-8 rounded-full bg-gray-300" />
            </div>
        </header>
    );
};

export default Header;

