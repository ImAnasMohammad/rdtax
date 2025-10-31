import { Filter, MessageSquare, Plus, Search } from "lucide-react";

// Questionnaires Component (PART 4)
const Questionnaires = () => {
    const questionnaires = [
        { template: 'General Questions', project: 'TechCorp R&D', assignedTo: 'John Smith', status: 'In Progress', dueDate: '2025-11-05', comments: 3 },
        { template: '409a', project: 'MediSoft Valuation', assignedTo: 'Sarah Johnson', status: 'Completed', dueDate: '2025-10-28', comments: 1 },
        { template: 'Custom', project: 'FinanceAI Study', assignedTo: 'Mike Brown', status: 'Sent', dueDate: '2025-11-10', comments: 0 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Questionnaires</h1>
                <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                    <Plus size={20} />
                    New Questionnaire
                </button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-2xl font-bold mt-1">24</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Completed</p>
                    <p className="text-2xl font-bold mt-1 text-green-600">15</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">In Progress</p>
                    <p className="text-2xl font-bold mt-1 text-blue-600">6</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Overdue</p>
                    <p className="text-2xl font-bold mt-1 text-red-600">3</p>
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
                                placeholder="Search questionnaires..."
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
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Template</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Due Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Comments</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {questionnaires.map((q, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">{q.template}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{q.project}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{q.assignedTo}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${q.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                            q.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                                                'bg-yellow-100 text-yellow-800'
                                        }`}>
                                        {q.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{q.dueDate}</td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <MessageSquare size={16} className="text-gray-400" />
                                        <span className="text-sm text-gray-600">{q.comments}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <button className="text-indigo-600 hover:text-indigo-700 mr-3">Edit</button>
                                    <button className="text-red-600 hover:text-red-700">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Questionnaires;