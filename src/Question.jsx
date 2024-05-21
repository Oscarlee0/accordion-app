import React from "react";
import SingleQuestion from "./SingleQuestion";

const Question = ({ questions, activeId, toggleQue }) => {
  return (
    <section>
      <h1>Questions</h1>
      {questions.map((question) => {
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQue={toggleQue}
          />
        );
      })}
    </section>
  );
};

export default Question;
