import { MainSuccessPage } from "./StyledSuccessPage";
import { Navbar } from "../../components/Navbar/Navbar";
import { MoreInfo } from "./components/MoreInfo/MoreInfo";
import { TitleSuccess } from "./components/TitleSuccess/TitleSuccess";

export function SuccessPage() {
  return (
    <>
      <Navbar visibleButton={false} />
      <MainSuccessPage>
        <TitleSuccess />
        <MoreInfo />
      </MainSuccessPage>
    </>
  );
}
