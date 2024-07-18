// import { createContext } from "react";
// import runChat from "../config/gemini";

// export const Context=createContext();
// const ContextProvider=(props)=>{

//     const onSent=async(prompt)=>{
//         await runChat(prompt)
//     }

//     onSent("What is react js");
//     const contextValue={

//     }
//     return(
//         <Context.Provider value={contextValue}>

//         </Context.Provider>
//     )
// } 
// export default ContextProvider
import React, { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [response, setResponse] = useState("");

  const onSet = async (prompt) => {
    try {
      const result = await runChat(prompt);
      setResponse(result);
    } catch (error) {
      console.error("Failed to fetch data from the AI API. Please try again later.", error);
    }
  };

  onSet("What is react js");

  const contextValue = {
    response,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
