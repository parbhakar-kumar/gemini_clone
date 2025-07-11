
import main from '../config/gemini';
export const Context = createContext();

const ContextProvider = (props)=>{

    const onSent = async (prompt)=>{
        await main(prompt)
    }
    onSent("what is react js?");

    const contextVslue = {

    }
    return(
        <Context.Provider value={contextVslue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;