import React, { useState, useEffect} from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";

const Example = (props) => {
  
  const [formName, setFormName] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");

  const handle = () => {
    localStorage.setItem("FormName", formName);
    localStorage.setItem("Description", description);
    localStorage.setItem("Name", name);
    localStorage.setItem("Surname", surname);
    localStorage.setItem("Age", age);
  };

  return (
    <Form>
      <FormGroup>
        <Label for="form_name">Form Name</Label>
        <Input
          type="text"
          name="form_name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label for="form_description">Form Description</Label>
        <Input
          type="textarea"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormGroup>

      <div className="vertical-align-middle">
        <FormGroup className="deneme d-flex align-items-center">
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
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
            value={surname}
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
            value={age}
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
  );
};

export default Example;
