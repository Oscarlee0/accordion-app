import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const SingleQuestion = ({ id, title, info, activeId, toggleQue }) => {
  //   const [show, setShow] = useState(false);
  const isActive = id === activeId;

  return (
    <article className='question'>
      <header>
        <h5>{title}</h5>
        <button
          className='question-btn'
          type='button'
          //   onClick={() => setShow(!show)}
          onClick={() => toggleQue(id)}
        >
          {/* {show ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
          {isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {/* <p>{show ? info : info.substring(0, 0)}</p> */}
      <p>{isActive ? info : info.substring(0, 0)}</p>
    </article>
  );
};

export default SingleQuestion;
