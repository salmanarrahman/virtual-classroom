import React from 'react';
import image from '../assets/webinar.png';


const Home = () => {
    return (
        <div>

            <div className='mx-auto container'>
                <div className="flex justify-between items-center h-[calc(100vh-80px)] max-w-7xl mx-auto ">
                    <div>
                        <h1 className="text-6xl font-black  mb-2">
                            Virtual <br /> Classroom
                        </h1>
                        <p className="font-semibold text-xl">
                            Effortless learning at your fingertips
                        </p>
                        <div className="mt-20">
                            <p>Book one for easy, secure communication</p>
                            <p>Precise white paperback pages for clear visuals</p>
                        </div>
                        <p className="btn btn-bg-200 mt-5">Learn More</p>
                    </div>
                    <div className="relative -right-14">
                        <img src={image} alt="" />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;