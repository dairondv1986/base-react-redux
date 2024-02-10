import "./App.css";
import { Box, Typography } from "@mui/material";
import {ContentTableTasks} from "./components/dataTable";

export const App = () => {
  return (
    <Box width='1072px'>
      <Typography variant="h4" sx={{marginBottom:'20px'}}>
        Challange BOLD MSS
      </Typography>
      <ContentTableTasks/>
    </Box>
  );
};

export default App;
