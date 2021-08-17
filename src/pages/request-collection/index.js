import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const RequestCollect = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage((previousPage) => previousPage + 1);
  };
  const firstPage = () => {
    setPage(1);
  };
  const backPage = () => {
    setPage((actualPage) => actualPage - 1);
  };

  const Steps = {
    1: <Step1 nextPage={nextPage} />,
    2: <Step2 backPage={backPage} firstPage={firstPage} nextPage={nextPage} />,
    3: <Step3 backPage={backPage} nextPage={nextPage} />,
    4: <Step4 backPage={backPage} firstPage={firstPage} nextPage={nextPage} />,
    5: <Step5 backPage={backPage} nextPage={nextPage} />,
  };

  return Steps[page];
};
export default RequestCollect;
