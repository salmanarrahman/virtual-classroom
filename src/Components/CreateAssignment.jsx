import React from 'react';
import { useCreateAssignmentMutation } from '../redux/api/apiSlice';
import { Toaster, toast } from 'react-hot-toast';

const CreateAssignment = () => {
    const [createAssignment, { isLoading, isError }] = useCreateAssignmentMutation()
    const handleform = event => {
        event.preventDefault();
        const form = event.target;
        const assignmentName = form.assignmentName.value;

        const allData = {
            data: {
                assignmentName: assignmentName
            }
        }
        createAssignment(allData);
        form.reset()
        if (!isError) {
            toast.success('Course Created Successfully', {
                duration: 2000, // Display duration in milliseconds (default: 5000)
                position: 'top-center', // Toast position (default: 'top-right')
            });

        }

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
                <Toaster />
                <div>


                    <form onSubmit={handleform}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Assignment Name</span>
                            </label>
                            <input type="text" name='assignmentName' placeholder="Assignment" className="input input-bordered" required />
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

export default CreateAssignment;

