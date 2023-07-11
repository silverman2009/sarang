export type Driver = {
    Firstname: string;
    LastName: string;
    Phone: string;
    CityNumber: string;
    Sex: string;
    State: string;
    City: string;
    AuthId: string;
    Car: {
        _id: string;
        IsRotatory: boolean;
        HasHelperDriver: boolean;
        Plaque: {
            part1: number;
            part2: string;
            part3: string;
            part4: string;
        };
        Route: string;
        Type: string;
    };
    CarRoute: {
        _id: string;
        Name: "چرخشی" | string;
        Cost: number;
    };
};

export type TypePayment =
    | "اسکن QR کد"
    | "اسکن QR کد و پرداخت از طریق درگاه پرداخت"
    | "وارد کردن کد راننده"
    | "وارد کردن کد راننده و پرداخت از طریق درگاه پرداخت"
    | "وارد کردن کد مشتری"
    | "اسکن کارت مشتری به وسیله راننده";

export type Fare = {
    car?: string | undefined;
    numberOfPassenger?: number;
    paymentType?: string;
    amount?: number;
};
