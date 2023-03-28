import { AiOutlineArrowLeft } from "react-icons/ai"
import { useForm } from "react-hook-form"
import { RegisterFormType } from "../app/types/auth.type"
import { yupResolver } from "@hookform/resolvers/yup"
import { useRouter } from "next/router"
import { useState } from "react"
import { registerSchema } from "../app/validations/register.validation"
import Link from "next/link"
import { FaUser } from "react-icons/fa"

const Signin = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegisterFormType>({
		resolver: yupResolver(registerSchema),
	})
	type OnRegisterProps = {
		email: string
		password: string
		confirm_password: string
	}
	const onRegister = ({
		email,
		password,
		confirm_password,
	}: OnRegisterProps) => {
		console.log({
			email: email,
			pasword: password,
			cconfirm_password: confirm_password,
		})
	}
	const Router = useRouter()
	return (
		<div className="text-gray-200 flex-col justify-center relative flex items-center min-h-screen">
			<button
				onClick={() => Router.push("/")}
				className="text-gray-400 absolute flex top-8 left-8 text-sm items-center gap-x-2 rounded-md cursor-pointer border-gray-600 py-1.5 bg-slate border px-5"
			>
				<AiOutlineArrowLeft /> Home
			</button>
			<Link href={"/"} className="text-gray-50 font-medium text-2xl sm:text-xl">
				Yusend
			</Link>

			<div className="mx-auto sm:mt-10 overflow-hidden rounded-md flex-col text-gray-400 sm:border sm:border-gray-200 sm:border-opacity-20 w-full sm:w-96 flex items-center py-10 px-8 relative">
				<div className="p-3 rounded-md bg-input-form">
					<FaUser />
				</div>
				<form
					onSubmit={handleSubmit(onRegister)}
					className={"w-full pt-8 duration-300 ease-in-out"}
				>
					<h3 className="text-gray-100 text-base sm:text-xl font-medium text-center">
						Sign in to your acccount
					</h3>

					<div className="flex flex-col mt-5 text-gray-400 text-sm">
						<label htmlFor="#" className="mb-2">
							Email address
						</label>
						<input
							placeholder="Enter your email"
							autoComplete="false"
							type="email"
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
							type="password"
							{...register("password")}
							className="w-full h-10 px-3 placeholder-gray-500 focus:outline-none bg-input-form rounded-md border border-gray-700"
						/>
						<small className="text-red-500 mt-2 text-xs">
							{errors.password?.message}
						</small>
					</div>

					<div className="flex flex-col mt-5 text-gray-400 text-sm">
						<label htmlFor="#" className="mb-2">
							Confirm password
						</label>
						<input
							placeholder="Confirm password"
							type="password"
							{...register("confirm_password")}
							className="w-full h-10 px-3 placeholder-gray-500 focus:outline-none bg-input-form rounded-md border border-gray-700"
						/>
						<small className="text-red-500 mt-2 text-xs">
							{errors.confirm_password?.message}
						</small>
					</div>

					<button
						className="bg-white font-semibold text-sm text-black w-full mt-8 py-2 h-10 rounded-md"
						type="submit"
					>
						{isLoading ? "Loading..." : "Sign in"}
					</button>
				</form>
			</div>
			{/* <span className="flex w-full justify-end">
				<Link
					href={"#"}
					className="text-xs w-max text-gray-400 flex justify-end mt-3 hover:underline"
				>
					By signing in, you agree to our{" "}
					<span className="text-blue-600">Terms of Service</span> and{" "}
					<span className="text-blue-600">Privacy Policy</span>.
				</Link>
			</span> */}
		</div>
	)
}

export default Signin
