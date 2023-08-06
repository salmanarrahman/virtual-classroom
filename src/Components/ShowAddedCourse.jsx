import React from 'react';
import { useShowAddedCourseQuery } from '../redux/api/apiSlice';

const ShowAddedCourse = ({ email }) => {
    const { data, isLoading } = useShowAddedCourseQuery(email)
    if (isLoading) {
        return <p>Loading</p>
    }


    const removeDuplicatesByName = (arr) => {
        const uniqueNames = new Set();
        return arr.filter((obj) => {
            if (!uniqueNames.has(obj.courseName)) {
                uniqueNames.add(obj.courseName);
                return true;
            }
            return false;
        });
    };
    const filter = removeDuplicatesByName(data)

    console.log(filter)







    return (
        <div>

            <div className="">
                <p className='font-bold text-lg'>Your enrolled course:</p>


                {
                    filter.map((data) => (<>
                        <div className='border-b-2 border-black-500 '>
                            <p>{data.courseName}</p>
                        </div>
                    </>))
                }



            </div>

        </div>
    );
};

export default ShowAddedCourse;