"use client"
import Image from "next/image";
import { FormEvent, useState } from "react";
import SearchComponent from "./components/search";
import ResponsesComponts from "./components/response";
import { ResponsesComponentProps } from "./components/types";



export default function Home() {
  const [responsesValue, setResponsesValue] = useState<ResponsesComponentProps["responsesValue"]>([
    { userQuestion: "", llmResonse: "你好，本模型是基于LLM+LangChain+交通少样本预测模型的交通助手" }
  ]);  
  

  return (
    <>
    <div className="bg-green-400">
      <p className="text-center text-purple-700 font-bold text-lg">
        LLM-Traffic：When LLM Meets Traffic Prediction
      </p>
    </div>
    <SearchComponent reponsesValue={responsesValue} setReponsesValue={setResponsesValue}/>
    <ResponsesComponts responsesValue={responsesValue}/>
    </>
  );
}
