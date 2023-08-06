import React from 'react';
import { useCreateExamMutation } from '../redux/api/apiSlice';
import { Toaster, toast } from 'react-hot-toast';

const Exam = () => {

    const [createExam, { isLoading, isError, error }] = useCreateExamMutation()

    const handleform = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.courseName.value;
        const description = form.description.value;
        const e1 = form.e1.value;
        const e2 = form.e2.value;
        const e3 = form.e3.value;


        const jsonData = {
            data: {
                courseID: name,
                description: description,
                question1: e1,
                question2: e2,
                question3: e3

            }
        }
        createExam(jsonData)
        if (isLoading) {
            toast.loading('Processing Please Wait', {
                duration: 2000, // Display duration in milliseconds (default: 5000)
                position: 'top-center', // Toast position (default: 'top-right')
            });
        }
        if (!isError) {
            toast.success('Course Created Successfully', {
                duration: 2000, // Display duration in milliseconds (default: 5000)
                position: 'top-center', // Toast position (default: 'top-right')
            });

        }
        form.reset()
    }

    if (isError) {
        toast.error('Error', {
            duration: 2000, // Display duration in milliseconds (default: 5000)
            position: 'top-center', // Toast position (default: 'top-right')
        });
    }

    return (
        <div>

            <div className="flex justify-center items-center">
                <div>
                    <Toaster />

                    <form onSubmit={handleform}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course ID</span>
                            </label>
                            <input type="number" name='courseName' placeholder="Course ID (Number Only)" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Exam Description</span>
                            </label>
                            <input type="text" name='description' placeholder="Description" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Exam Question 1</span>
                            </label>
                            <input type="text" name='e1' placeholder="Question" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Exam Question 2</span>
                            </label>
                            <input type="text" name='e2' placeholder="Question" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Exam Question 3</span>
                            </label>
                            <input type="text" name='e3' placeholder="Question" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Create</button>
                        </div>
                    </form>

                </div>


            </div>

        </div>
    );
};

export default Exam;
