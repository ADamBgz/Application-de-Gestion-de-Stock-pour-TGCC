import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      Produits: "Produits",
      Fournisseurs: "Fournisseurs",
      Catégories: "Catégories",
      Utilisateurs: "Utilisateurs",
      Dashboard: "Tableau de Bord",
      "Alertes Stock Faible": "Alertes Stock Faible",
      "Dernières Activités": "Dernières Activités",
    },
  },
  en: {
    translation: {
      Produits: "Products",
      Fournisseurs: "Suppliers",
      Catégories: "Categories",
      Utilisateurs: "Users",
      Dashboard: "Dashboard",
      "Alertes Stock Faible": "Low Stock Alerts",
      "Dernières Activités": "Recent Activities",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("langue") || "fr",
  interpolation: { escapeValue: false },
});

export default i18n;
