import  { useState } from 'react'
import Header from './Header';
import { ChevronDown, Filter, Plus, Search } from 'lucide-react';
import StatusCard from './StatusCard';
import DeadlineWidget from './DeadlineWidget';
import Table from './Table';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');

    const engagementData = {
        total: 5,
        items: [
            { label: 'Complete', value: 1 },
            { label: 'In progress', value: 4 }
        ]
    };

    const pbcData = {
        total: 14,
        items: [
            { label: 'Approved', value: 4 },
            { label: 'Ready for review', value: 4 },
            { label: 'In progress', value: 4 },
            { label: 'Sent', value: 2 }
        ]
    };

    const questionnaireData = {
        total: 9,
        items: [
            { label: 'Complete', value: 3 },
            { label: 'In progress', value: 3 },
            { label: 'Sent', value: 3 }
        ]
    };

    const engagements = [
        { name: 'Chain Tax credit 2022', client: 'Chain', status: 'Complete', deadline: '10/12/22', staff: ['A'], staffCount: null },
        { name: 'Chain PBC 2022', client: 'Chain', status: 'In progress', deadline: '10/12/22', staff: ['A', 'D', 'C', 'P'], staffCount: 2 },
        { name: 'Penta Tax credit 2022', client: 'Penta', status: 'In progress', deadline: '10/01/23', staff: ['C'], staffCount: null },
        { name: 'Glossy Tax credit 2022', client: 'Glossy', status: 'In progress', deadline: '10/12/22', staff: ['A', 'D', 'C', 'P'], staffCount: 2 },
        { name: 'Vision Tax credit 2022', client: 'Vision', status: 'In progress', deadline: '10/12/22', staff: ['A'], staffCount: null }
    ];

    return (
            <>
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-600">All engagements</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <StatusCard title="Engagement Status" total={engagementData.total} items={engagementData.items} />
                    <StatusCard title="PBC Request Status" total={pbcData.total} items={pbcData.items} />
                    <StatusCard title="Questionnaire Status" total={questionnaireData.total} items={questionnaireData.items} />
                </div>

                {/* Deadline Widgets */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <DeadlineWidget title="Engagement Deadlines" status="Overdue" count={0} type="overdue" />
                    <DeadlineWidget title="PBC Request Deadlines" status="Due this week" count={6} type="due" />
                    <DeadlineWidget title="Questionnaire comments" status="Open" count={5} type="open" />
                </div>

                {/* Current Engagements Section */}
                <div className="bg-white rounded-lg p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold">Current engagements</h2>
                        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
                            <Plus className="w-4 h-4" />
                            Add engagement
                        </button>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                            <Filter className="w-4 h-4" />
                            Filter
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50">
                            Group by client
                        </button>
                    </div>

                    <Table engagements={engagements} />
                </div>
            </>
    );
}

export default Dashboard