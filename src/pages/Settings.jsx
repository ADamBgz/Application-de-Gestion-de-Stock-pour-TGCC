import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Switch,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useTranslation } from "react-i18next";

function Settings({ darkMode, setDarkMode }) {
  const { t, i18n } = useTranslation(); // S7i7: khass t w i18n
  const [langue, setLangue] = React.useState(
    localStorage.getItem("langue") || "fr"
  );
  const [password, setPassword] = React.useState("");

  const handleSave = () => {
    localStorage.setItem("darkMode", darkMode);
    localStorage.setItem("langue", langue);
    i18n.changeLanguage(langue); // tbdel langue direct
    alert("Paramètres enregistrés !");
  };

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 4, minWidth: 320 }}>
        <Typography variant="h5" mb={2}>
          {t("settings.title")}
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode((prev) => !prev)}
            />
          }
          label={t("settings.darkMode")}
        />
        <TextField
          select
          label={t("settings.language")}
          value={langue}
          onChange={(e) => setLangue(e.target.value)}
          SelectProps={{ native: true }}
          fullWidth
          sx={{ my: 2 }}
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </TextField>
        <TextField
          label={t("settings.newPassword")}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={handleSave}>
          {t("settings.save")}
        </Button>
      </Paper>
    </Box>
  );
}

export default Settings;
