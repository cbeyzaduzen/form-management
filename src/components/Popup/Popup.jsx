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

      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name" />
      </FormGroup>

      <FormGroup>
        <Label for="TypeSelect">Type Select</Label>
        <Input type="select" name="type_select" id="typeSelect">
          <option>STRING</option>
          <option>NUMBER</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="surname">Surname</Label>
        <Input type="text" name="surname" id="surname" />
      </FormGroup>
      <FormGroup>
        <Label for="TypeSelect">Type Select</Label>
        <Input type="select" name="type_select" id="typeSelect">
          <option>STRING</option>
          <option>NUMBER</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input type="text" name="age" id="age" />
      </FormGroup>
      <FormGroup>
        <Label for="TypeSelect">Type Select</Label>
        <Input type="select" name="type_select" id="typeSelect">
          <option>STRING</option>
          <option>NUMBER</option>
        </Input>
      </FormGroup>
    </Form>
  );
};

export default Example;
