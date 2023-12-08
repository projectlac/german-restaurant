import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

export default function Notification() {
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                mt: 2,
              }}
            >
              Liebe Gäste, von 24.12-26.12.2023 und 1.1-2.1.2024 haben wir
              Weihnachts- und Neujahrsfeier.
            </Typography>
            <br />
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Wir freuen uns, Sie ab dem 2. Januar bei uns begrüßen zu dürfen.
              Eine schöne Weihnachtszeit und ein frohes neues Jahr wünschen wir
              Ihnen.
              <br />
              <br />
              Di An Di Team
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            color="error"
            sx={{
              border: "1px solid",
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
