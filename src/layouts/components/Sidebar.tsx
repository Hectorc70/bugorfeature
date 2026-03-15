import { NavLink, useNavigate } from "react-router-dom";
import logo from '@/assets/logo.png'
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
            bg-background
            h-screen
            flex flex-col
            text-onBackground
            transition-all duration-300 ease-in-out
            p-1
            ${isOpen ? "lg:w-52" : "lg:w-16"}
        `}
        >
            {/* SIDEBAR HEADER */}
            <div className="bg-onBackground rounded-md p-2">
                {<div className={`flex items-center justify-center w-30 mb-10`}>
                    <img src={logo} alt="logo" className="w-full" />
                </div>}
                <NavLink
                    about='home'
                    to={routeNames.homePage}
                    title='home'
                    className={({ isActive }) =>
                        `
                                group flex items-center justify-center text-colorText
                                ${isOpen
                            ? "flex-row gap-3 px-3 py-2 justify-start"
                            : "flex-col gap-1 py-3"}
                                rounded-md text-sm font-medium
                                transition-colors
                                ${isActive
                            ? "bg-colorHover"
                            : "hover:bg-colorHover"}
                            `
                    }
                >
                    <AiFillHome className="text-lg text-colorText" />
                    <span className="text-colorText">Inicio</span>
                </NavLink>
                <NavLink
                    about='projects'
                    to={routeNames.projects}
                    title='projects'
                    className={({ isActive }) =>
                        `
                                group flex items-center justify-center text-colorText
                                ${isOpen
                            ? "flex-row gap-3 px-3 py-2 justify-start"
                            : "flex-col gap-1 py-3"}
                                rounded-md text-sm font-medium
                                transition-colors 
                                ${isActive
                            ? "bg-primaryHover text-white"
                            : "hover:bg-colorHover text-onPrimary"}
                            `
                    }
                >
                    <AiFillFolder className="text-lg text-colorText" />
                    <span className="text-colorText">Tus proyectos</span>
                </NavLink>
            </div>

            {/* Menu Items */}
            <nav className="flex-1 overflow-y-auto space-y-4 mt-2 w-full bg-onBackground px-2 py-5 rounded-md">
                {modulesList.map((module: IModule) => (
                    <NavLink
                        about={module.name}
                        key={module.name}
                        to={module.route}
                        title={module.label}
                        className={({ isActive }) =>
                            `
                                group flex items-center justify-center text-colorText
                                ${isOpen
                                ? "flex-row gap-3 px-3 py-2 justify-start"
                                : "flex-col gap-1 py-3"}
                                rounded-md text-sm font-medium
                                transition-colors
                                ${isActive
                                ? "bg-hover text-colorText"
                                : "hover:bg-hover text-colorText"}
                            `
                        }
                    >
                        {/* Icono */}

                        {module.name === "notifications" && <AiFillBell className="text-lg text-colorText" />}
                        {module.name === "team" && <RiTeamFill className="text-lg text-colorText" />}
                        {<span className={`block leading-none ${!isOpen ? "text-[10px] text-center" : "text-sm"}`}>
                            {module.label}
                        </span>}
                    </NavLink>
                ))}
            </nav>
            {/* Bottom section (sign out) */}
            <div className="px-2 py-4 flex flex-col items-center w-full">
                <span
                    onClick={signOut}
                    title="Cerrar sesión"
                    className="group cursor-pointer min-w-full flex items-center gap-3 rounded-md px-3 py-2
                    text-sm font-medium transition-colors hover:bg-hoverPrimary hover:text-onPrimary justify-center lg:justify-between"
                >
                    <FaSignOutAlt className="text-lg text-onPrimary" />
                    {isOpen && <span className={`${!isOpen && "hidden"} sm:block truncate text-onPrimary`}>
                        Cerrar sesión
                    </span>}
                </span>
                <span className="text-[10px] text-onPrimary mt-5 text-center w-full">
                    Versión {appVersion}
                </span> <span className="text-[10px] text-onPrimary mt-5">{isOpen && "Versión"} {appVersion}</span>
            </div>
        </aside>
    );
};

export default Sidebar;
