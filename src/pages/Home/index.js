import React from "react";
import { useHistory } from "react-router-dom";

import { BackButton } from "../../components/BackButtom";

const Home = () => {
  const history = useHistory();

  const handleBack = () => history.goBack();

  return (
    <div>
      <BackButton pageTitle="testando" handleBack={handleBack} />
    </div>
  );
};

export default Home;
