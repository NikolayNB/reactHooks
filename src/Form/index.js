import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, /* MainSpace, */ FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import { validarNombre, validarApellidos, validarTelefono, validarEmail, validarPassword } from "./validaciones";
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

  const stepFLow = {
    0:{
      inputs: [
        {
          label:"Correo electrónico", 
          type:"email",
          value: "",
          valid: null,
          helperText: "Ingrese un correo electrónico válido", 
          onChange: () => {},
          validator: validarEmail, 
        },
        {
          label:"Contraseña", 
          type:"password",
          value: "",
          valid: null,
          helperText: "Ingrese una contraseña válida",
          onChange: () => {},
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
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
