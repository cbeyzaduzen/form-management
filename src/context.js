import React from "react";

const FormContext = React.createContext();

export default function contextProvider() {
  return (
    <div>
      <FormContext.Provider>{this.props.children}</FormContext.Provider>
    </div>
  );
}


const FormConsumer=FormContext.Consumer;

export default FormConsumer;