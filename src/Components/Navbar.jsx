import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Create Course</a></li>
                            <li><a>Materials and Contents</a></li>
                            <li><a>Exams</a></li>
                            <li><a>Assignments</a></li>
                            <li><a>Grades</a></li>

                        </ul>
                    </div>
                    <button className="btn btn-ghost normal-case text-xl"><Link to='/'>Virtual Classroom</Link></button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Create Course</a></li>
                        <li>
                            <a>Materials and Contents</a>

                        </li>
                        <li><a>Exams</a></li>
                        <li><a>Assignments</a></li>

                        <li><a>Grades</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Signout</a>
                </div>
            </div>

        </div>
    );
};

export default Navbar;