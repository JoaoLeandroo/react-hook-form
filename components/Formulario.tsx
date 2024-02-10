"use client";
import { useForm, SubmitHandler } from "react-hook-form";

interface InputProps {
  nome: string;
  email: string;
  password: string;
}

const Formulario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({});

  const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 rounded-lg bg-zinc-700 flex flex-col gap-3 w-[500px] overflow-hidden"
      >
        <div className="flex flex-col text-left">
          <label>Nome Completo</label>
          <input
            className=" placeholder:text-sm px-3 outline-none h-11 rounded-lg focus:border-2 border-white shadow-lg"
            type="text"
            placeholder="Seu nome completo..."
            {...register("nome", { required: true })}
          />
          {errors.nome && (
            <span className="text-red-500 text-xs mt-1 ml-2">
              Informe o seu nome
            </span>
          )}
        </div>
        <div className="flex flex-col text-left">
          <label>Email</label>
          <input
            className=" placeholder:text-sm px-3 outline-none h-11 rounded-lg focus:border-2 border-white shadow-lg"
            type="email"
            placeholder="Informe seu email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1 ml-2">
              Informe o seu e-mail
            </span>
          )}
        </div>
        <div className="flex flex-col text-left">
          <label>Senha</label>
          <input
            className=" placeholder:text-sm px-3 outline-none h-11 rounded-lg focus:border-2 border-white shadow-lg"
            type="password"
            placeholder="Digite uma senha"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs mt-1 ml-2">
              Informe sua senha
            </span>
          )}
        </div>
        <button
          type="submit"
          className="h-11 bg-zinc-600 hover:bg-zinc-500 transition duration-300 mt-3 rounded-lg"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Formulario;
