import LotteryData from "./LotteryData";

export interface PrizedTicketData {
    prize_money: number;
    lottery_id: string;
    lottery: LotteryData;
    ticket: string;
    id: string;
}