import { ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

// Client Onboarding Component (PART 1)
const ClientOnboarding = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        clientName: '',
        industry: '',
        entityType: '',
        fein: '',
        hrPlatform: '',
    });

    const steps = ['Client Info', 'HR Integration', 'Team Setup'];

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Add New Client</h1>

            {/* Progress Steps */}
            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex items-center justify-between">
                    {steps.map((label, idx) => (
                        <div key={idx} className="flex items-center">
                            <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step > idx + 1 ? 'bg-green-500' : step === idx + 1 ? 'bg-indigo-600' : 'bg-gray-300'
                                } text-white font-semibold`}>
                                {step > idx + 1 ? '✓' : idx + 1}
                            </div>
                            <span className="ml-2 text-sm font-medium">{label}</span>
                            {idx < steps.length - 1 && (
                                <ChevronRight className="mx-4 text-gray-400" size={20} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-lg shadow p-6">
                {step === 1 && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4">Client Information</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                placeholder="Enter client name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                                <option>Select Industry</option>
                                <option>Software</option>
                                <option>Finance</option>
                                <option>Healthcare</option>
                                <option>Manufacturing</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Entity Type</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                                <option>Select Entity Type</option>
                                <option>C-CORP</option>
                                <option>S-CORP</option>
                                <option>LLC</option>
                                <option>Partnership</option>
                                <option>Sole Proprietor</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">FEIN</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="XX-XXXXXXX"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fiscal Year</label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Tax Deadline</label>
                                <input
                                    type="date"
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4">HR Platform Integration</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">HR Platform</label>
                            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                                <option>Select Platform</option>
                                <option>Gusto</option>
                                <option>ADP</option>
                                <option>Paychex</option>
                                <option>BambooHR</option>
                                <option>Justworks</option>
                                <option>None/Manual Upload</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Client Platform ID</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                placeholder="Enter platform client ID"
                            />
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm text-blue-800">Sync Status: <span className="font-semibold">Not Connected</span></p>
                            <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm">
                                Connect API
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold mb-4">Team Setup</h3>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Invite Team Members</label>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                                    placeholder="email@example.com"
                                />
                                <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500">
                                    <option>Admin</option>
                                    <option>HR Manager</option>
                                    <option>Accountant</option>
                                    <option>CFO</option>
                                    <option>Reviewer</option>
                                </select>
                                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                                    <Plus size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">Invited Members:</p>
                            <p className="text-sm text-gray-500">No members invited yet</p>
                        </div>
                    </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-6 pt-6 border-t border-gray-200">
                    <button
                        onClick={() => setStep(Math.max(1, step - 1))}
                        className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                        disabled={step === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => step < 3 ? setStep(step + 1) : alert('Client onboarding complete!')}
                        className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                    >
                        {step === 3 ? 'Complete' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};


export default ClientOnboarding;