import { Filter, Plus, Search, Upload } from "lucide-react";

// People Management Component (PART 3)
const PeopleManagement = () => {
    const people = [
        { firstName: 'John', lastName: 'Smith', role: 'Tech Manager', email: 'john@example.com', department: 'R&D', projects: 3 },
        { firstName: 'Sarah', lastName: 'Johnson', role: 'Researcher', email: 'sarah@example.com', department: 'Engineering', projects: 2 },
        { firstName: 'Mike', lastName: 'Brown', role: 'Admin', email: 'mike@example.com', department: 'Operations', projects: 5 },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">People Management</h1>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Upload size={20} />
                        Bulk Import
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        <Plus size={20} />
                        Add Contact
                    </button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Total People</p>
                    <p className="text-2xl font-bold mt-1">48</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Admins</p>
                    <p className="text-2xl font-bold mt-1">5</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Tech Managers</p>
                    <p className="text-2xl font-bold mt-1">12</p>
                </div>
                <div className="bg-white rounded-lg shadow p-4">
                    <p className="text-sm text-gray-600">Researchers</p>
                    <p className="text-2xl font-bold mt-1">31</p>
                </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white rounded-lg shadow p-4">
                <div className="flex gap-4">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search people..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                        <Filter size={20} />
                        Filter
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Role</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Projects</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {people.map((person, idx) => (
                            <tr key={idx} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                                    {person.firstName} {person.lastName}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">{person.role}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{person.email}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{person.department}</td>
                                <td className="px-6 py-4 text-sm text-gray-600">{person.projects}</td>
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

export default PeopleManagement;