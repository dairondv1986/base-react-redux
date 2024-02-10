import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Box } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { rows } from "./constants";
import { TableTask } from "./TableTask";
import { FormAddTask } from "../form";
import { initializeTask } from "../../redux/slices/tasks";

export const ContentTableTasks = () => {
  const listTask = useSelector((state) => state.task.task);
  const [filter, setFilter] = useState('2');

  const dispatch = useDispatch();

  useEffect(() => {
    if(listTask && listTask.length === 0){
      dispatch(initializeTask(rows));
    }
  }, [listTask, dispatch]);

  const handleFilter = (e: SelectChangeEvent<string>) => setFilter(e.target.value);

  const filteredTasks = listTask.filter((task) => {
    if (filter === "0") {
      return !task.complete;
    } else if (filter === "1") {
      return task.complete;
    } else {
      return true;
    }
  });

  return (
    <TableContainer component={Paper} sx={{ padding: "40px" }}>
      <Typography variant="h5" sx={{ width: "100%", pb: "20px" }}>
        Listado de tareas
      </Typography>
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <Typography variant="subtitle1" pr="10px">
          Filtrar por estado:
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={handleFilter}
          defaultValue="2"
          sx={{ width: "140px", height: "30px" }}
        >
          <MenuItem value="0">Pendiente</MenuItem>
          <MenuItem value="1">Completado</MenuItem>
          <MenuItem value="2">Todo</MenuItem>
        </Select>
      </Box>
      <TableTask listTask={filteredTasks} />

      <FormAddTask />
    </TableContainer>
  );
};
