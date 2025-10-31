import { Download, Plus } from "lucide-react";
import MultiStepLoading from "./MultiStepLoading";
import { useState } from "react";

// Report Builder Component (PART 7)
const ReportBuilder = () => {
    const [isLoading, setIsLoading] = useState(false);
    const handleLoading = () => {
        setIsLoading(!isLoading);
    }
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "./file.pdf";
        link.download = "myfile.pdf"; // optional — sets the downloaded file name
        link.click();
    };
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold text-gray-900">Report Builder</h1>
                <div className="flex gap-2">
                    <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50" onClick={handleDownload}>
                        <Download size={20} />
                        Download PDF
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        <Plus size={20} />
                        New Report
                    </button>
                </div>
            </div>

            {/* Report Form */}
            <div className="bg-white rounded-lg shadow p-6 space-y-6 relative">
                {isLoading && <MultiStepLoading handleLoading={handleLoading} />}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Executive Summary</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Auto-filled from engagement"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Report Title</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="2021 R&D Tax Credit Executive Summary"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Reporting Period</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="2021"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Report</label>
                            <input
                                type="date"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Key Findings</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Federal QRE</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="Auto-calculated"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">State QRE</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="Auto-calculated"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Federal Credit</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="$0.00"
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">State Credit</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
                                placeholder="$0.00"
                                readOnly
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold mb-4">Project Narratives</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-sm text-blue-800">
                            Project narratives will be auto-populated from questionnaire responses.
                        </p>
                        <button className="mt-2 text-sm text-blue-600 hover:text-blue-700 font-medium">
                            Review Projects →
                        </button>
                    </div>
                </div>

                <div className="border-t pt-6">
                    <div className="flex gap-4">
                        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                            Save Draft
                        </button>
                        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700" onClick={handleLoading}>
                            Generate Report
                        </button>
                    </div>
                </div>
            </div>

            {/* Recent Reports */}
            <div className="bg-white rounded-lg shadow">
                <div className="p-6 border-b border-gray-200">
                    <h3 className="text-lg font-semibold">Recent Reports</h3>
                </div>
                <div className="p-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <div>
                                <p className="font-medium">TechCorp 2024 R&D Credit Report</p>
                                <p className="text-sm text-gray-500">Generated on Oct 25, 2025</p>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700">
                                <Download size={16} />
                                Download
                            </button>
                        </div>
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                            <div>
                                <p className="font-medium">MediSoft 2024 R&D Credit Report</p>
                                <p className="text-sm text-gray-500">Generated on Oct 20, 2025</p>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 text-indigo-600 hover:text-indigo-700">
                                <Download size={16} />
                                Download
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportBuilder;