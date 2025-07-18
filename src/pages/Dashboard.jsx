import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  useTheme,
  Select,
  MenuItem,
} from "@mui/material";
import {
  Inventory as InventoryIcon,
  LocalShipping as SuppliersIcon,
  Category as CategoriesIcon,
  People as UsersIcon,
  BarChart as StatsIcon,
  TrendingUp as TrendingIcon,
  Warning as AlertIcon,
} from "@mui/icons-material";
import "./Dashboard.css";
import StockChart from "../components/StockChart";
import { useTranslation } from "react-i18next";

// Fonctionnalités clés de ce dashboard :
// Vue d'ensemble avec KPI :

// Cartes visuelles pour produits, fournisseurs, catégories et utilisateurs

// Indicateurs de tendance (hausse/baisse)

// Graphique des mouvements :

// Espace dédié pour visualiser les entrées/sorties

// À intégrer avec Chart.js ou autre librairie

// Alertes stock faible :

// Liste des produits sous le seuil critique

// Design visuel avec icône d'avertissement

// Dernières activités :

// Section pour journal des actions récentes

// Design moderne :

// Cartes avec effets hover

// Couleurs cohérentes avec votre thème

// Responsive pour mobile

// Composant de carte de statistique
const StatCard = ({ icon, title, value, change }) => {
  const theme = useTheme();
  const isPositive = change >= 0;

  return (
    <Paper elevation={3} className="stat-card">
      <Box className="stat-icon-container">
        {React.cloneElement(icon, { className: "stat-icon" })}
      </Box>
      <Typography
        variant="h6"
        className="stat-title"
        sx={{ color: "text.primary" }}
      >
        {title}
      </Typography>
      <Typography
        variant="h4"
        className="stat-value"
        sx={{ color: "text.primary" }}
      >
        {value}
      </Typography>
      <Box className={`stat-change ${isPositive ? "positive" : "negative"}`}>
        <TrendingIcon fontSize="small" />
        <Typography variant="body2">
          {change}% {isPositive ? "↑" : "↓"} vs mois dernier
        </Typography>
      </Box>
    </Paper>
  );
};

// Composant d'alerte stock faible
const StockAlert = ({ product, remaining, threshold }) => {
  return (
    <Paper elevation={2} className="alert-item">
      <AlertIcon color="warning" />
      <Box className="alert-details">
        <Typography variant="subtitle1">{product}</Typography>
        <Typography variant="body2">
          Stock restant: {remaining} (Seuil: {threshold})
        </Typography>
      </Box>
    </Paper>
  );
};

function Dashboard() {
  const { t } = useTranslation();

  // Données simulées - À remplacer par vos données réelles
  const statsData = [
    { icon: <InventoryIcon />, title: t("Produits"), value: 245, change: 12 },
    { icon: <SuppliersIcon />, title: t("Fournisseurs"), value: 32, change: 5 },
    { icon: <CategoriesIcon />, title: t("Catégories"), value: 15, change: 0 },
    { icon: <UsersIcon />, title: t("Utilisateurs"), value: 8, change: 14 },
  ];

  const alertsData = [
    { product: "Câble HDMI 2m", remaining: 3, threshold: 10 },
    { product: "Souris sans fil", remaining: 5, threshold: 15 },
    { product: "Clavier mécanique", remaining: 2, threshold: 8 },
  ];

  const activitiesData = [
    {
      user: "Adam",
      action: "Zad produit: Souris sans fil",
      date: "15/07/2025 10:30",
    },
    {
      user: "Sara",
      action: "Na9sat stock: Câble HDMI 2m",
      date: "15/07/2025 09:50",
    },
    {
      user: "Yassine",
      action: "Tbadlat catégorie: Clavier mécanique",
      date: "14/07/2025 17:20",
    },
  ];

  const [period, setPeriod] = React.useState(30);

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <Box className="dashboard-container">
      <Typography variant="h4" className="dashboard-title">
        {t("Dashboard")}
      </Typography>

      {/* Section Statistiques */}
      <Grid container spacing={3} className="stats-grid">
        {statsData.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      {/* Section Principale */}
      <Grid container spacing={3} className="main-grid">
        {/* Graphique des mouvements */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} className="chart-container">
            <Box className="chart-header">
              <Typography variant="h6">
                Mouvements de stock ({period} jours)
              </Typography>
              <StatsIcon className="chart-icon" />
              <Select
                value={period}
                onChange={handlePeriodChange}
                size="small"
                sx={{ ml: 2 }}
              >
                <MenuItem value={7}>7 jours</MenuItem>
                <MenuItem value={30}>30 jours</MenuItem>
                <MenuItem value={90}>90 jours</MenuItem>
              </Select>
            </Box>
            <Box className="chart-placeholder">
              <StockChart period={period} />
              <Typography variant="body1" className="chart-message">
                Graphique des entrées/sorties de stock
              </Typography>
            </Box>
          </Paper>
        </Grid>

        {/* Alertes Stock */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} className="alerts-container">
            <Box className="alerts-header">
              <Typography variant="h6">{t("Alertes Stock Faible")}</Typography>
              <AlertIcon className="alerts-icon" />
            </Box>
            <Box className="alerts-list">
              {alertsData.map((alert, index) => (
                <StockAlert key={index} {...alert} />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Dernières Activités */}
      <Paper elevation={3} className="activity-container">
        <Typography variant="h6">{t("Dernières Activités")}</Typography>
        <Box>
          {activitiesData.map((activity, index) => (
            <Box key={index} className="activity-item">
              <Typography
                className="activity-user"
                sx={{ color: "text.primary" }}
              >
                {activity.user}
              </Typography>
              <Typography
                className="activity-action"
                sx={{ color: "text.primary" }}
              >
                {activity.action}
              </Typography>
              <Typography
                className="activity-date"
                sx={{ color: "text.secondary" }}
              >
                {activity.date}
              </Typography>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  );
}

export default Dashboard;
