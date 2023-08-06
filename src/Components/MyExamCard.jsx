import React from 'react';
import { useDeleteExamMutation } from '../redux/api/apiSlice';
import { Toaster, toast } from 'react-hot-toast';

const MyExamCard = ({ data }) => {
    const [deleteExam] = useDeleteExamMutation();
    const filter = (id) => {

        const json = {
            data: {
                id: id
            }
        }
        console.log(json)

        deleteExam(json)
        toast.success("Assignment Submitted")

    }

    return (
        <div className="border border-black-500 m-5 p-5">
            <Toaster />
            <p>Course ID : {data?.courseID}</p>
            <p>Description : {data?.description}</p>
            <p className='font-bold text-lg'>Question 1 : {data?.question1}</p>

            <input type="text" name='asnwer here' placeholder="Your Answer" className="input input-bordered" required />

            <p className='font-bold text-lg'>Question 2 : {data?.question2}</p>

            <input type="text" name='asnwer here' placeholder="Your Answer" className="input input-bordered" required />

            <p className='font-bold text-lg'>Question 3 : {data?.question3}</p>

            <input type="text" name='asnwer here' placeholder="Your Answer" className="input input-bordered" required />
            <br />
            <button onClick={() => filter(data?.id)} className='mt-5 btn btn-ghost'>Submit this exam</button>



        </div>
    );
};

export default MyExamCard;