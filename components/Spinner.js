// components/Spinner.js
export default function Spinner({ size = "8", color = "blue-500" }) {
    return (
      <div className={`flex items-center justify-center`}>
        <div
          className={`w-${size} h-${size} border-4 border-${color} border-t-transparent rounded-full animate-spin`}
          role="status"
          aria-label="Loading..."
        ></div>
      </div>
    );
  }
  