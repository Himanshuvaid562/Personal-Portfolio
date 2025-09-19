import React from "react";

function ProjectFrame({file}) {
    return (
        <div style={{ width: "100%", height: "100vh", padding: "10px" }}>
           

            <iframe src={file} style={{ width: "100%", height: "90vh", border: "none", borderRadius: "10px" }}></iframe>

        </div>
    );
}

export default ProjectFrame;