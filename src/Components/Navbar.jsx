import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from '../redux/user/userSlice';
import { signOut } from 'firebase/auth';
import auth from "../lib/Firebase";



const Navbar = () => {
    const { user, isLoading } = useSelector(state => state.user)
    const dispatch = useDispatch();


    const handleLogout = () => {
        console.log('Logout');
        signOut(auth).then(() => {
            // Sign-out successful.
            dispatch(setUser(null));
        });
    };


    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>

                        {

                            user.email === "admin@vc.com" ?
                                <>

                                    <ul tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li>

                                            <Link to="/create-course">Create Course</Link>
                                        </li>
                                        <li>
                                            <Link to="/material">Materials and Contents</Link>
                                        </li>
                                        <li>
                                            <Link to="/create-exam">Exams</Link>
                                        </li>
                                        <li>
                                            <Link to="/create-assignment">Assignments</Link>
                                        </li>

                                        <li>
                                            <Link to="/grade">Grades</Link>
                                        </li>
                                    </ul>

                                </> :
                                <>

                                    <ul tabIndex={0}
                                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                        <li> <Link to='/add-course'>Add Course</Link> </li>
                                        <li>
                                            <Link to='/my-material'>Course Materials</Link >

                                        </li>
                                        <li><Link to='/my-exam'>Exams</Link></li>
                                        <li><Link to='/my-assignment'>Assignments</Link ></li>

                                        <li><Link to='/my-grade'>Progress Tracking</Link ></li>
                                    </ul>

                                </>

                        }

                    </div>
                    <button className="btn btn-ghost normal-case text-xl">
                        <Link to="/">Virtual Classroom</Link>
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">

                    {

                        user.email === "admin@vc.com" ?
                            <>

                                <ul className="menu menu-horizontal px-1">
                                    <li>

                                        <Link to="/create-course">Create Course</Link>
                                    </li>
                                    <li>
                                        <Link to="/material">Materials and Contents</Link>
                                    </li>
                                    <li>
                                        <Link to="/create-exam">Exams</Link>
                                    </li>
                                    <li>
                                        <Link to="/create-assignment">Assignments</Link>
                                    </li>

                                    <li>
                                        <Link to="/grade">Grades</Link>
                                    </li>
                                </ul>

                            </> :
                            <>

                                <ul className="menu menu-horizontal px-1">
                                    <li> <Link to='/add-course'>Add Course</Link> </li>
                                    <li>
                                        <Link to='/my-material'>Course Materials</Link >

                                    </li>
                                    <li><Link to='/my-exam'>Exams</Link></li>
                                    <li><Link to='/my-assignment'>Assignments</Link ></li>

                                    <li><Link to='/my-grade'>Progress Tracking</Link ></li>
                                </ul>

                            </>

                    }



                </div>
                <div className="navbar-end">
                    {
                        user.email ?
                            <a className="btn" onClick={handleLogout}>Signout</a> :
                            <a className="btn"><Link to="login">Sign in</Link></a>

                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
