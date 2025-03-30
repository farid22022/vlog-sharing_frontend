export default interface LotteryData {
    id?: string,
    name: string,
    total_prize: number,
    description: string,
    start_date: Date,
    end_date: Date,
    ticket_price: number,
    published: boolean,
    total_tickets?: number,
    featured?: boolean,
    winners: number,
    is_result_published?: boolean
}