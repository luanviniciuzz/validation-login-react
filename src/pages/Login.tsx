import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';
import Logo from '../assets/img/B2BitLogo.png'
import useHookUserData from '../services/useHookUserData';

export default function Login() {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string()
      .min(3, 'Short Password')
      .max(50, 'Long Password')
      .required('Required'),
  });

  const { login, reloadLogin, loading } = useHookUserData();

  useEffect(() => {

    const token = localStorage.getItem('loggedUserToken');
    reloadLogin(token);

  }, [reloadLogin]);

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white md:w-[438px] h-[534px] shadow-[0_0_60px_0_rgba(0,0,0,0.25)] mx-auto p-8 rounded-3xl">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-116 w-auto w-295"
              src={Logo}
              alt="Your Company"
            />
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  login(values.email, values.password);
                }}
              >
            {({ errors, touched, setTouched }) => (
              <Form action="" className="flex flex-col w-full gap-5 mt-5">
                  <div>
                    <div className="flex justify-between w-full">
                      <label className="text-center text-lg font-body self-center" htmlFor="email">
                        E-mail
                      </label>
                      {errors.email && touched.email && (
                        <span className="text-red-400">{errors.email}</span>
                      )}
                  </div>
                  <Field className={`font-normal bg-gray-100 pl-2 rounded-[9px] h-[54px] w-full ${
                      errors.email && touched.email
                        ? 'border-2 border-red-400'
                        : 'border-background_placeholder'
                    }`}
                    name="email"
                    id="email"
                    type="email"
                    data-testid="email-field"
                    placeholder="@gmail.com"
                    onBlur={() => setTouched({ ...touched, email: true })}
                  />
                </div>

                <div>
                  <div className="flex justify-between w-full">
                    <label className="text-center text-lg font-body self-center"  htmlFor="password">
                      Password
                    </label>
                    {errors.password && touched.password && (
                      <span className="text-red-400 font-body text-lg">{errors.password}</span>
                    )}
                </div>
                  <Field className={`font-normal bg-background_placeholder pl-2 rounded-[9px] h-[54px] w-full border-background_placeholder ${
                          errors.password && touched.password
                        ? 'border-2 border-red-400'
                        : 'border-background_placeholder'
                    }`}
                    name="password"
                    id="password"
                    type="password"
                    data-testid="password-field"
                    placeholder="****************"
                    onBlur={() => setTouched({ ...touched, password: true })}
                  />
                </div>

                <button className="bg-blueb2bit text-white font-body rounded-lg mt-5 flex items-center justify-center gap-5 h-14 hover:bg-blue-700 transition-all"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" role="status"></div>
                  ) : (
                    'Sign In'
                  )}
                </button>
              </Form>
            )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  )
}
