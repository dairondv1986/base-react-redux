import { useDispatch } from "react-redux";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import Table from "@mui/material/Table";
import DeleteIcon from "@mui/icons-material/Delete";

import { ModalDescription } from "../modal";
import { deleteTask, changeStateTask } from "../../redux/slices/tasks";

interface Task {
  id: number;
  complete: boolean;
  name: string;
  description: string;
}

interface Props {
  listTask: Task[];
}

export const TableTask = ({ listTask }: Props) => {
  const dispatch = useDispatch();

  const handlerDeleteTask = (taskId: number) =>
    dispatch(deleteTask({ id: taskId }));

  const handleStateTask = (taskId: number, status: boolean) => {
    dispatch(changeStateTask({ taskId: taskId, complete: status }));
  };

  return (
    <Table
      sx={{ border: "1px solid #dfe6e9", borderRadius: "50px" }}
      aria-label="simple table"
    >
      <TableHead>
        <TableRow>
          <TableCell>Completado</TableCell>
          <TableCell align="center">Nombre</TableCell>
          <TableCell align="right">Estado</TableCell>
          <TableCell align="right">Descripcion</TableCell>
          <TableCell align="right">Eliminar</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {listTask.map((row) => {
          return (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  defaultChecked={row.complete}
                  onClick={() => handleStateTask(row.id, !row.complete)}
                  color="primary"
                />
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" component="th" scope="row">
                {row.complete ? "Completado" : "Pendiente"}
              </TableCell>
              <TableCell align="right">
                {row.description?.length > 0 && (
                  <ModalDescription description={row.description} />
                )}
              </TableCell>
              <TableCell
                align="right"
                onClick={() => handlerDeleteTask(row.id)}
              >
                <DeleteIcon color="error" sx={{ cursor: "pointer" }} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
