import { AiOutlineArrowRight } from "react-icons/ai"
type ModalProps = {
	setModal: any
}
const Navbar = ({ setModal }: ModalProps) => {
	return (
		<header className="flex justify-between py-5 items-center header-slide-down">
			<span className="text-gray-50 font-medium text-xl">Yusend</span>
			<nav className="flex">
				<button
					onClick={() => setModal(true)}
					className="px-5 flex items-center mr-4 text-sm py-2 rounded-md cursor-pointer text-gray-400 border-gray-400 bg-slate border"
				>
					Login <AiOutlineArrowRight className="ml-2" />
				</button>
				<button className="px-5 text-sm py-2 rounded-md cursor-pointer bg-white text-black">
					Request access
				</button>
			</nav>
		</header>
	)
}

export default Navbar
