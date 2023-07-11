export type Trip = {
    CreatedAt: string;
    NumberOfPassengers: number;
    PaymentType: string;

    Route: {
        Cost: number;
        Name: string;
        __v: number;
        _id: string;
    };

    UserTransaction: {
        Amount: number;
        Description: string;
        From: string;
        MadeBy: string;
        TransactionType: string;
        createdAt: string;
        __v: number;
        _id: string;
    };
    car: {
        Plaque: { part1: number; part2: string; part3: number; part4: number };
        part1: number;
        part2: string;
        part3: string;
        part4: string;
        Route: string;
        Type: string;
        __v: string;
    };
    _id: string;
};
