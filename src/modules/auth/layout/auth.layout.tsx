import { Outlet } from "react-router";
import background from "@/assets/bug-or-feature-2.png";

const AuthLayout = () => {
  return (
    <div className="flex h-screen w-screen bg-background text-onPrimary overflow-hidden">
      {/* Lado izquierdo – Imagen */}
      <div className="
        relative hidden 
        md:flex md:w-1/2 
        lg:w-3/5
      ">
        <img
          src={background}
          alt="tienda negocios valanza"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay contenido */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-center px-6">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          </h1>
        </div>

        {/* Oscurecer un poco el fondo si hace falta */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Lado derecho – Formulario */}
      <div className="
        w-full 
        md:w-1/2 
        lg:w-2/5 
        h-full 
        flex flex-col justify-center
        px-4 sm:px-8 lg:px-12
      ">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
