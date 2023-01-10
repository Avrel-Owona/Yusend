import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Progress } from "../components/Progress"

export default function App({ Component, pageProps }: AppProps) {
	Progress()
	return <Component {...pageProps} />
}
