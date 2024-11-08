// src/components/Featured/FeaturedSection.jsx
export default function FeaturedSection({ children }) {
    return (
      <section className="bg-blue-50 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Featured</h2>
        <div>{children}</div>
      </section>
    );
  }
  