import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Modal from "../components/Modal"
import { useState } from "react"

export default function Home() {
	const [modal, setModal] = useState<Boolean>(false)
	return (
		<div className="w-full h-screen px-28 flex flex-col justify-between">
			{/* <Modal /> */}
			<Navbar />
			<main className="flex">
				<div>
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
					<p className="w-3/6 mt-5 text-gray-500">
						Build, test, and send transactional emails at scale. Resend provides
						the best developer experience helping you reach users instead of
						spam folders.
					</p>
					<p className="text-gray-500 mt-8 text-sm">
						Press
						<span className="bg-gray-400 text-transparent text-black text-sm px-2 py-1 rounded-md mx-2 font-bold">
							S
						</span>
						to login
					</p>
				</div>
				{/* <div>dsfsdfsdfs</div> */}
			</main>
			<Footer />
		</div>
	)
}
