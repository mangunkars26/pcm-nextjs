// src/components/Sidebar/SidebarSection.jsx
export default function SidebarSection({ title, children }) {
    return (
      <div className="bg-white shadow-lg p-4 rounded-lg mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-3">{title}</h2>
        <div className="space-y-3">{children}</div>
      </div>
    );
  }
  