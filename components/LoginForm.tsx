import { useForm } from "react-hook-form"
import { LoginFormType } from "../app/types/auth.type"
import { loginSchema } from "../app/validations/login.validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormType>({
		resolver: yupResolver(loginSchema),
	})
	type OnLoginProps = {
		email: string
		password: string
	}
	const onLogin = ({ email, password }: OnLoginProps) => {
		console.log({
			email: email,
			pasword: password,
		})
	}
	return (
		<form
			onSubmit={handleSubmit(onLogin)}
			className={"w-full pt-2 duration-300 ease-in-out"}
		>
			<div className="flex flex-col mt-5 text-gray-400 text-sm">
				<label htmlFor="#" className="mb-2">
					Email address
				</label>
				<input
					placeholder="Enter your email address"
					type="text"
					{...register("email")}
					className="w-full h-10 px-3 placeholder-gray-500 focus:outline-none bg-input-form rounded-md border border-gray-700"
				/>
				<small className="text-red-500 mt-2 text-xs">
					{errors.email?.message}
				</small>
			</div>

			<div className="flex flex-col mt-5 text-gray-400 text-sm">
				<label htmlFor="#" className="mb-2">
					Password
				</label>
				<input
					placeholder="Enter your password"
					{...register("password")}
					type="password"
					className="w-full h-10 px-3 placeholder-gray-500 focus:outline-none bg-input-form rounded-md border border-gray-700"
				/>
				<small className="text-red-500 mt-2 text-xs">
					{errors.password?.message}
				</small>
			</div>
			<button
				className="bg-white font-semibold text-sm text-black w-full mt-10 py-2 h-10 rounded-md"
				type="submit"
				disabled={false}
			>
				{isLoading ? "Loading..." : "Login"}
			</button>
		</form>
	)
}

export default LoginForm
