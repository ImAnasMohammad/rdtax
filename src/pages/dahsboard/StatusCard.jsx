import { ChevronDown } from "lucide-react";

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

export default StatusCard;