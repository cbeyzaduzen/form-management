import { createContext } from "react";

export const FormContext = createContext();

const ContextProvider=(props)=>{

  return (
    <div>
      <FormContext.Provider
      >{props.children}
      </FormContext.Provider>
    </div>
  );
};

const FormConsumer = FormContext.Consumer;

export default FormConsumer;
