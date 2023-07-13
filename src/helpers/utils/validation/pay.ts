import * as Yup from "yup";

export const validationSchemaPayWitCode = Yup.object({
    code: Yup.string().required("فیلد اجباری است"),
});
export const validationSchemaPayWithPhone = Yup.object({
    code: Yup.string()
        .max(11, "شماره تلفن همراه نمی تواند بیش از 11 عدد باشد")
        .min(11, "شماره تلفن همراه نمی تواند کمتر از 11 عدد باشد")
        .required("فیلد اجباری است"),
});
