export type User = {
    Balance: number;
    FirstName: string;
    LastName: string;
    Phone: string;
    Sex: string;
};



export type Transaction = {
    "TransactionType": string,
    "_id": string,
    "Amount": number,
    "Description": string,
    "createdAt": string
}