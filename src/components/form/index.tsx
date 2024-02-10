import { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Button, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import shortid from "shortid";

import { addTask } from "../../redux/slices/tasks";

// La tarea se crea por default como pendiente.
export const FormAddTask = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");

  const dispatch = useDispatch();

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
    
  const onChangeDescription = (e: ChangeEvent<HTMLInputElement>) =>
    setDescription(e.target.value);

  const handleStateTask = () => {
    if (!name.trim()) {
      setError("El campo Nombre es requerido");
      return;
    }
    const id = shortid.generate();
    dispatch(addTask({ id, name, description }));
    setName("");
    setDescription("");
    setError("");
  };

  return (
    <Box m={2}>
      <TextField
        hiddenLabel
        onChange={onChangeName}
        id="filled-hidden-label-small"
        value={name}
        placeholder="Nombre "
        variant="filled"
        size="small"
        sx={{ marginRight: "10px" }}
        required
        error={!!error}
        helperText={error}
      />
      <TextField
        hiddenLabel
        onChange={onChangeDescription}
        id="filled-hidden-label-small"
        value={description}
        placeholder="Descripcion"
        variant="filled"
        size="small"
      />
      <Button onClick={handleStateTask}>Crear Tarea</Button>
    </Box>
  );
};
