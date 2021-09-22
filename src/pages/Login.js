import React, {useState, useEffect} from 'react';

import { Formik, Field } from "formik";

function Login() {

    return (
        <div>
            <Formik
                initialValues={{ username: '', password: '' }}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    // await postNewOrder(values)
                    // actions.setSubmitting(false);
                }}
            >
                {props => {
                    const { handleSubmit, handleChange, values } = props;

                    return (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column" }}>
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <div style={{ display: 'flex', flexDirection: "column" }}>
                                    <label htmlFor="username">User Name</label>
                                    <input
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.username}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: "column" }}>
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.password}
                                    />
                                </div>

                            </div>
                            <div>
                                <button type="submit">Login</button>
                            </div>
                        </form>
                    )
                }}
                </Formik>
        </div>
    )


}

export default Login;