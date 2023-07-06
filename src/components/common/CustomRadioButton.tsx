import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio, { RadioProps } from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const BpIcon = styled("span")(({ theme }) => ({
    borderRadius: "50%",
    width: 16,
    height: 16,
    padding: 0,
    boxShadow:
        theme.palette.mode === "dark"
            ? "0 0 0 1px rgb(16 22 26 / 40%)"
            : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
    backgroundImage:
        theme.palette.mode === "dark"
            ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
            : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    ".Mui-focusVisible &": {
        outline: "2px auto #FAA530",
        outlineOffset: 2,
    },
}));

const BpCheckedIcon = styled(BpIcon)({
    backgroundColor: "#FAA530",
    backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
    "&:before": {
        display: "block",
        width: 16,
        height: 16,
        backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
        content: '""',
    },
});

// Inspired by blueprintjs
function BpRadio(props: RadioProps) {
    return <Radio disableRipple color="default" checkedIcon={<BpCheckedIcon />} icon={<BpIcon />} {...props} />;
}

interface Props {
    formik: any;
    name: string;
    list: {
        label: string;
        value: string;
    }[];
}
export default function CustomRadioButton({ formik, name, list }: Props) {
    return (
        <FormControl>
            <span className="font-artin-regular block mb-1 pr-1 text-[#2F2F2F]">لطفا جنسیت خود را مشخص کنید</span>
            <RadioGroup defaultValue="female" aria-labelledby="demo-customized-radios" name={name}>
                {list.map((item, i) => (
                    <FormControlLabel
                        checked={formik.values[name] === item.value}
                        key={i}
                        value={item.value}
                        control={<BpRadio onChange={() => formik.setFieldValue(name, item.value)} />}
                        label={<span className="font-artin-regular">{item.label}</span>}
                    />
                ))}
            </RadioGroup>
            <span className="block font-artin-light mt-[1px] text-[11px] text-red-500 pr-1">
                {formik.touched[name!] && formik.errors[name!] ? formik.errors[name!] : null}
            </span>
        </FormControl>
    );
}
