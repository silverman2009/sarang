import { toEnglishNumber, toFarsiNumber } from "./toFarsiNumber";

export const convertObjectEnglishNumber = (data: any) => {
    let newObj: any = {};
    for (let [k, v] of Object.entries(data)) {
        // @ts-ignore
        newObj[k] = toEnglishNumber(v);
    }

    return newObj;
};

export const convertObjectFarsiNumber = (data: any) => {
    let newObj: any = {};
    for (let [k, v] of Object.entries(data)) {
        // @ts-ignore
        newObj[k] = toFarsiNumber(v);
    }

    return newObj;
};
