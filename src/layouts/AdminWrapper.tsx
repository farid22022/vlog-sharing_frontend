import React from "react";
import AdminRequired from "../components/AdminRequired";
import { Link } from "react-router-dom";
// import { Link } from "react-router";
interface props {
    children: React.ReactNode
}
export default function AdminWrapper({ children }: props) {
    return (
        <AdminRequired>
            <div className="relative pl-48 min-h-screen">
                <div className="w-48 fixed left-0 top-0 bottom-0 bg-base-200 shadow-lg flex pt-36 p-4 flex-col gap-4">
                    <Link to="#" className="btn btn-ghost btn-block text-left">🏠 Dashboard</Link>
                    <Link to="/v2/create-lottery" className="btn btn-ghost btn-block text-left">🎟️ Create Lottery</Link>
                    <Link to="/v2/view-lotteries" className="btn btn-ghost btn-block text-left">📜 View Lotteries</Link>
                    <Link to="/v2/transactions" className="btn btn-ghost btn-block text-left">💰 Transactions</Link>
                </div>
                {children}
            </div>
        </AdminRequired>
    );
}