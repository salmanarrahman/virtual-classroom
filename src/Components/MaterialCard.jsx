import React from 'react';

const MaterialCard = ({ course }) => {
    console.log(course);
    return (
        <div className="border border-black-500 m-5 p-5">

            <p>Course Code : {course?.courseID}</p>
            <p>Material : {course?.materials}</p>



        </div>
    );
};

export default MaterialCard;