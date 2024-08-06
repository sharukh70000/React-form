import { useState } from "react";
import { useFormik } from "formik";


const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'username cannot  be emmty';
    }
    // else if (values.firstName.length > 15) {
    //   errors.firstName = 'Must be 15 characters or less';
    // }

    // if (!values.lastName) {
    //   errors.lastName = 'Required';
    // } else if (values.lastName.length > 20) {
    //   errors.lastName = 'Must be 20 characters or less';
    // }

    // if (!values.email) {
    //   errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //   errors.email = 'Invalid email address';
    // }

    return errors;
};

export default function NewCommentsForms({ addNewComments }) {
    // let [formData, setFormData] = useState({

    //     remarks: "",
    //     username: "",
    //     rating: 5,

    // });

    //formik

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    // start of validation

    // let [isValid, setIsValid] = useState(true)

    //end of

    // let handleInputChange = (event) => {
    //     setFormData((currData) => {
    //         return { ...currData, [event.target.name]: event.target.value }
    //     })
    // };


    // let handleSubmit = (event) => {
    //     // start of alidation 
    //     // if (!formData.username) {
    //     //     console.log('you cannot submit')
    //     //     setIsValid(false)
    //     //     event.preventDefault()
    //     //     return
    //     // }
    //     //end of

    //     console.log(formData)
    //     addNewComments(formData)
    //     event.preventDefault()
    //     setFormData({
    //         remarks: "",
    //         username: "",
    //         rating: 5,
    //     })
    // }
    return (
        <div>
            <h4>Give a Comment</h4>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username</label>

                {/* <input placeholder="username" type="text" value={formData.usename} id="username" name="username" onChange={handleInputChange} /> */}

                <input 
                placeholder="username"
                 type="text" 
                 value={formik.values.username}
                 onChange={formik.handleChange}
                  id="username" name="username"
                    />   {/* formik */}
                {formik.errors.username ? <p style={{ color: "red" }}>{formik.errors.username}</p> : null}   {/* formik */}

                {/* star of validation */}
                {/* {!isValid && <p style={{ color: "red" }}>username cannot be emmety</p>} */}

                {/* end of */}
                <br /><br />

                <label htmlFor="reamarks">Remarks</label>
                {/* <textarea name="remarks" id="reamarks" cols="0" rows="0" value={formData.remarks} onChange={handleInputChange} ></textarea> */}

                <textarea name="remarks" id="reamarks" cols="0" rows="0" 
                value={formik.values.remarks} 
                onChange={formik.handleChange}   ></textarea>  {/* formik */}
                <br /><br />

                <label htmlFor="rating">rating</label>
                {/* <input type="number" name="rating" id="rating" placeholder="rating" max={5} min={1} value={formData.rating} onChange={handleInputChange} /> */}

                <input type="number" name="rating" id="rating" placeholder="rating" max={5} min={1} value={formik.values.rating} onChange={formik.handleChange} /> {/* formik */}

                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}