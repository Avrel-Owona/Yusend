import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
const Footer = () => {
	return (
		<footer className="py-5 text-slide-up">
			<div className="text-gray-400 text-xs font-light flex justify-between items-end">
				<div>
					<div className="flex text-2xl gap-x-4 mb-6">
						<a
							href="#"
							className="hover:text-gray-200 duration-100 ease-out cursor-pointer"
						>
							<FaGithub />
						</a>
						<a
							href="#"
							className="hover:text-gray-200 duration-100 ease-out cursor-pointer"
						>
							<FaTwitter />
						</a>
						<a
							href="#"
							className="hover:text-gray-200 duration-100 ease-out cursor-pointer"
						>
							<FaLinkedin />
						</a>
					</div>
					<span className="">
						© {new Date().getFullYear()} Avrel Sosa <br /> Yaounde, Cameroon
						#237
					</span>
				</div>
				<div>
					<a href="#" className="mr-4 hover:text-gray-200 duration-300 ease-in">
						Privacy policy
					</a>
					<a href="#" className="hover:text-gray-200 duration-300 ease-in">
						Terms of use
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
