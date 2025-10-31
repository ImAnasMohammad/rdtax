import { Bell } from "lucide-react"


const Header = ({activeTab,setActiveTab}) => {
    return (
        <header className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-pink-500 rounded-lg"></div>
                        <span className="font-bold text-xl">Kipsi</span>
                    </div>
                    <nav className="flex gap-6">
                        <button
                            onClick={() => setActiveTab('Dashboard')}
                            className={`text-sm font-medium pb-1 ${activeTab === 'Dashboard' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
                                }`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab('Clients')}
                            className={`text-sm font-medium pb-1 ${activeTab === 'Clients' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
                                }`}
                        >
                            Clients
                        </button>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button className="relative p-2">
                        <Bell className="w-5 h-5 text-gray-600" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full"></div>
                        <span className="text-sm font-medium">Ryan Mango</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header