import * as yup from "yup"
import schemas from "../utils/schema"

export const registerSchema = yup.object({
	email: schemas.email,
	password: schemas.password,
	confirm_password: schemas.confirm_password,
})
