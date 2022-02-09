import React, { useEffect } from "react";
import Menu from "../../components/Menu";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import { useShop } from "../../context/shop";
import { FormatCurrency } from "../../utils/formatCurrency";

function Shop() {
  const { productsShop, setProductsShop } = useShop();

  useEffect(() => {
    const formatData = productsShop.map((prod) => {
      return { ...prod, valueFormatted: FormatCurrency(prod.value) };
    });
    setProductsShop(formatData);
  }, []);

  return (
    <>
      <Menu />
      <div>
        <Typography variant="h5" component="h2">
          Sua Sacola
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Valor Unitário</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productsShop.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.title}</TableCell>
                <TableCell align="right">{product.valueFormatted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default Shop;
