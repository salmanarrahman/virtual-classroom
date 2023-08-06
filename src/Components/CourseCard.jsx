/* eslint-disable react/prop-types */
import React from 'react';
import { useDeleteCourseMutation } from '../redux/api/apiSlice';
import { Toaster, toast } from 'react-hot-toast';

const CourseCard = ({ course }) => {
    const [deleteCourse] = useDeleteCourseMutation()
    const handleDelete = (id) => {

        console.log(id);
        deleteCourse(id)
        toast.success('Course Deleted Successfully', {
            duration: 2000, // Display duration in milliseconds (default: 5000)
            position: 'top-center', // Toast position (default: 'top-right')
        });

    }
    return (
        <div className=" border-b-2 border-black-500 ">

            <p>Code : {course?.code}</p>
            <p>Name : {course?.name}</p>
            <p>Description: {course?.description}</p>
            <p><button className='btn btn-ghost bg-600' onClick={() => handleDelete(course?.id)}>Delete</button></p>


            <Toaster />
        </div>




    );
};

export default CourseCard;