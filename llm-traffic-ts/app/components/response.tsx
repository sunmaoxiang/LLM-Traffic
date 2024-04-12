import React from "react";
import { ResponsesComponentProps } from "./types";


const ResponsesComponts = ({ responsesValue }: ResponsesComponentProps) => {

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {responsesValue && responsesValue.map((response, index) => (
        <div className="flex-grow p-4" key={index}>
          <div className="flex flex-col space-y-4">
            {/* 用户问题 */}
            {response.userQuestion && <div className="flex space-x-2  justify-end">
              <div className="flex items-end">
                <div className="bg-white rounded-lg p-4">
                    <img src="pig.jpg" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <p>User: {response.userQuestion}</p>
                </div>
              </div>
            </div>}
            {/* LLM回答 */}
            {response.llmResonse && <div className="flex space-x-2"> 
              <div className="flex items-end">
                <div className="bg-blue-500 text-white rounded-lg p-4">
                    <img src="llm-traffic.png" alt="Avatar" className="w-10 h-10 rounded-full" />
                  <p>LLM-Traffic: {response.llmResonse}</p>
                </div>
              </div>
            </div>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResponsesComponts;
