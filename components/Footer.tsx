import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"
const Footer = () => {
	return (
		<footer className="py-5">
			<div className="text-gray-400 text-xs font-light flex justify-between items-end">
				<div>
					<div className="flex text-2xl gap-x-4 mb-6">
						<FaGithub />
						<FaTwitter />
						<FaLinkedin />
					</div>
					<span className="pt-10">
						© {new Date().getFullYear()} Avrel Sosa <br /> Yaounde, Cameroon
						#237
					</span>
				</div>
				<div>
					<a href="#" className="mr-4">
						Privacy policy
					</a>
					<a href="#">Terms of use</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
