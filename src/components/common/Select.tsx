import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SelectMui, { SelectChangeEvent } from "@mui/material/Select";
import { IoIosArrowDown } from "react-icons/io";
interface PropsSelect {
    placeholder?: string;
    label?: string;
    error?: string;
    className?: string;
    list?: string[];
    name?: string;
    formik?: any;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 10;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            zIndex: 9999,
        },
    },
};

export default function Select({ label, className, list, name, formik }: PropsSelect) {
    const handleChange = (event: SelectChangeEvent) => {
        const {
            target: { value },
        } = event;
        // formik.setFieldValue(name, value);
    };

    return (
        <div className={`${className}`}>
            <FormControl className="!w-full">
                <label className='font-artin-regular block mb-1 pr-1 text-[#2F2F2F]'>{label}</label>
                <SelectMui
                    sx={{
                        border: "0px",
                    }}
                    IconComponent={IoIosArrowDown}
                    // value={formik.values[name!]}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                        if (selected?.length === 0) {
                            return <p className="font-estedad-medium text-[11px]">انتخاب کنید</p>;
                        }

                        return selected;
                    }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                >
                    {list?.map((name) => (
                        <MenuItem key={name} value={name}>
                            <span className="font-estedad-bold px-3 !text-[12px]">{name}</span>
                        </MenuItem>
                    ))}
                </SelectMui>
                <span className="font-es-regular text-[10px] pr-1 inline-block text-red-600 py-1">
                    {/* {formik.touched[name!] && formik.errors[name!] ? formik.errors[name!] : null} */}
                </span>
            </FormControl>
        </div>
    );
}
