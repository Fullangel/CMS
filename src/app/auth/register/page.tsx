"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
// import { useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  //   const [formData, setFormData] = useState({
  //     nombre: "",
  //     segundoNombre: "",
  //     primerApellido: "",
  //     segundoApellido: "",
  //     cedula: "",
  //     tipoDocumento: "V",
  //     carrera: "",
  //     direccion: "",
  //     preguntaSecreta: "",
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });

  //   const handleSubmit = (e: React.FormEvent) => {
  //     e.preventDefault();
  //     // Handle registration logic here
  //   };

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log(errors);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Section - Registration Form */}
      <div className="w-full lg:w-2/3 bg-gradient-to-b from-blue-500 to-blue-600 p-6 lg:p-12">
        <Card className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg border-white/20">
          <CardHeader className="space-y-1 text-center text-white">
            <CardTitle className="text-3xl font-bold tracking-tight">
              Registro de Usuario
            </CardTitle>
            <CardDescription className="text-blue-100">
              Complete todos los campos para crear su cuenta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Información Personal
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nombre" className="text-white">
                      Primer Nombre
                    </Label>
                    <Input
                      id="first_name"
                      type="text"
                      {...register("first_name", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />

                    {errors.first_name && (
                      <span className="text-red-500">
                        {errors.first_name.message as React.ReactNode}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="segundoNombre" className="text-white">
                      Segundo Nombre
                    </Label>
                    <Input
                      id="last_name"
                      type="text"
                      {...register("last_name", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />

                    {errors.last_name && (
                      <span className="text-red-500">
                        {errors.last_name.message as React.ReactNode}
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="primerApellido" className="text-white">
                      Primer Apellido
                    </Label>
                    <Input
                      id="first_surname"
                      type="text"
                      {...register("first_surname", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />

                    {errors.first_surname && (
                      <span className="text-red-500">
                        {errors.first_surname.message as React.ReactNode}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="segundoApellido" className="text-white">
                      Segundo Apellido
                    </Label>
                    <Input
                      id="second_surname"
                      type="text"
                      {...register("second_surname", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />

                    {errors.second_surname && (
                      <span className="text-red-500">
                        {errors.second_surname.message as React.ReactNode}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Document Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Documento de Identidad
                </h3>
                <div className="flex space-x-4">
                  <div className="w-24">
                    <Label htmlFor="tipoDocumento" className="text-white">
                      Tipo
                    </Label>
                    <Select defaultValue="V">
                      <SelectTrigger className="bg-white/20 border-white/30 text-white">
                        <SelectValue placeholder="Tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="V">V</SelectItem>
                        <SelectItem value="E">E</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="cedula" className="text-white">
                      Número de Cédula
                    </Label>
                    <Input
                      id="cedula"
                      type="number"
                      {...register("cedula", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />

                    {errors.cedula && (
                      <span className="text-red-500">
                        {errors.cedula.message as React.ReactNode}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Academic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Información Académica
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="carrera" className="text-white">
                    Carrera
                  </Label>
                  <Input
                    id="specialization"
                    type="text"
                    {...register("specialization", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                    })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                  />

                  {errors.specialization && (
                    <span className="text-red-500">
                      {errors.specialization.message as React.ReactNode}
                    </span>
                  )}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Información de Contacto
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="direccion" className="text-white">
                    Dirección
                  </Label>
                  <Textarea
                    id="address"
                    {...register("address", {
                      required: {
                        value: true,
                        message: "El campo es requerido",
                      },
                    })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/70 min-h-[100px]"
                  />

                  {errors.address && (
                    <span className="text-red-500">
                      {errors.address.message as React.ReactNode}
                    </span>
                  )}
                </div>
              </div>

              {/* Account Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">
                  Información de Cuenta
                </h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Correo Electrónico
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />

                    {errors.email && (
                      <span className="text-red-500">
                        {errors.email.message as React.ReactNode}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">
                        Contraseña
                      </Label>
                      <Input
                        id="password"
                        type="password"
                        {...register("password", {
                          required: {
                            value: true,
                            message: "El campo es requerido",
                          },
                        })}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                      />

                      {errors.password && (
                        <span className="text-red-500">
                          {errors.password.message as React.ReactNode}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preguntaSecreta" className="text-white">
                      Pregunta Secreta
                    </Label>
                    <Input
                      id="question"
                      type="text"
                      {...register("question", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />

                    {errors.question && (
                      <span className="text-red-500">
                        {errors.question.message as React.ReactNode}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="respuestaSecreta" className="text-white">
                      Respuesta Secreta
                    </Label>
                    <Input
                      id="answer"
                      type="text"
                      {...register("answer", {
                        required: {
                          value: true,
                          message: "El campo es requerido",
                        },
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />

                    {errors.answer && (
                      <span className="text-red-500">
                        {errors.answer.message as React.ReactNode}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-colors"
                >
                  Registrarse
                </Button>
                <p className="text-center text-white/90 text-sm">
                  ¿Ya tiene una cuenta?{" "}
                  <Link
                    href="/login"
                    className="text-white hover:text-blue-100 underline underline-offset-4"
                  >
                    Iniciar Sesión
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Right Section - Logo Display */}
      <div className="hidden lg:flex lg:w-1/3 bg-gray-50 items-center justify-center p-12">
        <div className="max-w-md w-full space-y-8 text-center">
          {/* <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-hMfL5yXjBRWHFCoC1dBrZuUFqERlv3.jpeg"
            alt="SGPU Logo"
            width={300}
            height={300}
            className="w-auto h-auto max-w-[300px] mx-auto"
          /> */}
          <h2 className="text-2xl font-bold text-gray-900">
            Sistema de Gestión de Preparadurías Universitario
          </h2>
        </div>
      </div>
    </div>
  );
}
