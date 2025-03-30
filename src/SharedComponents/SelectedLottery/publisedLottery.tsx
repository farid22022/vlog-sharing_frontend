
import { motion } from "framer-motion";
import { formatHumanReadableDate } from "../../utility/utility";

interface PublishedLotteryProps {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  ticketPrice: number;
  totalTickets?: number;
  winners: number;
  totalPrize: number;
}

const PublishedLottery = ({
  name,
  description,
  startDate,
  endDate,
  ticketPrice,
  winners,
  totalPrize,
}: PublishedLotteryProps) => {
  return (
    <motion.div
      className="relative max-w-full sm:max-w-sm rounded-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 p-8 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.25,
        delay: 0.15,
      }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-100/20 to-purple-100/20" />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-purple-600 bg-clip-text text-transparent">
            {name}
          </h2>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>

        {/* Prize Pool */}
        <div className="mb-6 p-4 bg-white rounded-xl shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Prize Pool</p>
              <p className="text-xl font-semibold text-gray-800">
                TK. {totalPrize.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Date Section */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <p className="text-xs font-medium text-gray-500">Starts</p>
            <p className="text-sm font-semibold text-gray-800">
              {startDate.toLocaleDateString()}
            </p>
          </div>
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <p className="text-xs font-medium text-gray-500">Ends</p>
            <p className="text-sm font-semibold text-gray-800">
              {endDate.toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Ticket Info */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-2 bg-yellow-100 px-3 py-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-orange-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
              />
            </svg>
            <span className="text-sm font-medium text-orange-600">
              TK. {ticketPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
              />
            </svg>
            <span className="text-sm font-medium text-gray-600">
              {winners} Winners
            </span>
          </div>

          <button className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-400 text-white px-5 py-2.5 rounded-full hover:gap-3 transition-all duration-300">
            <span>Buy Now</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        {/* Ribbon */}
        <div className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {formatHumanReadableDate(endDate)}
        </div>
      </div>
    </motion.div>
  );
};

export default PublishedLottery;