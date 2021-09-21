import React from "react";
import { Formik, Field, FieldArray } from "formik";

const BASE_URL = "http://localhost:8000";

const OrderForm = ({ orderItems, addNewOrder }) => {

    const postNewOrder = async (orderData) => {

        const orderRes = await fetch(`${BASE_URL}/orders/create`, {
            method: "post",
            body: JSON.stringify(orderData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const orderResponse = await orderRes.json()
        addNewOrder(orderResponse.data)
    }

    return (
        <div>
            <h1> Order Form </h1>

            <Formik
                initialValues={{ customerName: '', phoneNum: '', items: [] }}
                onSubmit={async (values, actions) => {
                    console.log(values);
                    await postNewOrder(values)
                    actions.setSubmitting(false);
                }}
            >
                {props => {
                    const { handleSubmit, handleChange, values } = props;

                    return (

                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column" }}>
                            <div style={{ display: 'flex', justifyContent: "space-between" }}>
                                <div style={{ display: 'flex', flexDirection: "column" }}>
                                    <label htmlFor="customerName">Customer Name</label>
                                    <input
                                        id="customerName"
                                        name="customerName"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.customerName}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: "column" }}>
                                    <label htmlFor="phoneNum">Phone number</label>
                                    <input
                                        id="phoneNum"
                                        name="phoneNum"
                                        type="text"
                                        onChange={handleChange}
                                        value={values.phoneNum}
                                    />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: "column" }}>
                                <h3>Order Items</h3>

                                <FieldArray
                                    name="items"
                                    render={arrayHelpers => (
                                        <div>
                                            {values.items.map((item, index) => (
                                                <div key={index}>
                                                    <Field  as="select" name={`items[${index}].name`} placeholder="Name" >
                                                        {orderItems.map(oitem => <option key={oitem.id} value={oitem.id}>{ oitem.name }</option>)}

                                                        </Field>
                                                    <Field name={`items.${index}.quantity`} placeholder="Quantity" type="number" min={0} max={100} />

                                                    <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                                        Remove
                                                    </button>
                                                </div>
                                            ))}
                                            <button
                                                type="button"
                                                onClick={() => arrayHelpers.push({ name: '', quantity: 0 })}
                                            >
                                                Add Item
                                            </button>
                                        </div>
                                    )}
                                />


                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    )
                }}

            </Formik>


        </div>
    );
}


export default OrderForm;