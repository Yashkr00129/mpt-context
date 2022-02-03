import * as React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import * as Material from "@mui/material";
import { useNavigate } from "react-router-dom";
import { state } from "../Context/Context";

export default function BasicTable() {
  const [assignments, setAssignments] = React.useContext(state);
  const navigate = useNavigate();

  const removeAssignment = (id) => {
    const newAssignments = assignments.filter(
      (assignment) => assignment.id !== id
    );
    setAssignments(newAssignments);
    localStorage.setItem("assignments", JSON.stringify(newAssignments));
  };

  return (
    <Material.Container>
      <Material.Typography variant={"h4"} sx={{ marginY: "2rem" }}>
        Your Assignments
      </Material.Typography>
      <Material.TableContainer variant="outlined" component={Material.Paper}>
        <Material.Table sx={{ minWidth: 650 }} aria-label="simple table">
          <Material.TableHead>
            <Material.TableRow>
              <Material.TableCell>S.no</Material.TableCell>
              <Material.TableCell>Title</Material.TableCell>
              <Material.TableCell>Status</Material.TableCell>
              <Material.TableCell>Edit</Material.TableCell>
              <Material.TableCell>Trash</Material.TableCell>
            </Material.TableRow>
          </Material.TableHead>
          <Material.TableBody>
            {assignments.map((row) => (
              <Material.TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <Material.TableCell component="th" scope="row">
                  {assignments.indexOf(row) + 1}
                </Material.TableCell>
                <Material.TableCell>{row.title}</Material.TableCell>
                <Material.TableCell>{row.status}</Material.TableCell>
                <Material.TableCell>
                  <Material.IconButton
                    onClick={() => navigate(`/edit/${row.id}`)}
                  >
                    <EditIcon />
                  </Material.IconButton>
                </Material.TableCell>
                <Material.TableCell>
                  <Material.IconButton
                    onClick={() => {
                      removeAssignment(row.id);
                    }}
                  >
                    <DeleteOutlineOutlinedIcon />
                  </Material.IconButton>
                </Material.TableCell>
              </Material.TableRow>
            ))}
          </Material.TableBody>
        </Material.Table>
      </Material.TableContainer>
    </Material.Container>
  );
}
