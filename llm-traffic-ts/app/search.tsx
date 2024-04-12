import React, { useState } from "react";
import SearchComponent from "./components/search";
import ResponsesComponts from "./components/response";
import { ResponsesComponentProps } from "./components/types";

const search = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [responsesValue, setResponsesValue] = useState<
    ResponsesComponentProps["responsesValue"]
  >([
    {
      userQuestion: "",
      llmResonse:
        "你好，本模型是基于LLM+LangChain+交通少样本预测模型的交通助手，promt -> LLM -> sql -> db -> 交通预测模型 -> 结果，例如：你好，请帮我预测一下PEMS4城市节点12上午8点的交通速度。",
    },
  ]);
  return (
    <>
      <SearchComponent
        reponsesValue={responsesValue}
        setReponsesValue={setResponsesValue}
      />
      <ResponsesComponts responsesValue={responsesValue} />
    </>
  );
};

export default search;
