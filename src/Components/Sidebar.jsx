import { CheckSquare, FileOutput, FileText, Home, LogOut, Settings, Users } from "lucide-react";
import { Link } from "react-router";


// Sidebar Component
const Sidebar = ({ isOpen, currentView }) => {
    const menuItems = [
        { href: '/', icon: Home, label: 'Dashboard' },
        { href: '/clients', icon: Users, label: 'Clients' },
        { href: '/people', icon: Users, label: 'People' },
        { href: '/questionnaires', icon: FileText, label: 'Questionnaires' },
        { href: '/pbc', icon: CheckSquare, label: 'PBC Requests' },
        { href: '/reports', icon: FileOutput, label: 'Reports' },
    ];

    if (!isOpen) return null;

    return (
        <div className="w-64 bg-indigo-900 text-white flex flex-col">
            <div className="p-4 bg-white w-[90%] mt-5 m-auto flex items-center justify-center">
                <img src="logo-bg-removed.png" width={'60%'}/>
            </div>

            <nav className="flex-1 p-4">
                {menuItems.map(item => (
                    <Link
                        to={item.href}
                        key={item.href}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${currentView === item.href
                                ? 'bg-indigo-700 text-white'
                                : 'text-indigo-200 hover:bg-indigo-800'
                            }`}
                    >
                        <item.icon size={20} />
                        <span>{item.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-indigo-800">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-indigo-200 hover:bg-indigo-800 rounded-lg">
                    <Settings size={20} />
                    <span>Settings</span>
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-indigo-200 hover:bg-indigo-800 rounded-lg">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    );
};


export default Sidebar