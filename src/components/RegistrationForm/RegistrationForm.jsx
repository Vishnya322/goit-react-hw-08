import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegistrationForm.module.css';

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label className={css.label} htmlFor="name">
          Username
        </label>
        <Field
          className={css.input}
          type="text"
          id="name"
          name="name"
          autoComplete="username"
        ></Field>

        <label className={css.label} htmlFor="email">
          Email
        </label>
        <Field
          className={css.input}
          type="email"
          id="email"
          name="email"
          autoComplete="email"
        ></Field>

        <label className={css.label} htmlFor="password">
          Password
        </label>
        <Field
          className={css.input}
          type="password"
          id="password"
          name="password"
          autoComplete="new-password"
        ></Field>
        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
