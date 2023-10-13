export const validarNombre = (nombre) => {
    const lenght = nombre.length;
    return (lenght > 1 && lenght < 30) ? true : false;
};

export const validarApellidos = (apellidos) => {
    const lenght = apellidos.length;
    return (lenght > 1 && lenght < 50) ? true : false;
};

export const validarTelefono = (telefono) => {
    const lenght = telefono.length;
    return (lenght >= 8 && lenght <= 14) ? true : false;
};