import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import {
  Container,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  TextField,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { state } from "../Context/Context";

export default function Assignments() {
  const [assignments, setAssignments] = React.useContext(state);

  const navigate = useNavigate();

  const removeAssignment = (id) => {
    const newAssignments = assignments.filter(
      (assignment) => assignment.id !== id
    );
    setAssignments(newAssignments);
    localStorage.setItem("assignments", JSON.stringify(newAssignments));
  };

  const onFilter = (e) => {
    const { value } = e.target;
    if (value === "" || value === undefined || value === null)
      setAssignments(JSON.parse(localStorage.getItem("assignments")));
    else {
      setAssignments(
        assignments.filter(
          (assignment) =>
            assignment.title.includes(value) ||
            assignment.title.toUpperCase().includes(value) ||
            assignment.title.toLowerCase().includes(value) ||
            assignment.status.includes(value) ||
            assignment.status.toUpperCase().includes(value) ||
            assignment.status.toLowerCase().includes(value) ||
            assignment.details.includes(value) ||
            assignment.details.toUpperCase().includes(value) ||
            assignment.details.toLowerCase().includes(value)
        )
      );
    }
  };

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant={"h4"} sx={{ marginY: "2rem" }}>
          Your Assignments
        </Typography>
        <TextField
          label="Search Assignments"
          onChange={(e) => onFilter(e)}
          variant="outlined"
        />
      </Box>

      <TableContainer variant="outlined" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>S.no</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Trash</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assignments.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {assignments.indexOf(row) + 1}
                </TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <IconButton onClick={() => navigate(`/edit/${row.id}`)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => {
                      removeAssignment(row.id);
                    }}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
