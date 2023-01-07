import { FaUser } from "react-icons/fa"

const Modal = () => {
	return (
		<div className="h-screen w-full absolute top-0 right-0 flex justify-center items-center b">
			<div className="bg-form-modal rounded-md flex-col text-gray-400 border border-gray-700 w-96 flex items-center py-10 px-8 relative">
				<div className="p-3 rounded-md bg-input-form">
					<FaUser />
				</div>
				<h2 className="text-gray-100 font-bold mt-3 text-xl">Join us</h2>
				<p className="text-gray-400 text-center text-sm mt-3">
					Join our growing waitlist today and our team will reach out to you as
					soon as possible.
				</p>
				<form className="w-full pt-8">
					<div className="flex flex-col mt-5 text-gray-400 text-sm">
						<label htmlFor="#" className="mb-3">
							Full name
						</label>
						<input
							placeholder="Enter your full name"
							type="text"
							className="w-full h-10 px-3 focus:outline-none bg-input-form rounded-md border border-gray-700"
						/>
					</div>

					<div className="flex flex-col mt-5 text-gray-400 text-sm">
						<label htmlFor="#" className="mb-3">
							Email address
						</label>
						<input
							placeholder="Enter your email"
							type="email"
							className="w-full h-10 px-3 focus:outline-none bg-input-form rounded-md border border-gray-700"
						/>
					</div>
					<button className="bg-white text-sm text-black w-full mt-10 py-2 rounded-md">
						Sign in
					</button>
				</form>
			</div>
		</div>
	)
}

export default Modal
