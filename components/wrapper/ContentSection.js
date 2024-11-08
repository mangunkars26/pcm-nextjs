// src/components/Content/ContentSection.jsx
export default function ContentSection({ title, children }) {
    return (
      <section className="bg-white shadow p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">{title}</h2>
        <div className="space-y-4">{children}</div>
      </section>
    );
  }
  