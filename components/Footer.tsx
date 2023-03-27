import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
const Footer = () => {
	return (
		<footer className="py-5 text-slide-up">
			<div className="text-gray-400 text-xs font-light flex justify-between items-end">
				<div className="flex sm:flex-col items-end sm:items-start justify-between w-full sm:w-3/6">
					<div className="flex text-lg sm:text-2xl gap-x-4 sm:mb-6">
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
					<span className="text-end sm:text-start">
						Yaoundé, Cameroon #237 <br />
						{/* © {new Date().getFullYear()} */}
						Coding by{" "}
						<a
							href="#"
							className="hover:text-gray-200 duration-100 ease-out cursor-pointer"
						>
							Avrel Owona
						</a>
						,{" "}
						<a
							href="#"
							className="hover:text-gray-200 duration-100 ease-out cursor-pointer"
						>
							Becker Kadji
						</a>
					</span>
				</div>
				<div className="hidden sm:block">
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
