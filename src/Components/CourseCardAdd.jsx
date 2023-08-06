import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useAddedCourseMutation } from '../redux/api/apiSlice';

const CourseCardAdd = ({ course, email }) => {

    const [addedCourse, { isSuccess, isLoading, isError }] = useAddedCourseMutation()

    const handleAddCourse = (name) => {

        console.log(name);
        const json = {
            data: {
                courseName: name,
                email: email
            }
        }
        addedCourse(json)
        toast.success('Course Added Successfully', {
            duration: 2000, // Display duration in milliseconds (default: 5000)
            position: 'top-center', // Toast position (default: 'top-right')
        });




    }
    if (isError) {
        toast.error('Something Happened', {
            duration: 2000, // Display duration in milliseconds (default: 5000)
            position: 'top-center', // Toast position (default: 'top-right')
        });
    }



    if (isLoading) {
        return <p>Loading Please wait</p>
    }

    return (
        <div className=" border-b-2 border-black-500 ">

            <p>Code : {course?.code}</p>
            <p>Name : {course?.name}</p>
            <p>Description: {course?.description}</p>
            <p><button className='btn btn-neutra my-5' onClick={() => handleAddCourse(course?.name)}>Enroll this course</button></p>


            <Toaster />
        </div>
    );
};

export default CourseCardAdd;