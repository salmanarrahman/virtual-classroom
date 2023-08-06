import React from 'react';
import { useDeleteAssignmentMutation } from '../redux/api/apiSlice';
import { Toaster, toast } from 'react-hot-toast';

const AssignmentCard = ({ data }) => {

    const [deleteAssignment] = useDeleteAssignmentMutation();
    const filter = (id) => {

        const json = {
            data: {
                id: id
            }
        }
        console.log(json)

        deleteAssignment(json)
        toast.success("Assignment Submitted")

    }


    return (
        <div className="border border-black-500 m-5 p-5">
            <Toaster />
            <p>Assignment Question : {data?.assignmentName}</p>
            <label className="label">
                <span className="label-text">Your Answer</span>
            </label>
            <input type="text" name='assignmentName' placeholder="Your Answer" className="input input-bordered" required />
            <button onClick={() => filter(data?.id)} className='btn btn-ghost'>Submit this assignment</button>




        </div>
    );
};

export default AssignmentCard;