import React from 'react';
import { useCreateGradeMutation } from '../redux/api/apiSlice';
import { toast } from 'react-hot-toast';

const GradeModifier = () => {
    const [createGrade, { isLoading, isError }] = useCreateGradeMutation()
    const handleform = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const grade = form.grade.value;
        const allData = {
            data: {
                email: email,
                grade: grade
            }
        }

        createGrade(allData)

        form.reset()
        if (!isError) {
            toast.success('Student graded Successfully', {
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
    }
    return (
        <div>

            <div className="flex justify-center items-center">
                <div>


                    <form onSubmit={handleform}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Student Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Student Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Student Grade</span>
                            </label>
                            <input type="text" name='grade' placeholder="Student Grade" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add</button>
                        </div>
                    </form>

                </div>


            </div>

        </div>
    );
};

export default GradeModifier;