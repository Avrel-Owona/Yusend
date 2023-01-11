import { useState } from "react"
import { FaUser, FaGithub, FaGoogle } from "react-icons/fa"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { RxCross1 } from "react-icons/rx"

type RegisterModalProps = {
	setModal: any
}

const RegisterModal = ({ setModal }: RegisterModalProps) => {
	const [step, setStep] = useState<boolean>(false)
	const closeModal = () => {
		setStep(false)
		setModal(false)
	}
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
				{step ? (
					<button
						onClick={() => setStep(false)}
						className="absolute cursor-pointer text-xl text-gray-400 top-5 left-5  px-2 duration-200 ease-in-out"
					>
						<AiOutlineArrowLeft />
					</button>
				) : (
					""
				)}
				<div className="p-3 rounded-md bg-input-form">
					<FaUser />
				</div>
				<h2 className="text-gray-100 font-bold mt-5 text-xl">Signin</h2>
				<p className="text-gray-400 text-center text-sm mt-3">
					Join our growing waitlist today and our team will reach out to you as
					soon as possible.
				</p>
				<>
					<button
						onClick={() => setStep(true)}
						className="bg-gray-200 text-sm font-semibold text-black w-full mt-7 py-2 rounded-md"
					>
						{/* <span className="bg-gray-700 text-gray-200 p-1 text-xs rounded-full">
						Y
					</span> */}
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
