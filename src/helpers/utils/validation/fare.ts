import * as Yup from "yup";

export const variantSchemaFare = Yup.object({
    amount: Yup.string().required("کرایه مد نظر را وارد کنید"),
});
