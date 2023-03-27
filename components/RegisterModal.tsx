import { FaUser, FaGithub, FaGoogle } from "react-icons/fa"
import { RxCross1 } from "react-icons/rx"
import { useRouter } from "next/router"
import Image from "next/image"

type RegisterModalProps = {
	setModal: any
}

const RegisterModal = ({ setModal }: RegisterModalProps) => {
	const closeModal = () => {
		setModal(false)
	}
	const Router = useRouter()
	return (
		<div className="h-screen w-full absolute bg-black bg-opacity-50 ease-in duration-300 top-0 right-0 flex justify-center items-center b">
			{/* <div ></div> */}
			<div className="bg-form-modal modal overflow-hidden rounded-md flex-col text-gray-400 border border-gray-200 border-opacity-20 w-96 flex items-center py-10 px-8 relative">
				<button
					onClick={closeModal}
					className="absolute cursor-pointer text-gray-400 top-5 right-5  px-2 duration-200 ease-in-out"
				>
					<RxCross1 />
				</button>

				<div className="p-3 rounded-md bg-input-form">
					<FaUser />
				</div>
				<h2 className="text-gray-100 font-bold mt-5 text-xl">Sign in</h2>
				<p className="text-gray-400 text-center text-sm mt-3">
					Join our growing waitlist today and our team will reach out to you as
					soon as possible.
				</p>
				<>
					<button
						onClick={() => Router.push("/signin")}
						className="bg-gray-200 justify-center items-center flex text-sm font-semibold text-black w-full mt-7 py-2 rounded-md"
					>
						{/* <span className="bg-gray-700 text-gray-200 p-1 text-xs rounded-full">
						Y
					</span> */}
						<Image
							width={17}
							height={17}
							src="/favicon.ico"
							className="rounded-md mr-1"
							alt={""}
						/>
						Yusend
					</button>
					<button className="bg-gray-200 text-sm font-semibold text-black w-full flex items-center justify-center gap-x-2 mt-7 py-2 rounded-md">
						<FaGithub size={18} /> Github
					</button>
					<button className="bg-gray-200 text-sm font-semibold text-black w-full flex items-center justify-center gap-x-2 mt-7 py-2 rounded-md">
						<FaGoogle size={16} /> Google
					</button>
				</>
			</div>
		</div>
	)
}

export default RegisterModal
