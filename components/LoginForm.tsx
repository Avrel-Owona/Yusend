import { useForm } from "react-hook-form"
import { LoginFormType } from "../app/types/auth.type"
import { loginSchema } from "../app/validations/login.validation"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import Link from "next/link"

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [data, setData] = useState<any>({
		email: "",
		password: "",
	})
	const onLogin = ({ email, password }: OnLoginProps) => {
		setData({
			email: email,
			password: password,
		})
		console.log("data", data)
		// console.log({
		// 	email: email,
		// 	pasword: password,
		// })
	}

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
			<span className="flex w-full justify-end">
				<Link
					href={"#"}
					className="text-blue-600 text-sm w-max flex justify-end mt-3 hover:underline"
				>
					Forgot your password ?
				</Link>
			</span>
			<button
				className="bg-white font-semibold text-sm text-black w-full mt-7 py-2 h-10 rounded-md"
				type="submit"
				disabled={false}
			>
				{isLoading ? "Loading..." : "Login"}
			</button>
		</form>
	)
}

export default LoginForm
