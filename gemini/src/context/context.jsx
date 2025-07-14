import React, { createContext, useState } from 'react';
import main from '../config/gemini';
export const Context = createContext();


const ContextProvider = (props)=>{

    const [input, setInput]=useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt]=useState([]);
    const [showResult , setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");


    const delayPara=(index, nextWord)=>{
        setTimeout(function(){
            setResultData(prev=> prev + nextWord);
        },75*index)

    }
    const new_chat =()=>{
        setLoading(false);
        setShowResult(false);
    }


    const onSent = async (prompt)=>{
        setResultData("");
        setLoading(true);
        setShowResult(true)
        let response;
        if( prompt!== undefined){
            response = await main(prompt);
            setRecentPrompt(prompt);
        }else{
            setPrevPrompt(prev => [...prev, input]);
            setRecentPrompt(input);
            response = await main(input); 
        }
    //     setRecentPrompt(input)
    //     setPrevPrompt(prev => [...prev, input]);
    //    const response =  await main(input)
       let responseArray = response.split("**");
       let newrespons = "";
       for(let i=0; i<responseArray.length; i++){
        if(i===0||i%2 !==1){
        newrespons += responseArray[i];
        }
        else{
        newrespons += "<b>"+responseArray[i]+"</b>";
       }
       }
       let newrespons2 = newrespons.split("*").join("</b>");
       let newresponsArray = newrespons2.split("")
       for(let i=0; i<newresponsArray.length; i++){
        const nextWord = newresponsArray[i];
        delayPara(i, nextWord+"");
           }
       setResultData(newrespons);
         setLoading(false);
         setInput(""); 
    }
    // onSent("");

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        new_chat
    }
    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;
