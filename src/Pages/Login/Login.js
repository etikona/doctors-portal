import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)

    };

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (loading || gLoading) {
        return <button className="btn loading">loading</button>
    }

    if (error || gError) {
        signInError = <p className='text-red-600'>{error?.message || gError?.message}</p>
    }

    if ( user ||gUser) {
        navigate(from, { replace: true });
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl"><font></font>
                <div className="card-body"><font></font>
                    <h2 className="text-center text-2xl font-bold">Login</h2><font></font>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs"><font></font>
                            <label className="label"><font></font>
                                <span className="label-text">Email</span><font></font>
                            </label><font></font>
                            <input type="email"
                                placeholder="Email Address"
                                className="input input-bordered w-full max-w-xs" /><font></font>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email Required'
                                },
                                pattern: {
                                    value: /[A-Za-z]{3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                            <label className="label"><font></font>


                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.email.message}</span>}


                            </label><font></font>
                        </div>
                        <div className="form-control w-full max-w-xs"><font></font>
                            <label className="label"><font></font>
                                <span className="label-text">Password</span><font></font>
                            </label><font></font>
                            <input type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs" /><font></font>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password Required'
                                },
                                pattern: {
                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                    message: 'Provide a valid Password'
                                }
                            })} />
                            <label className="label"><font></font>


                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}
                                {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600">{errors.password.message}</span>}


                            </label><font></font>
                        </div>
                        {signInError}
                        <button className="btn btn-wide w-full uppercase">Login</button>
                        <p>New to doctors portal? <Link className='text-primary' to="/register"> Create new Account</Link></p>

                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline uppercase"
                    >continue with google</button>
                </div><font></font>
            </div>
        </div>
    );
};

export default Login;