import { Button, TextField } from "@material-ui/core"
import { useState } from "react"
import { useHistory } from 'react-router';

export default function Register() {

    const [isLoading, setIsLoading] = useState();
    const history = useHistory();
    const [values, setValues] = useState( {
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState( {
        username: null,
        password: null
    })

    const handleSubmit = async(event) => {
        event.preventDefault();

        let isValid = true;
        let newErrors = {username: null, password: null}
        if (!values.username) {
            isValid = false;
            newErrors = {
                ...newErrors,
                username: "username is empty"
            }
        }

        if (!values.password) {
            isValid = false;
            newErrors = {
                ...newErrors,
                password: "password is empty"
            }
        }
        console.log(values.password.length);
        if (values.password.length <5) {
            isValid = false;
            newErrors = {
                ...newErrors,
                password: "5+ characters are required"
            }
        }

        setErrors(newErrors);
        if (!isValid) {
            return;
        }

        setIsLoading(true);
        console.log("the sent values are: " + values.username +" " + values.password);
        const response = await fetch (
            'http://localhost:8080/usersManager/register', 
            {
                method:'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type' : 'application/json'
                    //'Access-Control-Allow-Origin': '*',
                    //'Access-Control-Allow-Methods': 'POST',
                    //'Access-Control-Allow-Headers': 'Content-Type'
                }


        })
        console.log("let's print response before await " + response);
        const dataJson = await response.json;
        setIsLoading(false);
        //checking if there's a conflict
        if (response.status === 409) {
            console.log("it's a conflict " + response.status);
            alert("Username already exists, please choose another");
            return;
        }
        console.log("it's the response text " + response.status);
        console.log("let's print response after await " + dataJson);
        alert("Registered Successfuly!");
        //var token = dataJson.token;
        //console.log("let's try to pring the token " + token);
        history.push("/");

    }

    const handleChange = ( event) => {
        setValues ( {
            ...values,
            [event.target.name]: event.target.value
        } )
    }

    return (
        <div>
        <h1> Register</h1>
        <form noValidate onSubmit={handleSubmit}>
        <div>
            <TextField
            error={errors.username}
            value={values.username}
            label= {errors.username? "Error" : "Choose your username"}
            type="username"
            name="username"
            onChange={handleChange}
            helperText={errors.username}

                />
        </div>
        <div className="form-button-margin">
            <TextField
            error={errors.password}
            value={values.password}
            label= {errors.password? "Error" : "Choose your password"}
            type="password"
            name="password"
            onChange={handleChange}
            helperText={errors.password}
            />
        </div>
        <Button

        color="primary"
        variant="contained"
        disabled={isLoading}
        type="submit"
        >
            Submit
        </Button>
    </form>
    </div>
    )
}