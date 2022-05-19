import { ContainerNavbar } from "./StyledNavbar";
import { useModal } from "../../hooks/useModal/useModal";
import { useScrollBar } from "../../hooks/useScrollBar/useScrollBar";
import logoCinnecta from "../../assets/cinnecta_logo_horizontal_icone_rgb_gradiente.webp";
import { ModalForm } from "../ModalForm/ModalForm";

interface NavbarProps{
  visibleButton?:boolean;
}

export function Navbar({ visibleButton = true }: NavbarProps) {
  const { visible } = useScrollBar();
  const { isOpen, onChangeModal } = useModal();

  return (
    <ContainerNavbar visible={visible} visibleButton={visibleButton}>
      <a href="/">
        <img src={logoCinnecta} alt="Logo_Cinnecta" loading="lazy" />
      </a>
      {visibleButton && (
        <div>
          <ModalForm
            onOpen={isOpen}
            onClick={onChangeModal}
            isClose={onChangeModal}
          />
        </div>
      )}
    </ContainerNavbar>
  );
}
