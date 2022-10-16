import React from 'react';
import {Button, Table} from "react-bootstrap";

const TaskList = () => {

    const tasks = [{
        id: "94djuehiry985G7UUpyL",
        todo: {
            createdAt: "2020-10-10T12:00:00.000Z",
            deadline: "2022-10-18",
            status: "Pending",
            title: "Test task 1",
            userEmail: "mdshahin0002@gmail.com"
        }
    }
    ]
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th colSpan="5"><h1 className="text-center">My Todos</h1></th>
            </tr>
            <tr>
                <th>No</th>
                <th>Task Title</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Action</th>
            </tr>
            </thead>
            {tasks?.length === 0 && (
                <h3 style={{marginLeft: "300px"}}>
                    Sorry!!! You have no todo.........
                </h3>
            )}
            <tbody>
            {tasks?.map((task, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{task.todo.title}</td>

                    <td>
                        {/*{overdueCheck(task.todo.deadline, task.todo.status) ? (*/}
                        {/*    <span style={{color: "red"}}>{task.todo.deadline}</span>*/}
                        {/*) : (*/}
                        {/*    <span>{task.todo.deadline}</span>*/}
                        {/*)}*/}
                        shahin
                    </td>
                    <td>
                        {task.todo.status === "Pending" && task.todo.status}
                        {task.todo.status === "Done" && <del>{task.todo.status}</del>}
                    </td>

                    <td>
                        <Button
                            className="fa fa-pencil btn btn-success pointer me-2"
                            // onClick={() => editUser(task)}
                        >
                            {" "}
                            Edit
                        </Button>

                        <Button
                            className="fa fa-trash btn btn-danger pointer ml-2"
                            // onClick={() => dispatch(deleteTasksDataAction(task.id))}
                        >
                            {" "}
                            Delete
                        </Button>
                    </td>
                </tr>
            ))}
            </tbody>
        </Table>

    );
};

export default TaskList;