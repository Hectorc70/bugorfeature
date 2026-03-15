/* eslint-disable @typescript-eslint/no-explicit-any */
// import logo from '@/assets/logo.png'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { routeNames } from "@/router/routes-names";
import AuthService from "@/modules/auth/services/auth.service";
import { sileo, Toaster } from "sileo";
import { Button } from "@/common/components/button";
import { FaEye } from "react-icons/fa";
import FormInput from "@/common/components/input";

type FormValues = {
  email: string,
  password: string,
}
const LoginPage: React.FC = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
  const [typePassword, setTypePassword] = useState('password')
  const [loading, setLoading] = useState(false)



  const changeVisibilityPassword = () => {
    if (typePassword === 'password') {
      setTypePassword('text')
    } else {
      setTypePassword('password')
    }
  }

  const onLogin = async (data: FormValues) => {
    if (loading) {
      return
    }
    try {
      await AuthService.login(data)
      navigate(routeNames.ownerPage, { replace: true })
      setLoading(false)
    } catch (error: any) {
      sileo.error({
        title
          : "Error al iniciar sesión",
      })
    }
  }
  return (
    <>
      <Toaster
        position="top-center"
      />
      <div className="
        w-full h-full 
        flex flex-col items-center justify-center
        px-4 sm:px-8 lg:px-12
      ">
            {/* Título */}
            <h4 className="
          text-2xl font-bold text-colorText
          mt-8 mb-8
          md:mt-12 md:mb-12
        ">
          Iniciar sesión
        </h4>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit(onLogin)}
          className="
        w-full 
        max-w-md lg:max-w-lg
        flex flex-col gap-2
      "
        >
          <FormInput
            label="Correo electrónico"
            name="email"
            type="email"
            placeholder="Ingrese su correo"
            error={errors.email}
            register={register("email", {
              required: {
                value: true,
                message: "El correo es requerido",
              },
              validate: (value: string) => {
                const pattern2 = /^[^\s]+$/;
                if (!value.match(pattern2)) {
                  return "El correo no puede contener espacios";
                }
                return true;
              },
            })}
          />

          <FormInput
            label="Contraseña"
            name="password"
            placeholder="Ingrese su contraseña"
            type={typePassword}
            button={<FaEye />}
            functionButton={changeVisibilityPassword}
            error={errors.password}
            register={register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
              validate: (value: string) => {
                const pattern2 = /^[^\s]+$/;
                if (!value.match(pattern2)) {
                  return "La contraseña no puede contener espacios";
                }
                return true;
              },
            })}
          />

          {/* Forgot password */}
          <div className="flex justify-end mt-1">
            <button
              type="button"
              // onClick={handleForgotPassword}
              className="text-sm text-primary hover:underline"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Submit */}
          <div className="mt-6">
            <Button
              isLoading={loading}
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              Iniciar sesión
            </Button>
          </div>
        </form>

        {/* Registro */}
        <section className="mt-10 w-full max-w-md lg:max-w-lg text-center">
          <span className="text-md text-colorText block">
            ¿No tienes una cuenta?
          </span>
          <Button
            onClick={() => navigate(routeNames.registerPage)}
            variant="secondary"
            size="lg"
            className="mt-3 w-full"
          >
            Crear una cuenta
          </Button>
        </section>
      </div>
    </>

  );

}


export default LoginPage