import {MainThankPage} from './StyledThankPage';
import { Navbar } from "../../components/Navbar/Navbar";
import { TitleMessage } from './components/TitleMessage/TitleSuccess';
import { ContentInfo } from './components/Content/ContentInfo';

export function ThankPage(){
    return (
      <>
        <Navbar visibleButton={false} />
        <MainThankPage>
          <TitleMessage/>
          <ContentInfo/>
        </MainThankPage>
      </>
    );
}