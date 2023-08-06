import React from 'react';
import { useGetAssignmentQuery } from '../redux/api/apiSlice';
import AssignmentCard from './AssignmentCard';

const MyAssignment = () => {
    let { data, isLoading } = useGetAssignmentQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 1000
    })



    if (isLoading) {
        return <p>Loading..Please Wait</p>
    }

    return (
        <div>

            {
                data.map((data) => (<AssignmentCard data={data} />))
            }

        </div>
    );
};

export default MyAssignment;