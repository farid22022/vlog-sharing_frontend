
type Action = {
  label: string;
  type: "primary" | "secondary" | "third";
  onClick: () => void;
};

interface JackpotCardProps {
  heading: string;
  TicketsSold: number;
  RaisedCount: string;
  StartDate: string;
  EndDate: string;
  actions?: Action[];
  link?: string;
}

const JackpotCard: React.FC<JackpotCardProps> = ({
  heading,
  TicketsSold,
  RaisedCount,
  StartDate,
  EndDate,
  actions = [],
  link,
}) => {
  return (
    <div className="border p-4 rounded-lg shadow-md w-96 bg-[#182959]">
      <h4 className="text-lg font-bold mb-2">{heading}</h4>
      <table className="w-full table-auto">
        <tbody>
          <tr>
            <td className="text-start font-medium">Tickets Sold:</td>
            <td className="text-end">{TicketsSold}</td>
          </tr>
          <tr>
            <td className="text-start font-medium">Raised:</td>
            <td className="text-end">{RaisedCount}</td>
          </tr>
          <tr>
            <td className="text-start font-medium">Start Date:</td>
            <td className="text-end">{StartDate}</td>
          </tr>
          <tr>
            <td className="text-start font-medium">End Date:</td>
            <td className="text-end">{EndDate}</td>
          </tr>
        </tbody>
      </table>

      <div className="flex justify-end gap-2 mt-4">
        {actions.map((action, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded text-sm font-medium ${
              action.type === "primary"
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : action.type === "third"
                ? "bg-red-700 text-white hover:bg-red-800"
                : "bg-gray-400 text-black hover:bg-gray-300"
            }`}
            onClick={action.onClick}
          >
            {action.label}
          </button>
        ))}
      </div>

      {/* Optionally render a link if provided */}
      {link && (
        <div className="mt-4 text-center">
          <a
            href={link}
            className="text-blue-500 hover:text-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details
          </a>
        </div>
      )}
    </div>
  );
};

export default JackpotCard;
