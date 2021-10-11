import React from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Example = (props) => {
  return (
    <Form>
      <FormGroup>
        <Label for="form_name">Form Name</Label>
        <Input type="text" name="form_name" id="form_name" />
      </FormGroup>

      <FormGroup>
        <Label for="form_description">Form Description</Label>
        <Input type="textarea" name="decription" id="form_description" />
      </FormGroup>

      <div className="vertical-align-middle">
        <FormGroup className="deneme d-flex align-items-center">
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" />

        <Label for="TypeSelect" className="name">Type Select</Label>
        <Input type="select" name="type_select" id="typeSelect">
          <option>STRING</option>
          <option>NUMBER</option>
        </Input>
      </FormGroup>

      <FormGroup className="deneme d-flex align-items-center">
        <Label for="surname" className="surname">Surname</Label>
        <Input type="text" name="surname" id="surname" />

        <Label for="TypeSelect">Type Select</Label>
        <Input type="select" name="type_select" id="typeSelect">
          <option>STRING</option>
          <option>NUMBER</option>
        </Input>
      </FormGroup>

      <FormGroup className="deneme d-flex align-items-center">
        <Label for="age" className="age">Age</Label>
        <Input type="text" name="age" id="age" />

        <Label for="TypeSelect">Type Select</Label>
        <Input type="select" name="type_select" id="typeSelect">
          <option>STRING</option>
          <option>NUMBER</option>
        </Input>
      </FormGroup>
      </div>

      
    </Form>
  );
};

export default Example;
