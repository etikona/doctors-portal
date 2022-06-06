import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useNavigate, } from 'react-router-dom';


const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        console.log('update done')
        navigate('/appionment')
    };

    let signInError;

    if (loading || gLoading || updating) {
        return <button className="btn loading">loading</button>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-600'>{error?.message || gError?.message || updateError?.message}</p>
    }

    if (user || gUser) {
        console.log(gUser)
    }
    return (
        <div className='flex  justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl"><font></font>
                <div className="card-body"><font></font>
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2><font></font>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full "><font></font>
                            <label className="label"><font></font>
                                <span className="label-text">Name</span><font></font>
                            </label><font></font>
                            <input type="name"
                                placeholder="your name"
                                className="input input-bordered w-full max-w-xs" /><font></font>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is  Required'
                                },

                            })} />
                            <label className="label"><font></font>


                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-600">{errors.name.message}</span>}


                            </label><font></font>
                        </div>
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
                        <button className="btn btn-wide w-full uppercase">Sign Up</button>
                        <p>Already have an account? <Link className='text-primary' to="/login"> Login </Link></p>

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

export default Register;