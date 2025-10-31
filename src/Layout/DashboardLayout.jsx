
import Sidebar from '../Components/Sidebar';
import DashboardHeader from '../Components/DashBoardHeader';
import { useState } from 'react';

const DashboardLayout = ({children,currentView}) => {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar
                isOpen={sidebarOpen}
                currentView={currentView}
            />

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <DashboardHeader
                    toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
                />

                <main className="flex-1 overflow-y-auto p-6 bg-gray-100">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout