import Link from "next/link"
import { AiOutlineArrowRight } from "react-icons/ai"
type ModalProps = {
	setModal: any
}
const Navbar = ({ setModal }: ModalProps) => {
	return (
		<header className="flex justify-between py-5 items-center header-slide-down">
			<Link href={"/"} className="text-gray-50 font-medium text-xl">
				Yusend
			</Link>
			<nav className="flex">
				<button
					onClick={() => setModal(true)}
					className="px-5 flex items-center xl:mr-4 text-base xl:text-sm py-2 rounded-md cursor-pointer text-gray-400 border-gray-600 bg-slate border"
				>
					Login <AiOutlineArrowRight className="ml-2" />
				</button>
				<Link href={"/signin"}>
					<button className="px-5 box-shadow-get hidden xl:flex text-sm py-2 rounded-md cursor-pointer bg-white text-black">
						Get started
					</button>
				</Link>
			</nav>
		</header>
	)
}

export default Navbar
