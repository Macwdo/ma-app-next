import React from 'react';
import { Status } from '@/app/lawsuits/lawsuit-nav';


const StatusComponent = (status: Status) => {
    let statusColor = '';
    let statusText = '';

    switch (status) {
        case Status.Active:
            statusColor = 'bg-blue-400';
            break;
        case Status.Stopped:
            statusColor = 'bg-yellow-400';
            break;
        case Status.Finished:
            statusColor = 'bg-green-400';
            break;
        case Status.Waiting:
            statusColor = 'bg-gray-400';
            break;
        default:
            statusColor = 'bg-red-400';
            break;
    }

    return (
        <div className='flex items-center gap-2'>
            <div className={`rounded-full w-8 h-8 ${statusColor}`}>
            </div>
        </div>
    );
};

export default StatusComponent;
