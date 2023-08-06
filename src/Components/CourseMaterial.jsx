import React from 'react';
import { useCreateMaterialMutation } from '../redux/api/apiSlice';
import { toast } from 'react-hot-toast';

const CourseMaterial = () => {

    const [createMaterial, { isLoading, isError }] = useCreateMaterialMutation()

    const handleform = event => {
        event.preventDefault();
        const form = event.target;
        const courseID = form.courseID.value;
        const materials = form.course.value;

        const material = {
            data: {
                courseID: courseID,
                materials: materials
            }
        }
        createMaterial(material)
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

            <div className="">
                <div className='flex justify-center items-center '>


                    <form onSubmit={handleform}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course ID</span>
                            </label>
                            <input type="number" name='courseID' placeholder="Course ID" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Course Materials</span>
                            </label>
                            <input type="text" name='course' placeholder="Course Materials" className="input input-bordered" required />

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

export default CourseMaterial;