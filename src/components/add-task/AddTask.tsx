import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import {Col, Form, Modal, Row} from "react-bootstrap";

const AddTask = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [title, setTitle] = useState("");
    const [status, setStatus] = useState("");
    const [deadline, setDeadline] = useState(new Date());

    return (
        <>
            <div className="mb-3 text-end">
                <button className="btn btn-success" onClick={() => setShow(true)}>
                    + Add Task
                </button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Task Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter task title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                autoFocus
                                data-testid="title"
                            />
                        </Form.Group>

                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextPassword"
                        >
                            <Form.Label column sm="4">
                                Deadline
                            </Form.Label>
                            <Col sm="5" data-testid="deadline">

                                <DatePicker
                                    selected={deadline}
                                    onChange={(date: Date) => setDeadline(date)}
                                    dateFormat="yyyy/MM/dd"
                                    filterDate={(date: Date) =>
                                        date.getDay() != 6 && date.getDay() != 0
                                    }
                                    isClearable
                                    showYearDropdown
                                    scrollableMonthYearDropdown

                                />
                            </Col>
                        </Form.Group>

                        <Form.Group
                            as={Row}
                            className="mb-3"
                            controlId="formPlaintextPassword"
                        >
                            <Form.Label column sm="4">
                                Status
                            </Form.Label>
                            <Col sm="6">
                                <select
                                    className="form-control"
                                    style={{appearance: "revert"}}
                                    required
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    data-testid="status"
                                >
                                    <option value={""}>Please select Status</option>
                                    <option value={"Done"}>Done</option>
                                    <option value={"Pending"}>Pending</option>
                                </select>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <button onClick={handleClose}>Close</button>
                    {/*<button onClick={saveTask} data-testid="submit">*/}
                    {/*    Save Changes*/}
                    {/*</button>*/}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddTask;