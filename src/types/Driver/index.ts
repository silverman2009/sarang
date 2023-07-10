export type Driver =
    {
        "Firstname": string,
        "LastName": string,
        "Phone": string,
        "CityNumber": string,
        "Sex": string,
        "State": string,
        "City": string,
        "AuthId": string,
        "Car": {
            "_id": string,
            "IsRotatory": boolean,
            "HasHelperDriver": boolean,
            "Plaque": {
                "part1": number,
                "part2": string,
                "part3": string,
                "part4": string
            },
            "Route": string,
            "Type": string
        },
        "CarRoute": {
            "_id": string,
            "Name": "چرخشی" | string,
            "Cost": number
        }
    }
