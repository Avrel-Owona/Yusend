const Navbar = () => {
	return (
		<header className="flex justify-between py-5 items-center">
			<span className="text-gray-50 font-medium text-xl">Yusend</span>
			<nav>
				<button className="px-5 mr-4 text-sm py-2 text-gray-400 border-gray-400 bg-slate border rounded-md">
					Sign in
				</button>
				<button className="px-5 text-sm py-2 rounded-md bg-white text-black">
					Request access
				</button>
			</nav>
		</header>
	)
}

export default Navbar