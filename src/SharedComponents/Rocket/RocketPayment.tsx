import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router"; 
import { motion } from "framer-motion"; 

const RocketPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handlePayment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    const result = await Swal.fire({
      title: "Are you sure?",
      text: `You are about to pay ${amount} using Rocket from the number ${phoneNumber}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Proceed",
    });

    if (result.isConfirmed) {
      Swal.fire({
        title: "Payment Successful!",
        text: "Your payment has been processed successfully.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/"); 
      });
    } else {
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
      className="flex justify-center items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-yellow-500">Rocket Payment</h1>
        <form onSubmit={handlePayment} className="space-y-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label className="block text-sm font-medium">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your Rocket phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label className="block text-sm font-medium">Amount</label>
            <input
              type="text"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </motion.div>
          <motion.button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Pay with Rocket
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default RocketPayment;
