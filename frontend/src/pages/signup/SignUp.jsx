import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from './../../hooks/useSignup.js';
import GenderCheckbox from "./GenderCheckbox.jsx";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await signup(inputs);
    };


    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-white">
                    Sign Up
                    <span className="text-black"> 𝓒𝓱𝓪𝓽𝓥𝓮𝓵𝓸𝓬𝓲𝓽𝔂❤️</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className='text-lg label-text text-white font-semibold'>Full Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter Full Name'
                            className='w-full input input-bordered h-10'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className='text-lg label-text text-white font-semibold'>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div className='input-container'>
                        <label className='label'>
                            <span className='text-lg label-text text-white font-semibold'>Password</span>
                        </label>
                        <input
                            type="password"
                            id='password'
                            placeholder='Enter password'
                            className='w-full input input-bordered h-10'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className='input-container'>
                        <label className='label'>
                            <span className='text-lg label-text text-white font-semibold'>Confirm Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder='Enter Confirm Password'
                            className=' w-full input input-bordered h-10'
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    <GenderCheckbox
                        onCheckboxChange={handleCheckboxChange}
                        selectedGender={inputs.gender}
                    />

                    <Link
                        to={"/login"}
                        className='text-lg hover:underline hover:decoration-black hover:text-gray-300 mt-2 inline-block text-white'
                    >
                        Already have an account?
                    </Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
                            {
                                loading ? <span className="loading loading-spinner"></span> : "Sign Up"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;