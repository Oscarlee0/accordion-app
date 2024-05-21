import { useState } from "react";
import data from "./data";
import Question from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);
  const [activeId, setActiveId] = useState(null);

  const toggleQue = (id) => {
    const newActiveId = id === activeId ? null : id;
    return setActiveId(newActiveId);
  };

  return (
    <main>
      <div className='container'>
        <Question
          questions={questions}
          activeId={activeId}
          toggleQue={toggleQue}
        />
      </div>
    </main>
  );
};
export default App;
