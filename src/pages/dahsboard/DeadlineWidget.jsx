import { ChevronDown } from "lucide-react";

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


export default DeadlineWidget;