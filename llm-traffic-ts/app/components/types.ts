export interface ResponsesComponentProps {
    responsesValue: { userQuestion: string; llmResonse: string }[];
}
export interface SearchComponentProps {
    reponsesValue: { userQuestion: string; llmResonse: string }[]
    setReponsesValue: (value: { userQuestion: string; llmResonse: string }[]) => void;
}