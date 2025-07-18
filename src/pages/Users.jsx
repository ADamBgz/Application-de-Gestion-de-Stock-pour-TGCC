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

function Users() {
  const [users, setUsers] = React.useState([
    { id: 1, nom: "Adam", email: "adam@gmail.com", role: "Admin" },
    { id: 2, nom: "Sara", email: "sara@gmail.com", role: "User" },
  ]);
  const [search, setSearch] = React.useState("");
  const [form, setForm] = React.useState({ nom: "", email: "", role: "" });

  const filteredUsers = users.filter(
    (u) =>
      u.nom.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (form.nom && form.email && form.role) {
      setUsers([
        ...users,
        {
          id: users.length + 1,
          nom: form.nom,
          email: form.email,
          role: form.role,
        },
      ]);
      setForm({ nom: "", email: "", role: "" });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>
        Gestion des Utilisateurs
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" mb={1}>
          Ajouter Utilisateur
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <TextField
            label="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextField
            label="Rôle"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
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
              <TableCell>Email</TableCell>
              <TableCell>Rôle</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((u) => (
              <TableRow key={u.id}>
                <TableCell>{u.nom}</TableCell>
                <TableCell>{u.email}</TableCell>
                <TableCell>{u.role}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => {
                      setUsers(users.filter((user) => user.id !== u.id));
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

export default Users;
