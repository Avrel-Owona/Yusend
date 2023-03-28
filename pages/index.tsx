import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Overlay from "../components/Overlay"
import Modal from "../components/Modal"
import { useEffect, useState } from "react"
import LoginForm from "../components/LoginForm"
import RegisterModal from "../components/RegisterModal"
import { AiOutlineArrowRight } from "react-icons/ai"
import Link from "next/link"

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
		<div className="w-full h-screen px-7 sm:px-20 xl:px-28 flex flex-col justify-between">
			{modal ? (
				<Modal
					setModal={setModal}
					title={"Login"}
					description={"Log in now and manage your work on your own."}
				>
					<LoginForm />
				</Modal>
			) : "" || registerModal ? (
				<RegisterModal setModal={setRegisterModal} />
			) : (
				""
			)}

			<Navbar setModal={setModal} />
			<main className="flex">
				<Overlay position={"top-0"} />
				<Overlay position={"bottom-0"} />
				<div className="text-slide-up">
					<span className="text-xs bg-orange text-orange-500 font-medium py-1 px-2 rounded-md">
						Currently in private beta
					</span>
					<h3 className="bg-gradient bg-clip-text text-transparent text-5xl sm:text-7xl xl:text-6xl font-bold mt-3">
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
						<p className="w-full sm:w-4/6 xl:w-3/6 mt-5 text-color-home-p text-base">
							Build, test, and send transactional emails at scale. Resend
							provides the best developer experience helping you reach users
							instead of spam folders.
						</p>
						<button
							onClick={() => setRegisterModal(true)}
							className="text-color-home-p items-center hidden xl:flex mt-8 text-sm cursor-pointer hover:text-gray-200 ease-out duration-300"
						>
							Press
							<span className="bg-gray-400 hover:bg-gray-200 text-transparent text-black text-sm px-2 py-1 rounded-md mx-2 font-bold">
								A
							</span>
							to sign up
						</button>
						<Link href={"/signin"}>
							<button className="px-5 box-shadow-get mt-8 xl:hidden text-base py-2 rounded-md cursor-pointer bg-white text-black">
								Get started
							</button>
						</Link>
					</div>
				</div>
				{/* <div>dsfsdfsdfs</div> */}
			</main>
			<Footer />
		</div>
	)
}
