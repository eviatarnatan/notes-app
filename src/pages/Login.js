import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useHistory } from 'react-router';
export default function Login() {

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const [values, setValues] = useState({
        username: "",
        password: ""
    })
    const [errors, setErrors] = useState( {
        username: null,
        password: null
    }
    )

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

        setErrors(newErrors);
        if (!isValid) {
            return;
        }

        setIsLoading(true);
        console.log("the sent values are: " + values.username +" " + values.password);
        const response = await fetch (
            'http://localhost:8080/usersManager/login', 
            {
                method:'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type' : 'application/json',
                    //'Access-Control-Allow-Origin': '*',
                    //'Access-Control-Allow-Methods': 'POST',
                    //'Access-Control-Allow-Headers': 'Content-Type'
                }


        })
        const dataJson = await response;
        console.log(dataJson);
        setIsLoading(false);
        history.push("/welcome");

    }

    const handleChange = ( event) => {
        setValues ( {
            ...values,
            [event.target.name]: event.target.value
        } )
    }


    return (
        <div>
            <h1>login</h1>
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <TextField
                error={errors.username}
                value={values.username}
                label= {errors.username? "Error" : "Enter your username"}
                type="username"
                name="username"
                onChange={handleChange}
                helperText={errors.username}

                    />
            </div>
            <div>
                <TextField
                error={errors.password}
                value={values.password}
                label= {errors.password? "Error" : "Enter your password"}
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