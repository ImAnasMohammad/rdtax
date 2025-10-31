import { Bell, Menu } from "lucide-react";

// Header Component
const DashboardHeader = ({ toggleSidebar }) => {
    return (
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <button
                onClick={toggleSidebar}
                className="p-2 hover:bg-gray-100 rounded-lg"
            >
                <Menu size={24} />
            </button>

            <div className="flex items-center gap-4">
                <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                    <Bell size={24} />
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                        JD
                    </div>
                    <div>
                        <div className="text-sm font-semibold">John Doe</div>
                        <div className="text-xs text-gray-500">Admin</div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default DashboardHeader