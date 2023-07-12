export type User = {
    AccountNumber: string;
    Balance: number;
    Car: string;
    City: string;
    CityNumber: string;
    FatherName: string;
    FirstName: string;
    LastName: string;
    Phone: string;
    Sex: string;
    Shaba: string;
    State: string;
};

export type Transaction = {
    TransactionType: string;
    _id: string;
    Amount: number;
    Description: string;
    createdAt: string;
};

export type EditUser = {
    updatedField: {
        FirstName: string;
        LastName: string;
        Sex: string;
    };
};
