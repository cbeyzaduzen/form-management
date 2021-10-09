import React, { useState } from "react";
import { Container, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Popup from "./components/Popup/Popup";

const App = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
                <Button color="primary" onClick={toggle}>
                  Submit
                </Button>{" "}
                <Button color="secondary" onClick={toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
            +
          </Button>
        </div>

        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Ad</th>
              <th>Soyad</th>
              <th>Yaş</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default App;
