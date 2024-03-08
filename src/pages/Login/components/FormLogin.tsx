import { useFormik } from 'formik';
import * as Yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { UserCredentials } from '../../../types/auth.types';
import toast from 'react-hot-toast';
import { useSession } from '../../../context/ContextAuth';

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters')
        .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
            'The password must have at least one number, capital letter and a special character.'
        ),
});

const initialValues = {
    email: '',
    password: '',
};

const FormLogin = () => {
    const navigate = useNavigate()
    const loginMutation = useMutation({
        mutationFn: (data: UserCredentials) => login(data)
    })
    const { saveSession } = useSession()
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
                const response = await loginMutation.mutateAsync(values)
                response && saveSession(response)
                navigate('/app')
                toast.success('logged on')
            } catch (error) {
                if (error instanceof Error)
                    toast.error(error.message)
            }
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} style={{ width: '100%' }}>
            <Box component="div" sx={{ mt: 1, width: '100%' }}>
                <TextField
                    type="email"
                    label="Email Address"
                    margin="normal"
                    fullWidth
                    id="email"
                    autoComplete="email"
                    autoFocus
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && (
                    <Alert severity="error" sx={{ marginTop: 1 }}>
                        {formik.errors.email}
                    </Alert>
                )}

                <TextField
                    type="password"
                    label="Password"
                    margin="normal"
                    fullWidth
                    id="password"
                    autoComplete="current-password"
                    {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password && (
                    <Alert severity="error" sx={{ marginTop: 1 }}>
                        {formik.errors.password}
                    </Alert>
                )}

                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} disabled={loginMutation.isPending}>
                    {loginMutation.isPending ? 'Loading...' : 'Sign In'}
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </form>
    );
};

export default FormLogin;
