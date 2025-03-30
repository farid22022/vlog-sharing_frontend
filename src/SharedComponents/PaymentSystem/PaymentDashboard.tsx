

import lotteryImage from "../../../public/cards/luckyDayImage.jpg";
import {  Outlet } from "react-router";
import LotteryCard from "../SelectedLottery/SelectedLottery2";

const PaymentDashboard = () => {
    const handleBuyClick = () => {
        alert("You clicked Buy Now!");
      };
    return (
        <div className="flex h-screen min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-50 p-8 pt-[7%] px-[14%]">
            {/* Dashboard Sidebar */}
            <LotteryCard
                lotteryImage={lotteryImage}
                owner="Lottery Owner Name"
                lotteryDate="2025-02-21"
                lastDate="2025-02-20"
                selectedNumbers={[5, 12, 23, 34, 45, 56]}
                buyDate="2025-02-19"
                onBuyClick={handleBuyClick}
              />

            {/* Dashboard Content */}
            <div className="flex-1 overflow-y-auto px-12">
                <Outlet />
            </div>
        </div>
    );
};

export default PaymentDashboard;
