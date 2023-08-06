import React from 'react';
import { useGetExamQuery } from '../redux/api/apiSlice';
import MyExamCard from './MyExamCard';

const MyExam = () => {
    let { data, isLoading } = useGetExamQuery(undefined, {
        refetchOnMountOrArgChange: true,
        //  pollingInterval: 1000
    })
    console.log(data)
    if (isLoading) {
        return <p>Loading..Please Wait</p>
    }


    return (
        <div>

            {

                data.map((data) => (<MyExamCard data={data} />))

            }

        </div>
    );
};

export default MyExam;