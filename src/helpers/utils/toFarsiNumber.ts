export function toFarsiNumber(n: string | number) {
    if (n) {
        const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        return n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
    }
}

export function toEnglishNumber(n: string | number) {
    if (n) {
        return (
            n
                .toString()
                // @ts-ignore
                .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
                // @ts-ignore
                .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
        );
    }
}
