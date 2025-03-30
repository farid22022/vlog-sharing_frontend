
import { motion } from "framer-motion";
import { Link } from "react-router";
interface LotteryCardProps {
  lotteryImage: string;
  owner: string;
  lotteryDate: string;
  lastDate: string;
  selectedNumbers: number[];
  buyDate: string;
  onBuyClick: () => void;
}

const LotteryCard = ({
  lotteryImage,
  owner,
  lotteryDate,
  lastDate,
  selectedNumbers,
  buyDate,
  onBuyClick,
}:LotteryCardProps) => {
  return (
    <motion.div
      className="max-w-full sm:max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        stiffness: 100,
        type: "spring",
        bounce: 0.25,
        delay: 0.15,
      }}
    >
      {/* Lottery Image */}
      <img
        src={lotteryImage}
        alt="Lottery"
        className="w-full h-48 object-cover rounded-t-lg"
      />

      {/* Lottery Details */}
      <div className="p-4">
        {/* Lottery Owner */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">{owner}</h2>

        {/* Lottery Date and Last Date */}
        <p className="text-gray-600 text-sm sm:text-base mb-2">
          <span className="font-semibold">Lottery Date:</span> {lotteryDate}
        </p>
        <p className="text-gray-600 text-sm sm:text-base mb-4">
          <span className="font-semibold">Last Date to Buy:</span> {lastDate}
        </p>

        {/* Selected Numbers */}
        <div className="mb-4">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
            Selected Numbers:
          </h3>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {selectedNumbers.map((number, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center"
              >
                {number}
              </div>
            ))}
          </div>
        </div>

        {/* Lottery Buy Date */}
        <p className="text-gray-600 text-sm sm:text-base mb-4">
          <span className="font-semibold">Buy Date:</span> {buyDate}
        </p>

        {/* Buy Button */}
        <Link to="/payment/system">
          <button
            onClick={onBuyClick}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Buy Now
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default LotteryCard;
