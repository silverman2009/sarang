import * as Yup from "yup";

export const validationSchemaPayWitCode = Yup.object({
    code: Yup.string().required("فیلد اجباری است"),
});
