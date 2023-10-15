import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, /* MainSpace, */ FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import { validarNombre, validarApellidos, validarTelefono } from "./DatosPersonales/validaciones.js";
import { validarEmail, validarPassword} from "./DatosUsuario/validaciones.js"
import Step from "./Step";

const Form = () => {

  const [step, setStep] = useState(1)

  const updateStep = (step) =>{ setStep(step) }

  const steps = {
       0:  <DatosUsuario updateStep={updateStep}/>,
       1:  <DatosPersonales updateStep={updateStep}/>,
       2:  <DatosEntrega updateStep={updateStep}/>,
       3:  <Complete />,
      };

     const onSubmit = () => {};

     const handleChange = (element) => {
      const value = element.target.value;
      console.log(value);
     };

  const stepFLow = {

    0:{
      inputs: [
        {
          label:"Correo electrónico", 
          type:"email",
          value: "",
          valid: null,
          helperText: "Ingrese un correo electrónico válido", 
          onChange: handleChange,
          validator: validarEmail, 
        },
        {
          label:"Contraseña", 
          type:"password",
          value: "",
          valid: null,
          helperText: "Ingrese una contraseña válida",
          onChange: handleChange,
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit,
    }
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        { step < 3 && <Stepper step={step} />}
        {/*<DatosUsuario />
         <DatosPersonales />
        <DatosEntrega /> */}
        {/* {steps[step]} */}
        <Step data={stepFLow[step]} />
      </FormSpace>
    </Box>
  );
};

export default Form;
