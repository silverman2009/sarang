import * as Yup from "yup";
export const validationSchemaSignUp = Yup.object({
    phone: Yup.string().required("فیلد اجباری است"),
    firstName: Yup.string().required("فیلد اجباری است"),
    lastName: Yup.string().required("فیلد اجباری است"),
    sex: Yup.string().required("فیلد اجباری است"),
});
export const validationSchemaSignUpStep2 = Yup.object({
    state: Yup.object({
        _id: Yup.string().required("فیلد اجباری است")
    }),
    city: Yup.object({
        _id: Yup.string().required("فیلد اجباری است")
    }),
    password: Yup.string().required("فیلد اجباری است"),
    repPassword: Yup.string().required("فیلد اجباری است")
        .oneOf([Yup.ref('password'), "null"], 'تکرار رمز عبور با رمز عبور یکسان نیست'),
});



export const validationSchemaGetOtp = Yup.object({
    phone: Yup.string().required("فیلد اجباری است"),
})


export const validationSchemaCheckCode  = Yup.object({
    Code:Yup.string().required("فیلد اجباری است")
})