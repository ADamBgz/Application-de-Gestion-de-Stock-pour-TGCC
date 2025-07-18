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
import { useTranslation } from "react-i18next"; // Ajout

function Project({ darkMode }) {
  const { t } = useTranslation(); // Ajout
  const [projects, setProjects] = React.useState([
    { id: 1, nom: "Projet A", client: "TGCC", dateDebut: "2024-06-01" },
    { id: 2, nom: "Projet B", client: "SOMAGEC", dateDebut: "2024-07-10" },
  ]);
  const [search, setSearch] = React.useState("");
  const [form, setForm] = React.useState({
    nom: "",
    client: "",
    dateDebut: "",
  });

  const filteredProjects = projects.filter(
    (p) =>
      p.nom.toLowerCase().includes(search.toLowerCase()) ||
      p.client.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (form.nom && form.client && form.dateDebut) {
      setProjects([
        ...projects,
        {
          id: projects.length + 1,
          nom: form.nom,
          client: form.client,
          dateDebut: form.dateDebut,
        },
      ]);
      setForm({ nom: "", client: "", dateDebut: "" });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        {t("projects.title")}
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" mb={1}>
          {t("projects.addEdit")}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label={t("projects.name")}
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <TextField
            label={t("projects.client")}
            value={form.client}
            onChange={(e) => setForm({ ...form, client: e.target.value })}
          />
          <TextField
            label={t("projects.startDate")}
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form.dateDebut}
            onChange={(e) => setForm({ ...form, dateDebut: e.target.value })}
          />
          <Button variant="contained" onClick={handleAdd}>
            {t("projects.add")}
          </Button>
        </Box>
      </Paper>
      <TextField
        label={t("projects.search")}
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
              <TableCell>{t("projects.name")}</TableCell>
              <TableCell>{t("projects.client")}</TableCell>
              <TableCell>{t("projects.startDate")}</TableCell>
              <TableCell>{t("projects.action")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProjects.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.nom}</TableCell>
                <TableCell>{p.client}</TableCell>
                <TableCell>{p.dateDebut}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => {
                      setProjects(projects.filter((proj) => proj.id !== p.id));
                    }}
                  >
                    {t("projects.delete")}
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

export default Project;
