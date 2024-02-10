import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

interface Props {
  description: string;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalDescription = ({ description }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="text"
        sx={{ width: "auto", fontSize: "10px", color: "#455a64" }}
        onClick={handleOpen}
      >
        Leer mas
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="subtitle1"
            color="#394053"
            borderBottom="1px solid grey"
          >
            Descripcion de la tarea
          </Typography>
          <Typography
            id="modal-modal-description"
            variant="subtitle2"
            color="#455a64"
            sx={{ mt: 2 }}
          >
            {description}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
