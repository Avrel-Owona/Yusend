import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Modal from "../components/Modal"
import { useEffect, useState } from "react"
import LoginForm from "../components/LoginForm"
import RegisterModal from "../components/RegisterModal"

export default function Home() {
	useEffect(() => {
		document.addEventListener("keydown", detectKeyDown)
	}, [])
	const detectKeyDown = (e: any) => {
		if (e.key === "a") setRegisterModal(true)
		else if (e.key === "Escape") setRegisterModal(false)
	}
	const [modal, setModal] = useState<Boolean>(false)
	const [registerModal, setRegisterModal] = useState<boolean>(false)
	return (
		<div className="w-full h-screen px-28 flex flex-col justify-between">
			{modal ? (
				<Modal
					setModal={setModal}
					title={"Login"}
					description={
						"Join our growing waitlist today and our team will reach out to you as soon as possible."
					}
				>
					<LoginForm />
				</Modal>
			) : (
				""
			)}
			{registerModal ? <RegisterModal setModal={setRegisterModal} /> : ""}
			<Navbar setModal={setModal} />
			<main className="flex">
				<div className="text-slide-up">
					<span className="text-xs bg-orange text-orange-400 py-1 px-2 rounded-full">
						Currently in private beta
					</span>
					<h3 className="bg-gradient bg-clip-text text-transparent text-6xl font-bold mt-3">
						Send <br /> Receive <br /> Developers
						{/* API for developers */}
						{/* <span className="bg-dev text-emerald-300">developers</span> */}
					</h3>
					{/* <h3 className="bg-gradient bg-clip-text text-transparent text-6xl font-bold mt-3">
						The new email <br />
						API for developers
						<span className="bg-dev text-emerald-300">developers</span>
					</h3> */}
					<div>
						<p className="w-3/6 mt-5 text-gray-500">
							Build, test, and send transactional emails at scale. Resend
							provides the best developer experience helping you reach users
							instead of spam folders.
						</p>
						<button
							onClick={() => setRegisterModal(true)}
							className="text-gray-500 mt-8 text-sm cursor-pointer hover:text-gray-200 ease-out duration-300"
						>
							Press
							<span className="bg-gray-400 hover:bg-gray-200 text-transparent text-black text-sm px-2 py-1 rounded-md mx-2 font-bold">
								A
							</span>
							to sign in
						</button>
					</div>
				</div>
				{/* <div>dsfsdfsdfs</div> */}
			</main>
			<Footer />
		</div>
	)
}
