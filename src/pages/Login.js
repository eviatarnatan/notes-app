import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import setToken, { setUsername } from '../userActions';
export default function Login() {

    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const userSelector = useSelector((state) => {
		return state.user.username;
	})
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
                    'Content-Type' : 'application/json'
                    //'Access-Control-Allow-Origin': '*',
                    //'Access-Control-Allow-Methods': 'POST',
                    //'Access-Control-Allow-Headers': 'Content-Type'
                }


        })

        //console.log("let's print response before await " + response);
        //console.log("body is " + response.body);
        //console.log("headers are " + response.headers);
        const data = await response.json();
        console.log(data);
        setIsLoading(false);
        //if unauthorized
        if (response.status == 401) {
            alert("Incorrect username/password. Please try again.")
            return;
        }
        console.log(data.username);

        //putting in the store the username and token
        dispatch(setUsername(data.username))
        dispatch(setToken(data.token))
        history.push("/notes-app/notesMain");

    }

    const handleChange = ( event) => {
        setValues ( {
            ...values,
            [event.target.name]: event.target.value
        } )
    }


    return (
        <div>
            <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <TextField
                error={errors.username}
                value={values.username}
                label= {errors.username? "Error" : "Enter your username"}
                type="text"
                name="username"
                onChange={handleChange}
                helperText={errors.username}

                    />
            </div>
            <div className="form-button-margin">
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
            <div>
            <Button 

            color="primary"
            variant="contained"
            disabled={isLoading}
            type="submit"
            >
                Submit
            </Button>
            </div>
        </form>
        </div>
    )
}