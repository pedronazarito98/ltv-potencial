import { ContainerNavbar } from "./StyledNavbar";
import logoCinnecta from "../../assets/cinnecta_logo_horizontal_icone_rgb_gradiente.webp";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";
import { useScrollBar } from "../../hooks/useScrollBar/useScrollBar";

export function Navbar() {
  const { visible } = useScrollBar();

  return (
    <ContainerNavbar visible={visible}>
      <img src={logoCinnecta} alt="Logo_Cinnecta" loading="lazy" />
      <div>
        <Button />
      </div>
    </ContainerNavbar>
  );
}
