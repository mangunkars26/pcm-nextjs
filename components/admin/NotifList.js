// app/admin/dashboard/components/NotificationList.js
export default function NotificationList({ notifications }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="font-semibold mb-2">Notifikasi</h2>
            <ul>
                {notifications.length === 0 ? (
                    <li>Tidak ada notifikasi baru.</li>
                ) : (
                    notifications.map((notification, index) => (
                        <li key={index} className="border-b py-2">{notification.message}</li>
                    ))
                )}
            </ul>
        </div>
    );
}
