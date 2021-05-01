import { Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, makeStyles, MenuItem, NativeSelect, Radio, RadioGroup, Select, TextField } from "@material-ui/core"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router";
import setToken from "../userActions";
import './formStyle.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
export default function AddNote(param) {
    const classes = useStyles();

    const token = useSelector((state) => {
        return state.user.token;
    });

    //for testing
    const dispatch = useDispatch();
    //dispatch(setToken("-1591360440"));

    const history = useHistory();
    //end for testing
    const [values, setValues] = useState({
        title: "",
        body: "",
        color: "",
        priority: "",
        isRead: ""
    })



    const [errors, setErrors] = useState({
        title: null,
        body: null
    })

    //console.log("The color is " + values.color);
    console.log("the title is " + values.title);
    console.log("the body is " + values.body);
    console.log("the color is " + values.color);
    console.log("the priority is " + values.priority);
    console.log("the read status is " + values.isRead);
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        let isValid = true;
        let newErrors = {title: null, body: null};
        if(!values.title) {
            isValid = false;
            newErrors = {
                ...newErrors,
                title: "Empty title"
            }
        }
        setErrors(newErrors);
        if(!isValid) {
            return;
        }
        console.log("token before sending is: " + token)
        

        console.log("the sent values are: " + values.title + values.body);
        const response = await fetch (
            'http://localhost:8080/notesManager/add', 
            {
                method:'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${token}`
                    //'Access-Control-Allow-Origin': '*',
                    //'Access-Control-Allow-Methods': 'POST',
                    //'Access-Control-Allow-Headers': 'Content-Type'
                }


        })
        //getting back to the main notes page
        //goback leaves trace, so used push instead.
        history.push("../notesMain");

    }
    return (

        <div>
            <form noValidate onSubmit={handleSubmit} >
                <div className="div-distance">
                    <TextField className="form"
                    error={errors.title}
                    value={values.title}
                    label= {errors.title? "Error" : "Title"}
                    type="text"
                    name="title"
                    onChange={handleChange}
                    helperText={errors.title}
                    inputProps={{maxLength: 40}}
                    variant="outlined"

                    />
                </div>
                <div>
                    <TextField className = "form"
                    error={errors.body}
                    value={values.body}
                    label = {errors.body? "Error": "Body"}
                    helperText={errors.body}
                    onChange={handleChange}
                    type="text"
                    name="body"
                    multiline 
                    rows="15"
                    color="primary"
                    variant="outlined"
                    />
                </div>
                <div>
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="color-native-simple">Color</InputLabel>
                    <Select
                    native
                    value={values.color}
                    onChange={handleChange}
                    inputProps={{
                        name: 'color',
                        id: 'color-native-simple',
                    }}
                    >
          <option aria-label="None" value="" />
          <option value={"Green"}>Green</option>
          <option value={"Yellow"}>Yellow</option>
          <option value={"Red"}>Red</option>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="priority-native-helper">Priority</InputLabel>
        <Select
            native
          value={values.priority}
          onChange={handleChange}
          inputProps={{
            name: 'priority',
            id: 'priority-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </Select>
      </FormControl>
            </div>

            <div>
                Read Flag
                <Checkbox
                color="primary"
                value={values.isRead}
                onChange={handleChange}
                >
                    
                </Checkbox>
            </div>
            <div>
                <Button className="form"
                color= "primary"
                variant = "contained"
                type = "submit"
                >
                    Save
                </Button>
            </div>
            </form>
        </div>
    )
}