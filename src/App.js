import React, { useState, useContext } from "react";
import { Container, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Popup from "./components/Popup/Popup";
import { FormContext } from "./context";

const App = (props) => {
  const forms = useContext(FormContext);
  console.log("props.forms", props.forms);

  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const item = {
    item: JSON.parse(localStorage.getItem("item")),
  };

  return (
    <Container>
      <div className="pt-2">
        <div className="header_search d-flex justify-content-between ">
          {/* <SearchIcon /> */}
          <input placeholder="Search" type="text"></input>

          <Button color="danger" onClick={toggle}>
            <Modal isOpen={modal} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>Modal title</ModalHeader>
              <ModalBody>
                <Popup></Popup>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={toggle}>
                  Submit
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button> */}
              </ModalFooter>
            </Modal>
            +
          </Button>
        </div>

        <Table>
          <thead>
            <tr>
              <th>Form Name</th>
              <th>Description</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
           {/* {forms.map((items, index) => {
              return (
                <tr>
                  <th scope="row" key={index}>1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>Mark</td>
                  <td>Otto</td>
                </tr>
              );
            })} */}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default App;
