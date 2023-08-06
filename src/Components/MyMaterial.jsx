import React from 'react';
import { useGetAllMaterialQuery } from '../redux/api/apiSlice';
import MaterialCard from './MaterialCard';

const MyMaterial = () => {
    const { data, isLoading } = useGetAllMaterialQuery(undefined, {
        refetchOnMountOrArgChange: true,
        // pollingInterval: 1000
    })
    //  console.log(data);
    if (isLoading) {
        return <p>Loading..Please Wait</p>
    }
    return (
        <div>

            {
                data.map((data) => (<MaterialCard course={data}></MaterialCard>))
            }

        </div>
    );
};

export default MyMaterial;