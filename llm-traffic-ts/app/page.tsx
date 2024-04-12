"use client"
import Image from "next/image";
import { FormEvent, useState } from "react";
import SearchComponent from "./components/search";
import ResponsesComponts from "./components/response";
import { ResponsesComponentProps } from "./components/types";



export default function Home() {
  const [responsesValue, setResponsesValue] = useState<ResponsesComponentProps["responsesValue"]>([
    { userQuestion: "", llmResonse: "你好，本模型是基于LLM+LangChain+交通少样本预测模型的交通助手，数据流转 promt -> LLM -> langchain -> sql -> 交通预测模型 -> 结果，例如：你好，请帮我预测一下郑州市市节点12上午8点的交通速度。"},
    { userQuestion: "你好，请帮我预测一下郑州市22号节点上午8点到下午2点的平均速度", llmResonse: "郑州市2号节点上午8点到下午2点的平均速度为61.8"},
    { userQuestion: "你好，请帮我预测一下郑州市12号节点上午8点的交通速度。", llmResonse: "根据你提供的 SQL 查询和结果，郑州市12号节点上午8点的预测交通速度为65.2"}
    
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
