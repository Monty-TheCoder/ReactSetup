import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom"
import { loginSchema } from "../../components/FormValidatior"
import { useEffect } from "react"

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(loginSchema) })
    const submit = async (data: any) => {
        console.log("--->", data)
        navigate('/home')

        localStorage.setItem('user', JSON.stringify(data))
    }

    useEffect(() => {
    }, [])
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit(submit)}>
                    <input
                        {...register('name')}
                        type="text"
                        name="name"
                        placeholder="Name"
                    />
                    <p>{errors.name?.message}</p>
                    <input
                        {...register('password')}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                    <p>{errors.password?.message}</p>
                    <button type="submit">Login</button>
                </form>
            </div>
            <NavLink to={"/auth/signup"}>Sign up</NavLink>&nbsp;| &nbsp;
            <NavLink to={"/auth/forgot-password"}>Forgot Password</NavLink>

        </>
    )
}

export default Login