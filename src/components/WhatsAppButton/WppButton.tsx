import { StyledWppButton } from "./StyledWppButton";
import { FaWhatsapp } from "react-icons/fa";
export function WhatsAppButton() {
  return (
    <StyledWppButton
      href="https://api.whatsapp.com/send?phone=5531999702919&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Cinnecta%20LTV."
      rel="noopener noreferrer"
      target="_blank"
    >
      <FaWhatsapp size={40} />
    </StyledWppButton>
  );
}
