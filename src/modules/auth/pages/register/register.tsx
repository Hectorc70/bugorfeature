/* eslint-disable @typescript-eslint/no-explicit-any */
import { sileo, Toaster } from "sileo";
// import logo from '@/assets/logo.png'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import FormInput from "@/common/components/input";
import { Button } from "@/common/components/button";
import { FaEye } from "react-icons/fa";

import { useState } from "react";
import { routeNames } from "@/router/routes-names";
import { IoChevronBackOutline } from "react-icons/io5";
import AuthService from "@/modules/auth/services/auth.service";

type FormValues = {
  email: string,
  name: string,
  password: string,
  secondPassword: string,
}
const RegisterPage: React.FC = () => {

  const navigate = useNavigate()
  const { register, handleSubmit, getValues, formState: { errors } } = useForm<FormValues>()
  const [typePassword, setTypePassword] = useState('password')
  // const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)


  const changeVisibilityPassword = () => {
    if (typePassword === 'password') {
      setTypePassword('text')
    } else {
      setTypePassword('password')
    }
  }


  // * ============== SESSION ================


  const onCreateAccount = async (data: FormValues) => {
    if (loading) {
      return
    }
    try {
      await AuthService.createAccount(data)
      sileo.success({
        title
          : "Cuenta creada exitosamente",
      })
      navigate(routeNames.loginPage, { replace: true })
      setLoading(false)
    } catch (error: any) {
      setLoading(false)
      sileo.error({
        title
          : "Error al crear la cuenta",
      })
    }
  }


  return (<>
    <Toaster
      position="top-center"
    />
    <div
      className="
        w-full h-full
        flex flex-col items-center justify-center
        px-4 sm:px-8 lg:px-12
      "
    >
      {/* Header */}
      <div
        className="
          w-full max-w-md lg:max-w-lg
          flex items-center gap-3
          mb-8
        "
      >
        <IoChevronBackOutline
          className="text-3xl cursor-pointer text-primary"
          onClick={() => navigate(-1)}
        />
        <h4 className="text-2xl font-bold text-colorText">
          Crear cuenta
        </h4>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit(onCreateAccount)}
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
          minLength={6}
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

        <FormInput
          label="Repetir contraseña"
          name="secondPassword"
          placeholder="Ingrese nuevamente su contraseña"
          type={typePassword}
          button={<FaEye />}
          functionButton={changeVisibilityPassword}
          error={errors.secondPassword}
          minLength={6}
          register={register("secondPassword", {
            required: {
              value: true,
              message: "La contraseña es requerida",
            },
            validate: (value: string) => {
              const pattern2 = /^[^\s]+$/;
              if (!value.match(pattern2)) {
                return "La contraseña no puede contener espacios";
              }
              if (value !== getValues("password")) {
                return "Las contraseñas no coinciden";
              }
              return true;
            },
          })}
        />

        {/* Submit */}
        <div className="mt-6">
          <Button
            isLoading={loading}
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Crear cuenta
          </Button>
        </div>
      </form>
    </div>
  </>)
}


export default RegisterPage