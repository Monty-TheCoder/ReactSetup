import { NavLink } from "react-router-dom";
import { CForm, CCol, CFormInput, CFormSelect, CFormCheck, CButton, CRow } from '@coreui/react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import { signupSchema } from "../../components/FormValidatior";
const Signup = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(signupSchema) })
    const submit = (data: any) => {
        console.log("--->", data)
    }
    return (
        <>
            <div className="container mt-5 ">
                <CForm onSubmit={handleSubmit(submit)} className="d-flex justify-content-center "  >
                    <CCol md={8} lg={7} xl={7} className="border p-2 ">
                        <CRow >
                            <CCol md={12}>
                                <CFormInput {...register('name')} type="text" id="inputEmail41" label="First Name" />
                                <p>{errors.name?.message}</p>
                            </CCol>
                            <CCol md={12}>
                                <CFormInput {...register('lname')} type="text" id="inputEmail43" label="Last Name" />
                                <p>{errors.lname?.message}</p>

                            </CCol>
                            <CCol md={12}>
                                <CFormInput {...register('email')} type="email" id="inputEmail34" label="Email" />
                                <p>{errors.email?.message}</p>
                            </CCol>
                            <CCol md={12}>
                                <CFormSelect {...register('state')} id="inputState" label="State">
                                    <option>Choose...</option>
                                    <option>ODISHA</option>
                                    <option>Gujurat</option>
                                    <option>GOA</option>
                                </CFormSelect>
                                <p>{errors.state?.message}</p>

                            </CCol>
                            <fieldset className="">
                                <div className="d-flex ">
                                    <label className=" pt-0">Gender  : &nbsp; </label>
                                    <CFormCheck type="radio" {...register('gender', { required: true })} name="gender" id="gridRadios1" value="male" label="Male" />
                                    <CFormCheck type="radio" {...register('gender', { required: true })} name="gender" id="gridRadios2" value="female" label="Female" />
                                    <CFormCheck type="radio" {...register('gender', { required: true })} name="gender" id="gridRadios3" value="others" label="Others" />
                                </div>

                                <p>{errors.gender?.message}</p>
                            </fieldset>
                            <CCol md={12}>
                                <CFormInput type="text"  {...register('URL')} id="inputPasswordfdfd4" label="URL" />
                                <p>{errors.URL?.message}</p>
                            </CCol>
                            <CCol md={12}>
                                <CFormInput type="text"  {...register('password')} id="inputPassword4" label="Password" />
                                <p>{errors.password?.message}</p>
                            </CCol>
                            <CCol md={12}>
                                <CFormInput {...register('cpassword')} type="text" id="dgfg" label="Confirm pasword" />
                                <p>{errors.cpassword?.message}</p>

                            </CCol>
                            <CCol md={12}>
                                <CFormInput {...register('file')} type="file" id="inputdfdfdEmail4" label="Upload picture" />
                                <p>{errors.file?.message}</p>

                            </CCol>
                            <CCol md={12}>
                                <CFormCheck {...register('checkbox')} type="checkbox" id="gridCheck" label="Check me out" />
                            </CCol>
                            <CCol md={12}>
                                <CButton type="submit">Sign in</CButton>
                            </CCol>

                        </CRow>
                    </CCol >
                </CForm >
            </div >
            <NavLink to={"/auth/login"} > Login</NavLink >
        </>
    )
}

export default Signup

