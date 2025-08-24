import * as yup from 'yup';

export const registerSchema = yup.object().shape({
    name: yup.string()
        .required('El nombre es obligatorio')
        .min(2, 'El nombre debe tener al menos 2 caracteres'),
    email: yup.string()
        .email('Debe ser un correo válido')
        .required('El correo es obligatorio'),
    password: yup.string()
        .required('La contraseña es obligatoria')
        .min(6, 'La contraseña debe tener al menos 6 caracteres'),
});

export const loginSchema = yup.object().shape({
    email: yup.string()
        .email('Debe ser un correo válido')
        .required('El correo es obligatorio'),
    password: yup.string()
        .required('La contraseña es obligatoria'),
});