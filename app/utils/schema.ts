import * as yup from "yup"
const schema = {
	email: yup.string().email().required("You must provide an email"),
	password: yup
		.string()
		.required("You must provide your password")
		.matches(
			/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
			"Should have at least 8 characters, with one capital letter and one number."
		),
}
export default schema
