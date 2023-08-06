/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import React, { useState } from 'react';
import { useAllCourseQuery, useCreateCourseMutation } from '../redux/api/apiSlice';
import { Toaster, toast } from 'react-hot-toast';
import CourseCard from './CourseCard';

const CreateCourse = () => {
    const [createCourse, { isError }] = useCreateCourseMutation()
    const [keyword, setKeyword] = useState("")
    const { data } = useAllCourseQuery(undefined, {
        refetchOnMountOrArgChange: true,
        pollingInterval: 1000
    })

    const handleSearch = event => {
        event.preventDefault();
        const form = event.target;
        const search = form.search.value;
        setKeyword(search)
        console.log(keyword);
    }


    const handleform = event => {
        event.preventDefault();
        const form = event.target;
        const id = form.code.value;
        const course = form.course.value;
        const description = form.description.value;

        const courses = {
            data: {
                code: id,
                name: course,
                description: description
            }
        }
        createCourse(courses)
        form.reset()
        toast.success('Course Created Successfully', {
            duration: 2000, // Display duration in milliseconds (default: 5000)
            position: 'top-center', // Toast position (default: 'top-right')
        });
    }
    if (isError) {
        toast.error('Error', {
            duration: 2000, // Display duration in milliseconds (default: 5000)
            position: 'top-center', // Toast position (default: 'top-right')
        });
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


                    <form onSubmit={handleform}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course id</span>
                            </label>
                            <input type="number" name='code' placeholder="Course Code (Number Only)" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course name</span>
                            </label>
                            <input type="text" name='course' placeholder="Course Name" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Course Description" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Create</button>
                        </div>
                    </form>

                </div>

                <div>

                    <form onSubmit={handleSearch}>
                        <input type="text" name='search' placeholder="Search course" className="input input-bordered w-full max-w-xs mb-5" />
                        <button type="submit" className='m-5 btn btn-ghost'>Search</button>
                    </form>




                    {
                        filteredData?.map((data) => (
                            <CourseCard course={data} />
                        ))
                    }

                </div>
            </div>

        </div>
    );
};

export default CreateCourse;

