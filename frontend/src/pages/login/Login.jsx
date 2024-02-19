import { Link } from 'react-router-dom';
import { useState } from 'react';
import useLogin from './../../hooks/useLogin.js';


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);
    };



    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className='text-3xl font-semibold text-center text-white'>
                    Login to
                    <span className='text-black'>  𝓒𝓱𝓪𝓽𝓥𝓮𝓵𝓸𝓬𝓲𝓽𝔂❤️</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className=' text-lg label-text text-white font-semibold'>Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder='Enter username'
                            className='w-full input input-bordered h-10 '
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='input-container'>
                        <label className='label'>
                            <span className='text-lg label-text text-white font-semibold'>
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            id='password'
                            placeholder='Enter Password'
                            className='input-field w-full input input-bordered h-10'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <Link to='/signup' className='text-lg hover:underline hover:text-gray-200 mt-2 inline-block text-white  hover:decoration-black'>
                        {"Don't"} have an account?
                    </Link>

                    <div>
                        <button className='btn btn-block btn-sm mt-2' disabled={loading} >
                            {
                                loading ? <span className='loading loading-spinner'></span> : "Log In"
                            }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;