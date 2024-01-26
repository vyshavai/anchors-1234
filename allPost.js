// AllPost.js

import React from "react";
import '../styles/allPost.css'
import { FaPlusCircle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

function AllPost(){
    return(
        <div className="mainContainer">
            <div className="sideContainer">
                <Link to="getpostdata" className="linkStyles">
                <div className="container1"><p>All Post</p></div>
                </Link>
                <Link to="getcommentdata" className="linkStyles">
                <div className="container2"><p>Commented Post</p></div>
                </Link>
                <Link to="getreplieddata" className="linkStyles">
                <div className="container3"><p>Replied Post</p></div>
                </Link>
                <Link to="createuser" className="linkStyles">
                    <div className="container4">
                        <FaPlusCircle className="plusCircle" />
                        <p>Create Post</p>
                    </div>
                </Link>
            </div>
            <div className="contentContainer">
                <Outlet />
            </div>
        </div>
    )
}

export default AllPost;
