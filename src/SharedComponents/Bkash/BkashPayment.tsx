import { useState } from "react";
import { Link } from "react-router";

const BkashPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = () => {
    alert("Payment Successful!");
    <Link to="/"></Link>
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-500">bKash Payment</h1>
        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your bKash phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold">
            Pay with bKash
          </button>
        </form>
      </div>
    </div>
  );
};

export default BkashPayment;
