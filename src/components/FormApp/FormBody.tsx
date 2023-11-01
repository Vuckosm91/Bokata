import {
  Button,
  Checkbox,
  FormControlLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import { useFormik } from "formik";
import { basicSchema } from "../../Validations/formValidation";

const colorForm = lightGreen[600];

const formInlineStyle = {
  border: "1px solid  #A0BD3C",
  borderRadius: "20px",
  fontFamily: "Roboto",
  marginTop: "30px",
  marginRight: "10px",
};

const formInlineStyleError = {
  border: "1px solid  #fc2c03",
  borderRadius: "20px",
  fontFamily: "Roboto",
  marginTop: "30px",
  marginRight: "10px",
};

const formInlineStyleM = {
  border: "1px solid  #A0BD3C",
  borderRadius: "20px",
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

const onSubmit = () => {
  console.log("submitet");
};

const FormBody = () => {
  /* Validation */

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      birthday: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  console.log(formik.errors);

  return (
    <div className="formBodyContainer">
      <form
        className="formBody"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <Typography align="right">Personal Information</Typography>
        <Stack direction={"row"}>
          <TextField
            value={formik.values.name}
            onChange={formik.handleChange}
            id="name"
            type="string"
            fullWidth
            variant={"outlined"}
            color="error"
            placeholder="Name and Surname"
            style={
              formik.errors.name && formik.touched.name
                ? formInlineStyleError
                : formInlineStyle
            }
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="formError">{formik.errors.name}</p>
          ) : null}
        </Stack>
        <Stack direction={"row"}>
          <TextField
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            type="email"
            fullWidth
            variant={"outlined"}
            color="error"
            placeholder="Email"
            style={
              formik.errors.email && formik.touched.email
                ? formInlineStyleError
                : formInlineStyle
            }
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="formError">{formik.errors.email}</p>
          ) : null}
        </Stack>
        <Stack direction={"row"}>
          <TextField
            value={formik.values.birthday}
            onChange={formik.handleChange}
            id="birthday"
            type="date"
            fullWidth
            placeholder="Date of birth"
            variant={"outlined"}
            color="error"
            style={
              formik.errors.birthday && formik.touched.birthday
                ? formInlineStyleError
                : formInlineStyle
            }
          />
          {formik.errors.birthday && formik.touched.birthday ? (
            <p className="formError">{formik.errors.birthday}</p>
          ) : null}
        </Stack>
        <Stack direction={"row"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Address"
            style={formInlineStyle}
          />
        </Stack>
        <Stack marginBottom={15} direction={"row"}>
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
        <Stack marginBottom={20} direction={"row"}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Availability"
            style={formInlineStyle}
          />
        </Stack>
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
