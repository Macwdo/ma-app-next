import MainPage from "@/components/main-page/main-page";
import LawsuitNav, { Status } from "./lawsuit-nav";
import LawsuitNavHeader from "./lawsuit-nav-header";



export interface LawsuitResponse {

}

const LawsuitPage = () => {

  return (
    <MainPage title="Processos">
      <div>
        <div className="mb-4">
          <LawsuitNavHeader/>
        </div>
        <div className="flex flex-col gap-4">
          <LawsuitNav
            adversePart="Alguma coisa"
            client="Pedro Augusto"
            createdAt="22 jun 2023"
            updatedAt="11 dez 2023"
            finishedAt="21 set 2023"
            lawsuitCode="2202139213222021392132"
            lawyer="Sandra Cristina"
            status={Status.Active}
          />
          <LawsuitNav
            adversePart="Alguma coisa coisa"
            client="Pedro Augusto"
            createdAt="22 jun 2023"
            updatedAt="11 dez 2023"
            finishedAt="21 set 2023"
            lawsuitCode="2202139213222021392132"
            lawyer="Sandra Cristina"
            status={Status.Waiting}
          />
          <LawsuitNav
            adversePart="Alguma"
            client="Pedro Augusto"
            createdAt="22 jun 2023"
            updatedAt="11 dez 2023"
            finishedAt="21 set 2023"
            lawsuitCode="2202139213222021392132"
            lawyer="Sandra Cristina"
            status={Status.Stopped}
          />
          <LawsuitNav
            adversePart="Alguma coisa"
            client="Pedro Augusto"
            createdAt="22 jun 2023"
            updatedAt="11 dez 2023"
            finishedAt="21 set 2023"
            lawsuitCode="2202139213222021392132"
            lawyer="Sandra Cristina"
            status={Status.Finished}
          />
        </div>
      </div>
    </MainPage>
  );
};

export default LawsuitPage;
