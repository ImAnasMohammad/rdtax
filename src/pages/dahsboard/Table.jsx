import { MoreVertical } from "lucide-react";

const Table = ({ engagements }) => {
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
                                    <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${eng.status === 'Complete' ? 'bg-green-100 text-green-700' : 'bg-indigo-100 text-indigo-700'
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


export default Table;