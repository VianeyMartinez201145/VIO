import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

function NavbarCategoryDropdown({ onCategoryChange }) {
  const handleCategoryChange = (category) => {
    onCategoryChange(category);
  };

  return (
    <NavDropdown title="Categoría" id="category">
      <NavDropdown.Item onClick={() => handleCategoryChange("liquid")}>
        Liquid
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => handleCategoryChange("Calzado")}>
        Calzado
      </NavDropdown.Item>
      {/* Agregar más opciones según tus categorías */}
    </NavDropdown>
  );
}

export default NavbarCategoryDropdown;
