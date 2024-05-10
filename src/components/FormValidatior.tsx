import * as Yup from 'yup';

export const signupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    lname: Yup.string().required('Last Name is required'),
    state: Yup.string().required('State is required'),
    gender: Yup.string().required('Gender is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
    ).min(6, 'Password must be at least 6 characters').required('Password is required'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Confirm Password is required'),
    checkbox: Yup.boolean(),
    file: Yup.mixed().test('fileSize', 'File size is too large', value => value && value[0] && value[0].size <= 102400000000 // 1MB
    ).required('Please upload an image'),
    URL: Yup.string().url('Invalid URL format').required('Website URL is required'),
});

export const loginSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    // email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),

})
export const resetPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    otp: Yup.string().min(6, 'OTP must be at least 6 Digits').required('OTP is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    cpassword: Yup.string().oneOf([Yup.ref('password'), ''], 'Passwords must match').required('Confirm Password is required'),


})