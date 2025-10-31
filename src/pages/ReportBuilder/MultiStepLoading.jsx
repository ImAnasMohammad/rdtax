import { Check, Loader, Loader2, LucideLoader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const MultiStepLoading = ({ handleLoading }) => {
    const steps = ["Data Ingestion", "Project Qualification", "Audit Trail Generation", "PDF Report Generation", "Completed"];
    const [stage, setStage] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => {
            setStage(prev => {
                if (prev < steps?.length) {
                    return prev + 1;
                } else {
                    clearInterval(interval);
                    handleLoading();
                    return prev;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [steps?.length]);

    return (
        <div className='absolute inset-0 flex justify-center items-center' style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}>
            <div className='bg-white px-40 py-20 rounded flex flex-col gap-6'>
                {
                    steps?.map((item, key) => <div key={key} className='flex items-center gap-2'>
                        {
                            stage > key ? <Check className='text-green-400' /> : <LucideLoader2  className='animate-spin text-blue-500'/>
                        }

                        <span className='text-xl'>{item}</span>
                    </div>
                    )
                }
            </div>
        </div>
    )
}

export default MultiStepLoading