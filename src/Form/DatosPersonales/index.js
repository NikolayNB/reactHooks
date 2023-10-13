import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarNombre, validarApellidos, validarTelefono } from "./validaciones";

const DatosPersonales = ({ updateStep }) => {

  const [nombre, setNombre] = useState({value:"", valid: null})
  const [apellidos, setApellidos] = useState({value:"", valid: null})
  const [telefono, setTelefono] = useState({value:"", valid: null})

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={nombre.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarNombre(value);
          setNombre({value, valid})
        }}
      />
      <TextField
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={apellidos.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarApellidos(value);
          setApellidos({value, valid})
        }}
      />
      <TextField
        label="Número telefónico"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={telefono.value}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validarTelefono(value);
          setTelefono({value, valid})
        }}
      />
      <Button variant="contained" type="submit">
        Siguiente
      </Button>
    </Box>
  );
};

export default DatosPersonales;
