import { useState } from "react";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Step4 } from "./Step4";
import { Step5 } from "./Step5";
import { Step6 } from "./Step6";
import { Step7 } from "./Step7";

const Faq = () => {
  const [page, setPage] = useState(1);
  const firstPage = () => {
    setPage(1);
  };
  const Steps = {
    1: <Step1 setPage={setPage} />,
    2: <Step2 firstPage={firstPage} />,
    3: <Step3 firstPage={firstPage} />,
    4: <Step4 firstPage={firstPage} />,
    5: <Step5 firstPage={firstPage} />,
    6: <Step6 firstPage={firstPage} />,
    7: <Step7 firstPage={firstPage} />,
  };

  return Steps[page];
};
export default Faq;
