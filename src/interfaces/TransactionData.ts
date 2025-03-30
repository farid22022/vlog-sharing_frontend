import LotteryData from "./LotteryData";

export interface User {
    id: number;
    name: string | null;
    email: string | null;
    phone: string;
    is_active: boolean;
    date_joined: string; // ISO date string
    prize_money: number;
}


export interface Transaction {
    id: string;
    user_id: number;
    amount: number;
    status: "pending" | "success" | "failed"; // Strict status type
    transaction_type: "payment" | "withdraw" | "deposit"; // Add other types if needed
    payment_method: "bkash" | "nagad" | "paypal" | "card"; // Extend with actual methods
    lottery_id: string; // UUID
    nid: string;
    ticket: string;
    user?: User;
    lottery: LotteryData;
    phone?: string
    is_winning_ticket?: boolean
}

export type TransactionList = Transaction[];
