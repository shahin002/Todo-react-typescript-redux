import React, {useState} from 'react';
import Layout from "../components/layouts/Layout";
import TaskList from "../components/tasklist/TaskList";
import AddTask from "../components/add-task/AddTask";

const TaskListPage = () => {
    return (
        <Layout>
            <br/>
            <AddTask />
            <TaskList />
        </Layout>
    );
};

export default TaskListPage;