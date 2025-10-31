import { Download, Filter, Plus, Search } from "lucide-react";

// PBC Management Component (PART 5)
const PBCManagement = () => {
    const pbcRequests = [
        { title: 'Payroll Evidence Nov 2022', template: 'R&D Expense Request', assignee: 'John Smith', project: 'TechCorp R&D', status: 'In Progress', dueDate: '2025-11-05', files: 3, comments: 2 },
        { title: 'Supplies Evidence', template: 'Supplies Evidence', assignee: 'Sarah Johnson', project: 'MediSoft', status: 'Approved', dueDate: '2025-10-28', files: 5, comments: 1 },
        { title: 'Contractor Info', template: 'Contractors Info', assignee: 'Mike Brown', project: 'FinanceAI', status: 'Submitted', dueDate: '2025-11-10', files: 2, comments: 0 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">PBC Requests</h1>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Download size={20} />
                        Export
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        <Plus size={20} />
                        New Request
                    </button>
                </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-2xl font-bold mt-1">32</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Draft</p>
                    <p className="text-2xl font-bold mt-1 text-gray-600">5</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">In Progress</p>
                    <p className="text-2xl font-bold mt-1 text-blue-600">12</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Submitted</p>
                    <p className="text-2xl font-bold mt-1 text-yellow-600">8</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Approved</p>
                    <p className="text-2xl font-bold mt-1 text-green-600">7</p>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="p-4 border-b border-gray-200">
                    <div className="flex gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search PBC requests..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            <Filter size={20} />
                            Filter
                        </button>
                    </div>
                </div>
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assignee</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Files</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {pbcRequests.map((req, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{req.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{req.template}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{req.assignee}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{req.project}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${req.status === 'Approved' ? 'bg-green-100 text-green-800' :
                                            req.status === 'Submitted' ? 'bg-yellow-100 text-yellow-800' :
                                                req.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                    'bg-gray-100 text-gray-800'
                                        }`}>
                                        {req.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{req.dueDate}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{req.files} files</td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-indigo-600 hover:text-indigo-700 mr-3">View</button>
                                    <button className="text-blue-600 hover:text-blue-700">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default PBCManagement;