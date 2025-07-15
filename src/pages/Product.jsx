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

function Product() {
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
      <Typography variant="h5" mb={2}>
        Gestion des Articles
      </Typography>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="subtitle1" mb={1}>
          Ajouter / Modifier Article
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <TextField
            label="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
          />
          <TextField
            label="Catégorie"
            value={form.categorie}
            onChange={(e) => setForm({ ...form, categorie: e.target.value })}
          />
          <TextField
            label="Stock"
            type="number"
            value={form.stock}
            onChange={(e) => setForm({ ...form, stock: e.target.value })}
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
              <TableCell>Catégorie</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Action</TableCell> {/* Zdt l-action */}
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

export default Product;
