import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";
import Step7 from "./Step7";

const Faq = () => {
  const [page, setPage] = useState(1);
  const Steps = {
    1: <Step1 setPage={setPage} />,
    2: <Step2 setPage={setPage} />,
    3: <Step3 setPage={setPage} />,
    4: <Step4 setPage={setPage} />,
    5: <Step5 setPage={setPage} />,
    6: <Step6 setPage={setPage} />,
    7: <Step7 setPage={setPage} />,
  };

  return Steps[page];
};
export default Faq;
