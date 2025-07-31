import React, { useEffect, useState } from "react";
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
import axios from "axios";

function Suppliers({ darkMode }) {
  const { t } = useTranslation();

  const [suppliers, setSuppliers] = useState([]); // ✅ Ajouté
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ nom: "", tel: "", email: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/suppliers")
      .then((res) => setSuppliers(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredSuppliers = suppliers.filter(
    (s) =>
      s.nom.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (form.nom && form.tel && form.email) {
      axios
        .post("http://localhost:8080/api/suppliers", form)
        .then((res) => {
          setSuppliers([...suppliers, res.data]);
          setForm({ nom: "", tel: "", email: "" });
        })
        .catch((err) => console.error(err));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/suppliers/${id}`)
      .then(() => {
        setSuppliers(suppliers.filter((sup) => sup.id !== id));
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2} sx={{ color: darkMode ? "#f3f4f6" : "#23232a" }}>
        {t("suppliers.title", "Liste des Fournisseurs")}
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" mb={1}>
          {t("suppliers.add", "Ajouter Fournisseur")}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <TextField
            label={t("suppliers.name", "Nom")}
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <TextField
            label={t("suppliers.phone", "Téléphone")}
            value={form.tel}
            onChange={(e) => setForm({ ...form, tel: e.target.value })}
          />
          <TextField
            label="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <Button variant="contained" onClick={handleAdd}>
            {t("suppliers.addBtn", "Ajouter")}
          </Button>
        </Box>
      </Paper>

      <TextField
        label={t("suppliers.search", "Rechercher")}
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
              <TableCell>{t("suppliers.name", "Nom")}</TableCell>
              <TableCell>{t("suppliers.phone", "Téléphone")}</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>{t("suppliers.action", "Action")}</TableCell>
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
                    onClick={() => handleDelete(s.id)}
                  >
                    {t("suppliers.delete", "Supprimer")}
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
