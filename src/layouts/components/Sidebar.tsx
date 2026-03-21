import { NavLink, useNavigate } from "react-router-dom";
import logo from '@/assets/bug-or-feature.png'
// import { useSelector } from "react-redux";
// import { RootState } from "@/redux/store";
// import { IModule } from "@/models/User/user.model";
import { routeNames } from "@/router/routes-names";
import { appVersion } from "@/common/constants";

import { AiFillBell, AiFillFolder, AiFillHome, } from "react-icons/ai";
import type { IModule } from "@/models/user.model";
import { RiTeamFill } from "react-icons/ri";
import { FaSignOutAlt } from "react-icons/fa";


interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
    const navigate = useNavigate();
    const modulesList = [
        {
            id: 1,
            name: "team",
            label: "Equipo",
            route: routeNames.homePage,
        },
        {
            id: 1,
            name: "notifications",
            label: "Notificaciones",
            route: routeNames.homePage,
        }
    ]

    const signOut = () => {
        localStorage.clear();
        navigate(routeNames.loginPage);
        // toast.success('Sesión cerrada')
    }
    return (
        <aside
            className={`
        h-full flex flex-col
        bg-onBackground rounded-xl
        transition-all duration-300 ease-in-out
        ${isOpen ? "lg:w-60" : "lg:w-20"}
    `}
        >
            {/* LOGO */}
            <div className=" flex flex-col items-center justify-center">
                <img src={logo} alt="logo" className="w-40  object-cover" />
                {/* {isOpen && (
                    <span className="font-semibold text-sm tracking-wide text-colorText">
                        Bug or Feature
                    </span>
                )} */}
            </div>

            {/* MAIN NAV */}
            <nav className="px-2 space-y-1">
                <NavLink
                    to={routeNames.homePage}
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                            ${isActive
                            ? "bg-[var(--colorPrimary)]/10 text-[var(--colorPrimary)] font-medium"
                            : "text-[var(--colorGrey)] hover:bg-[var(--colorHover)] hover:text-[var(--colorText)]"
                        }`
                    }
                >
                    <AiFillHome className="text-lg" />
                    {isOpen && <span>Inicio</span>}
                </NavLink>

                <NavLink
                    to={routeNames.projects}
                    className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
        ${isActive
                            ? "bg-[var(--colorPrimary)]/10 text-[var(--colorPrimary)] font-medium"
                            : "text-[var(--colorGrey)] hover:bg-[var(--colorHover)] hover:text-[var(--colorText)]"
                        }`
                    }
                >
                    <AiFillFolder className="text-lg" />
                    {isOpen && <span>Proyectos</span>}
                </NavLink>
            </nav>

            {/* DIVIDER */}
            <div className="my-4 border-t border-gray-100 mx-3" />

            {/* SECONDARY NAV */}
            <nav className="px-2 space-y-1 flex-1 overflow-y-auto">
                {modulesList.map((module: IModule) => (
                    <NavLink
                        key={module.name}
                        to={module.route}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition
                        ${isActive
                                ? "bg-[var(--colorPrimary)]/10 text-[var(--colorPrimary)] font-medium"
                                : "text-[var(--colorGrey)] hover:bg-[var(--colorHover)] hover:text-[var(--colorText)]"
                            }`
                        }
                    >
                        {module.name === "notifications" && <AiFillBell />}
                        {module.name === "team" && <RiTeamFill />}
                        {isOpen && <span>{module.label}</span>}
                    </NavLink>
                ))}
            </nav>

            {/* BOTTOM */}
            <div className="px-3 py-4 border-t border-gray-100">
                <button
                    onClick={signOut}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm
                    text-[var(--colorGrey)] hover:bg-[var(--colorHover)] hover:text-[var(--colorText)] transition"
                >
                    <FaSignOutAlt />
                    {isOpen && <span>Cerrar sesión</span>}
                </button>

                {isOpen && (
                    <p className="text-[10px] text-[var(--colorGrey)] mt-4 text-center">
                        v{appVersion}
                    </p>
                )}
            </div>
        </aside>
    );
};

export default Sidebar;
