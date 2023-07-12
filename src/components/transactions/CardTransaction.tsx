import { Transaction } from "@/types/User";
import React from "react";
import { PiCoins } from "react-icons/pi";
import { GiPayMoney } from "react-icons/gi";
import { Calender_icon } from "../global/icons";
interface Props {
    transaction: Transaction;
}
const CardTransaction = ({ transaction }: Props) => {
    return (
        <div className="layout bg-white shadow rounded-lg p-2">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                <div className="flex items-center gap-2 text-gray-700">
                    <PiCoins size={24} />
                    <p className="font-artin-bold text-lg">مبلغ تراکنش :</p>
                    <p className="font-artin-regular text-orange_light">{transaction.Amount}</p>
                </div>
                <p className="font-estedad-bold text-[12px] flex items-center gap-2 text-gray-600">
                    {new Date(transaction.createdAt).toLocaleDateString("fa-IR")}
                    <Calender_icon />
                </p>
            </div>
            <div className="flex items-center gap-2 pt-3 text-gray-700">
                <GiPayMoney size={24} />
                <p className="font-artin-bold text-lg">نوع شارژ :</p>
                <p className="font-artin-regular text-orange_light">{transaction.TransactionType}</p>
            </div>
        </div>
    );
};

export default CardTransaction;
