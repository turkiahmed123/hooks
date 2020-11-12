import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./Add.css";
const AddMovie = (props) => {
  const { className, handleAdd } = props;
  const [newMovie, setNewMovie] = useState({
    id: Math.random(),
    image: "",
    rating: 1,
    name: "",
    date: "",
    type: "",
    description: "",
  });
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="theadd">
      <Button color="secondary" className="addMovie" onClick={toggle}>
        Add Movie
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <form>
            <label>Name</label>
            <input
              required
              name="name"
              type="text"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>rating</label>
            <input
              required
              name="rating"
              type="number"
              max="5"
              min="1"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>date</label>
            <input
              required
              name="date"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>image</label>
            <input
              required
              name="image"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>type</label>
            <input
              required
              name="type"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
            <label>description</label>
            <input
              required
              name="description"
              onChange={(e) =>
                setNewMovie({ ...newMovie, [e.target.name]: e.target.value })
              }
            />
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={(e) => {
              handleAdd(newMovie);
              toggle();
              setNewMovie({
                id: Math.random(),
                image: "",
                rating: 1,
                name: "",
                date: "",
                type: "",
                description: "",
              });
            }}
          >
            Save Movie
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default AddMovie;
