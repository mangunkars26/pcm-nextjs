// components/InputField.js
export default function InputField({ label, type = "text", value, onChange, required = false }) {
    return (
      <div className="mb-4">
        <label className="block text-gray-700">{label}</label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
    );
  }
  