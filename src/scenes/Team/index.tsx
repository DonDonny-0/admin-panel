import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams, GridTreeNode, GridTreeNodeWithRender } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined"
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns: GridColDef[] = [
    { 
      field: "id", 
      headerName: "ID",
      type: "number"
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      type: "string"
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      type: "string"
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      type: "string"
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      type: "string",
      renderCell: (params: GridRenderCellParams) => {
        const access = params.row.access;

        return (
          <Box
          sx={{ 
            width: "50%", 
            m: "10px auto", 
            p: "5px", 
            display: "flex", 
            alignSelf: "center", 
            justifyContent: "center", 
            bgcolor: 
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[800],
            borderRadius: "4px"
            }}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ]

  return (
    <Box>
      <Header title="Team" subtitle="Managing the team members"></Header>
      <Box>
        <DataGrid rows={mockDataTeam} columns={columns}>

        </DataGrid>
      </Box>
    </Box> 
  )
}

export default Team;