import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function Suppliers({ darkMode }) {
  const { t } = useTranslation();
  const [suppliers, setSuppliers] = React.useState([
    { id: 1, nom: "TGCC", tel: "0612345678", email: "contact@tgcc.ma" },
    { id: 2, nom: "SOMAGEC", tel: "0623456789", email: "info@somagec.ma" },
  ]);
  const [search, setSearch] = React.useState("");
  const [form, setForm] = React.useState({ nom: "", tel: "", email: "" });

  const filteredSuppliers = suppliers.filter(
    (s) =>
      s.nom.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (form.nom && form.tel && form.email) {
      setSuppliers([
        ...suppliers,
        {
          id: suppliers.length + 1,
          nom: form.nom,
          tel: form.tel,
          email: form.email,
        },
      ]);
      setForm({ nom: "", tel: "", email: "" });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        Gestion des Fournisseurs
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" mb={1}>
          Ajouter Fournisseur
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <TextField
            label="Téléphone"
            value={form.tel}
            onChange={(e) => setForm({ ...form, tel: e.target.value })}
          />
          <TextField
            label="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Button variant="contained" onClick={handleAdd}>
            Ajouter
          </Button>
        </Box>
      </Paper>
      <TextField
        label={t("suppliers.search")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
        InputProps={{
          style: {
            backgroundColor: darkMode ? "#23232a" : "#fff",
            color: darkMode ? "#f3f4f6" : "#23232a",
          },
        }}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Téléphone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredSuppliers.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{s.nom}</TableCell>
                <TableCell>{s.tel}</TableCell>
                <TableCell>{s.email}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => {
                      setSuppliers(suppliers.filter((sup) => sup.id !== s.id));
                    }}
                  >
                    Supprimer
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

export default Suppliers;
