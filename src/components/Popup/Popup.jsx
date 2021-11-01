import React, { useContext, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FormContext } from "../../context";

const Example = (props) => {
  const [form, setFormList] = useState([]);
  const [formName, setFormName] = useState("");
  const [description, setFormDescription] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const dispatchFormEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_FORM_UI":
        setFormList([...form, payload.newForm]);
        console.log("newForm",payload.newForm)
        console.log(form);
        return form;

      default:
        return;
    }
  };

  const handle = () => {
    const item = {
      FormName: name,
      Description: name,
      Name: name,
      Surname: name,
      Age: name,
    };

    setFormList([...form, item]);
    localStorage.setItem("item", JSON.stringify(form));
    localStorage.getItem("item");
    const formListItems = { formName, description, name, surname, age };
    const deneme = dispatchFormEvent("ADD_FORM_UI", { newForm: formListItems });
    console.log("formListItems", formListItems);
    console.log("deneme", deneme);
  };

  // const handleAddFormUI=()=>{
  //   const formListItems = { formName, description, name, surname, age };
  //   const deneme = dispatchFormEvent("ADD_FORM_UI", { newForm: formListItems });
  //   console.log("asdasd",deneme);
  // }

  return (
    <FormContext.Provider
      value={{
        form,
        formName,
        description,
        name,
        surname,
        age,
        dispatchFormEvent,
      }}
    >
      <Form>
        <FormGroup>
          <Label for="form_name">Form Name</Label>
          <Input
            type="text"
            name="formName"
            onChange={(e) => setFormName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label for="form_description">Form Description</Label>
          <Input
            type="textarea"
            name="description"
            onChange={(e) => setFormDescription(e.target.value)}
          />
        </FormGroup>

        <div className="vertical-align-middle">
          <FormGroup className="deneme d-flex align-items-center">
            <Label for="name">Name</Label>
            <Input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />

            <Label for="TypeSelect" className="name">
              Type Select
            </Label>
            <Input type="select" name="type_select">
              <option>STRING</option>
              <option>NUMBER</option>
            </Input>
          </FormGroup>

          <FormGroup className="deneme d-flex align-items-center">
            <Label for="surname" className="surname">
              Surname
            </Label>
            <Input
              type="text"
              name="surname"
              onChange={(e) => setSurname(e.target.value)}
            />

            <Label for="TypeSelect">Type Select</Label>
            <Input type="select" name="type_select" id="typeSelect">
              <option>STRING</option>
              <option>NUMBER</option>
            </Input>
          </FormGroup>

          <FormGroup className="deneme d-flex align-items-center">
            <Label for="age" className="age">
              Age
            </Label>
            <Input
              type="text"
              name="age"
              onChange={(e) => setAge(e.target.value)}
            />

            <Label for="TypeSelect">Type Select</Label>
            <Input type="select" name="type_select" id="typeSelect">
              <option>STRING</option>
              <option>NUMBER</option>
            </Input>
          </FormGroup>

          <Button onClick={handle}>Add</Button>
        </div>
      </Form>
    </FormContext.Provider>
  );
};

export default Example;
