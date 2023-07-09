export type SignupUser = {

    "phone": string,
    "password": string,
    "firstName": string,
    "lastName": string,
    "sex": string,
    "city": string,
    "state": string

}

export type CheckCode = {
    Phone: string;
    Code: number
}

export type LoginUser = {
    "phone": "",
    "password": ""
}