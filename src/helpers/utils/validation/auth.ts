import * as Yup from "yup"
export const validationSchemaSignUp = Yup.object({
    phone: Yup.string().required("فیلد اجباری است"),
    firstName: Yup.string().required("فیلد اجباری است"),
    lastName: Yup.string().required("فیلد اجباری است"),
    sex: Yup.string().required("فیلد اجباری است"),
})