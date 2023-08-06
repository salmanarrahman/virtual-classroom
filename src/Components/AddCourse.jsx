import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useAllCourseQuery } from '../redux/api/apiSlice';
import CourseCardAdd from './CourseCardAdd';
import ShowAddedCourse from './ShowAddedCourse';

const AddCourse = () => {
    const [keyword, setKeyword] = useState("")

    const { data } = useAllCourseQuery(undefined, {
        refetchOnMountOrArgChange: true,
        //pollingInterval: 1000
    })
    const { user, isLoading, isError } = useSelector((state) => state.user);
    console.log(user.email)



    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        setKeyword(search)
        console.log(keyword);
    }
    let filteredData;

    if (keyword) {
        filteredData = data?.filter(({ name }) => name === keyword);
    } else {
        filteredData = data;
    }



    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                <Toaster />

                <div>


                    <form onSubmit={handleSearch}>
                        <input type="text" name='search' placeholder="Search course" className="input input-bordered w-full max-w-xs mb-5" />
                        <button type="submit" className='m-5 btn-neutra'>Search</button>
                    </form>
                    <p className='font-bold text-lg'>All Courses : </p >




                    {
                        filteredData?.map((data) => (
                            <CourseCardAdd email={user.email} course={data} />
                        ))
                    }


                </div>

                <div>

                    <ShowAddedCourse email={user.email}></ShowAddedCourse>


                </div>
            </div>

        </div>
    );
};

export default AddCourse;