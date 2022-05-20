import { StyledFooter, WrapperIcons } from "./StyledFooter";
import {AiFillFacebook,AiFillLinkedin} from 'react-icons/ai'

export function Footer(){
    return (
      <StyledFooter>
        <span>
          Cinnecta &copy; {new Date().getFullYear()} • Todos os direitos reservados
        </span>

        <WrapperIcons>
          <a href="https://www.facebook.com/cinnecta">
            <AiFillFacebook />
          </a>
          <a href="https://www.linkedin.com/company/cinnecta/mycompany/">
            <AiFillLinkedin />
          </a>
        </WrapperIcons>
      </StyledFooter>
    );
}