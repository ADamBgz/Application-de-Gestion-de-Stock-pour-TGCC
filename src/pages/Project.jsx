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

function Project() {
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
        Gestion des Projets
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" mb={1}>
          Ajouter Projet
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <TextField
            label="Client"
            value={form.client}
            onChange={(e) => setForm({ ...form, client: e.target.value })}
          />
          <TextField
            label="Date Début"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={form.dateDebut}
            onChange={(e) => setForm({ ...form, dateDebut: e.target.value })}
          />
          <Button variant="contained" onClick={handleAdd}>
            Ajouter
          </Button>
        </Box>
      </Paper>
      <TextField
        label="Recherche"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Client</TableCell>
              <TableCell>Date Début</TableCell>
              <TableCell>Action</TableCell>
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

export default Project;
