// app/admin/dashboard/components/StatisticsCard.js
export default function StatisticsCard({ title, count }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold">{title}</h2>
            <p className="text-2xl">{count}</p>
        </div>
    );
}
