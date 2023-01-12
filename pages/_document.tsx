import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<title>Yusend</title>
				<link
					href="/static/favicons/favicon.ico"
					rel="icon shortcut"
					type="image/x-icon"
				></link>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
