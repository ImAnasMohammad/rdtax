import React, { useState } from 'react';
import { Bell, Search, ChevronDown, Plus, Filter, MoreVertical } from 'lucide-react';

// Status Card Component with Donut Chart
const StatusCard = ({ title, total, items }) => {
  const colors = ['#6366F1', '#10B981', '#F59E0B', '#EC4899'];
  const totalValue = items.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-sm font-semibold mb-4">{title}</h3>
      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32">
          <svg className="w-32 h-32 transform -rotate-90">
            {items.map((item, idx) => {
              const prevSum = items.slice(0, idx).reduce((s, i) => s + i.value, 0);
              const offset = (prevSum / totalValue) * 283;
              const length = (item.value / totalValue) * 283;
              return (
                <circle
                  key={idx}
                  cx="64"
                  cy="64"
                  r="45"
                  fill="none"
                  stroke={colors[idx]}
                  strokeWidth="18"
                  strokeDasharray={`${length} 283`}
                  strokeDashoffset={-offset}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-3xl font-bold">{total}</span>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: colors[idx] }}></div>
                <span className="text-gray-700">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold">{item.value}</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Deadline Widget Component
const DeadlineWidget = ({ title, status, count, type }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <h4 className="text-xs font-semibold mb-2">{title}</h4>
      <div className="flex items-center gap-2 text-sm">
        <span className={`${type === 'overdue' ? 'text-red-500' : 'text-yellow-500'}`}>
          📅 {status}
        </span>
        <ChevronDown className="w-4 h-4 text-gray-400 ml-auto" />
      </div>
      <p className="text-xs text-gray-600 mt-1">
        <span className="font-semibold">{count}</span> {count === 1 ? 'engagement' : 'engagements'}
      </p>
    </div>
  );
};

// Table Component
const EngagementTable = ({ engagements }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                Engagement ⇅
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                Client ⇅
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                Status ⇅
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                Deadline ⇅
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700">
                Staff list ⇅
              </th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {engagements.map((eng, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm text-gray-900">{eng.name}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{eng.client}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                    eng.status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-indigo-100 text-indigo-700'
                  }`}>
                    {eng.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{eng.deadline}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    {eng.staff.map((s, i) => (
                      <div key={i} className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-semibold">
                        {s}
                      </div>
                    ))}
                    {eng.staffCount && (
                      <span className="text-xs text-gray-500 ml-1">+{eng.staffCount}</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main Dashboard Component
const KipsiDashboard = () => {
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
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
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
                className={`text-sm font-medium pb-1 ${
                  activeTab === 'Dashboard' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
                }`}
              >
                Dashboard
              </button>
              <button
                onClick={() => setActiveTab('Clients')}
                className={`text-sm font-medium pb-1 ${
                  activeTab === 'Clients' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'
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

      {/* Main Content */}
      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-600">All engagements</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Status Cards */}
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

          <EngagementTable engagements={engagements} />
        </div>
      </main>
    </div>
  );
};

export default KipsiDashboard;