import { FaUser } from "react-icons/fa"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { useRouter } from "next/router"
const Signin = () => {
	const Router = useRouter()
	return (
		<div className="text-gray-200 relative flex items-center min-h-screen">
			<button
				onClick={() => Router.push("/")}
				className="text-gray-400 absolute top-8 left-8 text-3xl"
			>
				<AiOutlineArrowLeft />
			</button>
			<div className="m-auto overflow-hidden rounded-md flex-col text-gray-400 border border-gray-200 border-opacity-20 w-96 flex items-center py-10 px-8 relative">
				<div className="p-3 rounded-md bg-input-form">
					<FaUser />
				</div>
				<h2 className="text-gray-100 font-bold mt-5 text-xl">Join Us</h2>

				<form className={"w-full pt-8 duration-300 ease-in-out"}>
					<div className="flex flex-col mt-5 text-gray-400 text-sm">
						<label htmlFor="#" className="mb-2">
							Full name
						</label>
						<input
							placeholder="Enter your full name"
							type="text"
							className="w-full h-10 px-3 placeholder-gray-500 focus:outline-none bg-input-form rounded-md border border-gray-700"
						/>
					</div>

					<div className="flex flex-col mt-5 text-gray-400 text-sm">
						<label htmlFor="#" className="mb-2">
							Email address
						</label>
						<input
							placeholder="Enter your email"
							autoComplete="false"
							type="email"
							className="w-full h-10 px-3 placeholder-gray-500 focus:outline-none bg-input-form rounded-md border border-gray-700"
						/>
					</div>

					<div className="flex flex-col mt-5 text-gray-400 text-sm">
						<label htmlFor="#" className="mb-2">
							Password
						</label>
						<input
							placeholder="Enter your password"
							type="password"
							className="w-full h-10 px-3 placeholder-gray-500 focus:outline-none bg-input-form rounded-md border border-gray-700"
						/>
					</div>

					<div className="flex flex-col mt-5 text-gray-400 text-sm">
						<label htmlFor="#" className="mb-2">
							Confirm password
						</label>
						<input
							placeholder="Confirm password"
							type="password"
							className="w-full h-10 px-3 placeholder-gray-500 focus:outline-none bg-input-form rounded-md border border-gray-700"
						/>
					</div>
					<button
						className="bg-white font-semibold text-sm text-black w-full mt-10 py-2 h-10 rounded-md"
						type="submit"
					>
						Sign in
					</button>
				</form>
			</div>
		</div>
	)
}

export default Signin
