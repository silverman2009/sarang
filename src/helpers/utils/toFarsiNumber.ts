export function toFarsiNumber(n: string | number) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
}

export function toEnglishNumber(n: string | number) {
    // @ts-ignore
    return n
        .toString()
        .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
        .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
}
