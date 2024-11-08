import * as React from "react";
import Link from "next/link";

export const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonRef = React.useRef(null);
  const dropdownRef = React.useRef(null);

  const handleMouseOver = () => {
    setIsOpen(true);
  };

  const handleMouseOut = (event) => {
    // Pastikan dropdown tertutup hanya jika mouse benar-benar meninggalkan button dan dropdown
    if (
      !buttonRef.current.contains(event.relatedTarget) &&
      !dropdownRef.current.contains(event.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onMouseOver={handleMouseOver}
        className="text-gray-800 dark:text-gray-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        {title}
      </button>
      {isOpen && (
        <div
          ref={dropdownRef}
          onMouseOver={handleMouseOver} // Jaga tetap terbuka saat mouse berada di dropdown
          onMouseOut={handleMouseOut}   // Tutup hanya ketika mouse keluar dari dropdown dan button
          className="absolute left-0 top-full mt-2 z-10 bg-white dark:bg-gray-800 shadow-md rounded-md w-48"
        >
          <ul className="p-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.href} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
