import React, { useState, useEffect } from "react";
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

function Product({ darkMode }) {
  const { t } = useTranslation();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({ nom: "", categorie: "", stock: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      p.nom.toLowerCase().includes(search.toLowerCase()) ||
      p.categorie.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (form.nom && form.categorie && form.stock) {
      axios
        .post("http://localhost:8080/api/products", {
          nom: form.nom,
          categorie: form.categorie,
          stock: Number(form.stock),
        })
        .then((res) => {
          setProducts([...products, res.data]);
          setForm({ nom: "", categorie: "", stock: "" });
        })
        .catch((err) => console.error(err));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/api/products/${id}`)
      .then(() => {
        setProducts(products.filter((prod) => prod.id !== id));
      })
      .catch((err) => console.error(err));
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
                    onClick={() => handleDelete(p.id)}
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
