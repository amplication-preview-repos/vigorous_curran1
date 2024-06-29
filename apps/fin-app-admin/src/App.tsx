import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { FinancialDataList } from "./financialData/FinancialDataList";
import { FinancialDataCreate } from "./financialData/FinancialDataCreate";
import { FinancialDataEdit } from "./financialData/FinancialDataEdit";
import { FinancialDataShow } from "./financialData/FinancialDataShow";
import { ForecastList } from "./forecast/ForecastList";
import { ForecastCreate } from "./forecast/ForecastCreate";
import { ForecastEdit } from "./forecast/ForecastEdit";
import { ForecastShow } from "./forecast/ForecastShow";
import { RecommendationList } from "./recommendation/RecommendationList";
import { RecommendationCreate } from "./recommendation/RecommendationCreate";
import { RecommendationEdit } from "./recommendation/RecommendationEdit";
import { RecommendationShow } from "./recommendation/RecommendationShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"fin_app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="FinancialData"
          list={FinancialDataList}
          edit={FinancialDataEdit}
          create={FinancialDataCreate}
          show={FinancialDataShow}
        />
        <Resource
          name="Forecast"
          list={ForecastList}
          edit={ForecastEdit}
          create={ForecastCreate}
          show={ForecastShow}
        />
        <Resource
          name="Recommendation"
          list={RecommendationList}
          edit={RecommendationEdit}
          create={RecommendationCreate}
          show={RecommendationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
