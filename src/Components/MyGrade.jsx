import React from 'react';
import { useSelector } from 'react-redux';
import { useGetGradeQuery } from '../redux/api/apiSlice';

const MyGrade = () => {
    const { user } = useSelector(state => state.user)
    const { data, isLoading } = useGetGradeQuery(user.email)
    if (isLoading) {
        return <p>Loading</p>
    }

    const json = data.message[0]



    return (
        <div className=" border-b-2 border-black-500 ">

            {

                json.grade ?
                    <div>
                        <p className='text-center font-bold text-lg'>Congrats You Seceured</p>
                        <p className="text-center font-bold text-2xl">{json.grade}</p>
                    </div> :
                    <p className='text-center font-bold text-2xl'>You are not graded yet.Please Have Patience</p>

            }



        </div>
    );
};

export default MyGrade;