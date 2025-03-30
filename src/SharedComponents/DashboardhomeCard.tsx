interface DashboardhomeCardProps {
    title: string;
    count: number | string;
}

const DashboardhomeCard = ({ title, count } : DashboardhomeCardProps) => {
    return (
        <div className="card card-compact bg-[#F1F5F9] w-60 shadow-xl rounded-2xl">
            <div className="card-body text-black">
                <h2 className="card-title ">{title}</h2>
                <p>{count}</p>
            </div>
        </div>
    );
};

export default DashboardhomeCard;
