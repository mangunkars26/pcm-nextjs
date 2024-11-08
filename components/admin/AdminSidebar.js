import { Calendar, ChevronDown, Home,Menu, Inbox, Settings, SquarePen, ListChecks } from "lucide-react";
import { useState } from "react";

// Define sidebar items
const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Posts",
    url: "/admin/posts",
    icon: Inbox,
    subItems: [
      { title: "All Posts",
        url: "/admin/posts",
        icon: ListChecks,
    },
      {
        title: "New Post",
        url: "/admin/posts/new",
        icon: SquarePen,
    },
    ],
  },
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
  {
    title: "Schedules",
    url: "/admin/shce",
    icon: Calendar,
  },
];

export function AdminSidebar({isOpen, toggleSidebar}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <>
        <button
            className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-slate-800 text-white rounded-md"
            onClick={toggleSidebar}
            >
                <Menu size={24} />
            </button>

            <aside 
                className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg p-4 transition-transform transform ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 z-40`}
                >
                
                <div className="text-sm font-semibold text-gray-700 mb-2">
                    <nav>
                        {items.map((item) => (
                            <div key={item.title} className="mb-2">
                                {item.subItems ? (
                                    <div>
                                        <button
                                        onClick={() => handleDropdownToggle(item.title)}
                                        className="flex items-center justify-between w-full p-3 rounded-lg text-gray-800 hover:bg-blue-100 transition-colors"
                                        >
                                            <div className="flex items-center gap-2">
                                                <item.icon className="text-blue-600" />
                                                <span>{item.title}</span>
                                            </div>
                                            <ChevronDown
                                                size={18}
                                                className={`transition-transform ${openDropdown === item.title ? "rotate-180" : ""}`}
                                                />
                                        </button>
                                        {openDropdown === item.title && (
                                            <div className="pl-8 mt-1 space-y-1">
                                                {item.subItems.map((subItem) => (
                                                    <a
                                                        key={subItem.title}
                                                        href={subItem.url}
                                                        className="block p-2 rounded text-gray-700 hover:bg-blue-50 transition-colors"
                                                        >
                                                            {subItem.title}
                                                    </a>
                                                ))}

                                                </div>
                                        )}
                                        </div>
                                ) : (
                                    <a
                                        href={item.url}
                                        className="flex items-center gap-2 p-3 rounded-lg text-gray-800 hover:bg-blue-100 transition-colors"
                                    >
                                        <item.icon className="text-blue-600" />
                                        <span>{item.title}</span>
                                    </a>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            </aside>
        {/**backgrournd overlay for mobile */}
        {isOpen && (
            <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden z-30"
            onClick={toggleSidebar}
            ></div>
        )}
    </>
  );
}