import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

function Reports() {
  const [reports] = React.useState([
    { id: 1, titre: "Rapport Stock", date: "2025-07-18", type: "Stock" },
    { id: 2, titre: "Rapport Produits", date: "2025-07-17", type: "Produits" },
    {
      id: 3,
      titre: "Rapport Fournisseurs",
      date: "2025-07-16",
      type: "Fournisseurs",
    },
  ]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        Rapports
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Titre</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((r) => (
              <TableRow key={r.id}>
                <TableCell>{r.titre}</TableCell>
                <TableCell>{r.date}</TableCell>
                <TableCell>{r.type}</TableCell>
                <TableCell>
                  <Button variant="outlined" size="small" color="primary">
                    Télécharger
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}

export default Reports;
