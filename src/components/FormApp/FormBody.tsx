import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useState } from "react";
import { useForm } from "react-hook-form";

const colorForm = lightGreen[600];

const formInlineStyle = {
  border: "1px solid  #A0BD3C",
  borderRadius: "40px",
  fontFamily: "Roboto",
  marginTop: "30px",
  marginRight: "10px",
};

const formInlineStyleM = {
  border: "1px solid  #A0BD3C",
  borderRadius: "40px",
  fontFamily: "Roboto",
  marginTop: "30px",
  marginRight: "10px",
};

const buttonInlineStyleM = {
  border: "1px solid  #A0BD3C",
  borderRadius: "40px",
  fontFamily: "Roboto",
  paddingRight: "120px",
  paddingLeft: "120px",
  paddingTop: "10px",
  margin: "50px",
  marginRight: "0",
  backgroundColor: "#A0BD3C",
};

const FormBody = () => {
  /* Validation */

  const { register, handleSubmit } = useForm();

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleFormSubmit = (FormData: any) => {
    let formDirty = false;

    if (!FormData.name || !FormData.name.length) {
      setNameError("Name is required");
      formDirty = true;
    } else {
      setNameError("");
    }

    if (FormData.email || !FormData.email.length) {
      setEmailError("Email is required");
    } else setEmailError("");
    if (!formDirty) {
      console.log("form data is ", FormData);
    } else {
      console.log("Fix the validation");
    }
    return true;
  };

  return (
    <div className="formBodyContainer">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="formBody"
        noValidate
        autoComplete="off"
      >
        <Typography align="right">Personal Information</Typography>
        <Stack direction={"row"}>
          <TextField
            error={nameError && nameError.length ? true : false}
            fullWidth
            variant="outlined"
            placeholder="Name and Surname"
            style={formInlineStyle}
            helperText={nameError}
            id="name"
            {...register("name")}
          />
        </Stack>
        <Stack direction={"row"}>
          <TextField
            error={emailError && emailError.length ? true : false}
            helperText={emailError}
            fullWidth
            variant="outlined"
            placeholder="Email"
            id="email"
            style={formInlineStyle}
            {...register("email")}
          />
        </Stack>
        <Stack direction={"row"}>
          <TextField
            fullWidth
            placeholder="Date of birth"
            variant="outlined"
            style={formInlineStyle}
          />
        </Stack>
        <Stack direction={"row"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Adress"
            style={formInlineStyle}
          />
        </Stack>
        <Stack direction={"row"}>
          <TextField
            variant="outlined"
            placeholder="Post code"
            style={formInlineStyleM}
          />
          <TextField
            variant="outlined"
            placeholder="City"
            fullWidth
            style={formInlineStyle}
          />
        </Stack>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography align="right">Employment Information</Typography>

        <Stack direction={"row"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Position"
            style={formInlineStyle}
          />
        </Stack>
        <Stack direction={"row"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Start date"
            style={formInlineStyle}
          />
        </Stack>
        <Stack direction={"row"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Salary expectation"
            style={formInlineStyle}
          />
        </Stack>
        <Stack direction={"row"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Availability"
            style={formInlineStyle}
          />
        </Stack>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Typography align="right">File upload</Typography>
        <Stack direction={"row-reverse"}>
          <TextField
            variant="outlined"
            placeholder="CV"
            style={formInlineStyleM}
          />
          <TextField
            variant="outlined"
            placeholder="Browse"
            fullWidth
            style={formInlineStyle}
          />
        </Stack>
        <Stack direction={"row-reverse"}>
          <TextField
            variant="outlined"
            placeholder="Cover Letter"
            style={formInlineStyleM}
          />
          <TextField
            variant="outlined"
            placeholder="Browse"
            fullWidth
            style={formInlineStyle}
          />
        </Stack>
        <br />
        <br />
        <br />
        <br />
        <FormControlLabel
          control={<Checkbox color="success" style={{ color: colorForm }} />}
          label="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quas
          velit architecto. Ex qui optio totam rerum non sequi recusandae"
        ></FormControlLabel>
        <Stack direction={"column"} alignItems={"end"}>
          <Button
            type="submit"
            color="success"
            variant="contained"
            style={buttonInlineStyleM}
            size="large"
          >
            Button
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default FormBody;
