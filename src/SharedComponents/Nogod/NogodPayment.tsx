import { useState } from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const NogodPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Show confirmation dialog using SweetAlert2
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to pay ${amount} using Nogod from the number ${phoneNumber}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed",
    });

    if (result.isConfirmed) {
      // If confirmed, show success alert
      Swal.fire({
        title: "Payment Successful!",
        text: "Your payment has been processed successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Redirect or take action after successful payment (e.g., home page)
        // For example, using history.push() if you are using react-router
        // history.push('/');
      });
    } else {
      // If canceled, show cancel message
      Swal.fire({
        title: "Payment Cancelled",
        text: "Your payment was not processed.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <motion.div
      className="min-h-screen flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-green-500">Nogod Payment</h1>
        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your Nogod phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold">
            Pay with Nogod
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default NogodPayment;
