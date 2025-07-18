import React from "react";
import {
  Box,
  Typography,
  Paper,
  Avatar,
  Button,
  TextField,
} from "@mui/material";

function Profile() {
  // Zdt dateInscription w numeroTel
  const [user, setUser] = React.useState({
    nom: "Adam",
    email: "adam@gmail.com",
    role: "Admin",
    avatar: "/path/to/avatar.jpg",
    numeroTel: "0612345678",
    dateInscription: "2024-07-18",
  });

  const [edit, setEdit] = React.useState(false);
  const [form, setForm] = React.useState({
    nom: user.nom,
    email: user.email,
    numeroTel: user.numeroTel,
  });

  const handleSave = () => {
    setUser({
      ...user,
      nom: form.nom,
      email: form.email,
      numeroTel: form.numeroTel,
    });
    setEdit(false);
  };

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, minWidth: 320, textAlign: "center" }}>
        <Avatar
          src={user.avatar}
          alt={user.nom}
          sx={{ width: 80, height: 80, margin: "0 auto 16px auto" }}
        />
        {edit ? (
          <>
            <TextField
              label="Nom"
              value={form.nom}
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Téléphone"
              value={form.numeroTel}
              onChange={(e) => setForm({ ...form, numeroTel: e.target.value })}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Typography color="primary" mb={2}>
              {user.role}
            </Typography>
            <Button variant="contained" onClick={handleSave} sx={{ mr: 1 }}>
              Sauvegarder
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => setEdit(false)}
            >
              Annuler
            </Button>
          </>
        ) : (
          <>
            <Typography variant="h6" mb={1}>
              {user.nom}
            </Typography>
            <Typography color="text.secondary" mb={1}>
              {user.email}
            </Typography>
            <Typography color="text.secondary" mb={1}>
              {user.numeroTel}
            </Typography>
            <Typography color="primary" mb={2}>
              {user.role}
            </Typography>
            <Typography color="text.secondary" mb={2}>
              Inscrit le : {user.dateInscription}
            </Typography>
            <Button variant="outlined" onClick={() => setEdit(true)}>
              Modifier Profil
            </Button>
          </>
        )}
      </Paper>
    </Box>
  );
}

export default Profile;
