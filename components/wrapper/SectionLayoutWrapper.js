// src/components/Layout/SectionWrapper.jsx
export default function SectionWrapper({  children }) {
  return (
    <div className="my-8">
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 bg-white p-6 shadow rounded-lg mr-0 lg:mr-4">
          {children[0]} {/* Main content */}
        </div>
        <div className="w-full lg:w-1/4 mt-4 lg:mt-0">
          {children[1]} {/* Sidebar */}
        </div>
      </div>
    </div>
  );
}
