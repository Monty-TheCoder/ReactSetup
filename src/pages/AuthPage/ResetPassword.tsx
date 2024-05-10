import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom"
import { resetPasswordSchema } from "../../components/FormValidatior";

const ResetPassword = () => {

    const [generatedOtp, setGeneratedOtp] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(resetPasswordSchema) })
    const submit = (data: any) => {
        console.log("--->", data)
    }
    return (
        <>
            <div className="login" style={{ height: "100vh" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 mx-auto mb-3">
                            <form onSubmit={handleSubmit(submit)}>
                                {
                                    !generatedOtp &&
                                    <>
                                        <div className="form-group">
                                            <input  {...register('email')} type="email" className="form-control" name="email" placeholder="Enter Email" required />
                                        </div>
                                        <p>{errors.email?.message}</p>
                                    </>
                                }
                                {generatedOtp &&
                                    <>
                                        <div className="form-group">
                                            <input  {...register('otp')} type="text" className="form-control" name="otp" placeholder="Enter Otp" required />
                                        </div>
                                        <p>{errors.otp?.message}</p>

                                        <div className="input-group mb-3">

                                            <input {...register('cpassword')} type="text" className="form-control" placeholder="New Password" />
                                        </div>
                                        <p>{errors.cpassword?.message}</p>

                                    </>
                                }
                                <button type="submit" className="btn btn-info">Submit</button>
                                <div className="message">
                                    <div></div>
                                    <div>Go back to<Link to="/"> login</Link></div>
                                    <div></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword