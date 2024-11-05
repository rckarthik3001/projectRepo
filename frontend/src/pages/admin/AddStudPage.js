import React from "react";
import AddStudent from '../../components/admin/AddStudent.js'
import {Routes,Route} from "react-router-dom";

import Sidebar from "../../components/admin/Sidebar.js";

const AddStdPage = () => {
    return (
      <div className="flex">
          <Sidebar />
          <AddStudent/>
      </div>
    );
  };
  

  export default AddStdPage;