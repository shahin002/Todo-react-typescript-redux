import React, {useState} from 'react';
import Layout from "../components/layouts/Layout";
import {Modal} from "react-bootstrap";

const TaskListPage = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    return (
        <Layout>
            <br/>
            <Modal
                show={show}
                onHide={handleClose}
                animation={true}
                centered
            >
                {/*<AddTask handleClose={handleClose} setShow={setShow} />*/}
            </Modal>
            {/*<TaskLists tasks={tasks} handleShow={handleShow} />*/}
        </Layout>
    );
};

export default TaskListPage;