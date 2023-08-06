/* eslint-disable no-unreachable */
/* eslint-disable react/no-unknown-property */
import React, { useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/user/userSlice';


const Login = () => {



    const dispatch = useDispatch();
    const { user, isLoading, isError } = useSelector((state) => state.user);
    const navigate = useNavigate();



    const handleSignin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        try {
            dispatch(loginUser({ email: email, password: password }));

        } catch (error) {

            toast.error("Error occured.Please check your credentials")

        }


    }

    useEffect(() => {
        if (user.email && !isLoading) {
            navigate('/');
        }
    }, [user.email, isLoading]);


    if (isLoading) {
        return <progress className="progress w-full"></progress>

    }



    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={handleSignin}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <p>Don't have an Account? <Link to="/signup" className='underline'>SignUp</Link> </p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-primary">Login</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <Toaster />


        </div>
    );
};

export default Login;