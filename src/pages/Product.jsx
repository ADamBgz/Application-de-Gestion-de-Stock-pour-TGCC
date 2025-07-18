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

function Product({ darkMode }) {
  const { t } = useTranslation(); // Ajout
  const [products, setProducts] = React.useState([
    { id: 1, nom: "Souris sans fil", categorie: "Accessoires", stock: 15 },
    { id: 2, nom: "Clavier mécanique", categorie: "Accessoires", stock: 8 },
    { id: 3, nom: "Câble HDMI 2m", categorie: "Câbles", stock: 3 },
  ]);
  const [search, setSearch] = React.useState("");
  const [form, setForm] = React.useState({ nom: "", categorie: "", stock: "" });

  // Filtre
  const filteredProducts = products.filter(
    (p) =>
      p.nom.toLowerCase().includes(search.toLowerCase()) ||
      p.categorie.toLowerCase().includes(search.toLowerCase())
  );

  // Ajout produit
  const handleAdd = () => {
    if (form.nom && form.categorie && form.stock) {
      setProducts([
        ...products,
        {
          id: products.length + 1,
          nom: form.nom,
          categorie: form.categorie,
          stock: Number(form.stock),
        },
      ]);
      setForm({ nom: "", categorie: "", stock: "" });
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2} sx={{ color: "#23232a" }}>
        {t("products.title")}
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" mb={1}>
          {t("products.addEdit")}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label={t("products.name")}
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <TextField
            label={t("products.category")}
            value={form.categorie}
            onChange={(e) => setForm({ ...form, categorie: e.target.value })}
          />
          <TextField
            label={t("products.stock")}
            type="number"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
          />
          <Button variant="contained" onClick={handleAdd}>
            {t("products.add")}
          </Button>
        </Box>
      </Paper>
      <TextField
        label={t("products.search")}
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
              <TableCell>{t("products.name")}</TableCell>
              <TableCell>{t("products.category")}</TableCell>
              <TableCell>{t("products.stock")}</TableCell>
              <TableCell>{t("products.action")}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.map((p) => (
              <TableRow key={p.id}>
                <TableCell>{p.nom}</TableCell>
                <TableCell>{p.categorie}</TableCell>
                <TableCell>{p.stock}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="error"
                    size="small"
                    onClick={() => {
                      setProducts(products.filter((prod) => prod.id !== p.id));
                    }}
                  >
                    {t("products.delete")}
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

export default Product;
