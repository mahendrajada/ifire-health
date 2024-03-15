import React, { useState } from "react";
import "quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import axios from "axios";

const TextEditor = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
        { align: [] },
      ],
      [
        {
          color: [
            "#000000",
            "#e60000",
            "#ff9900",
            "#ffff00",
            "#008a00",
            "#0066cc",
            "#9933ff",
            "#ffffff",
            "#facccc",
            "#ffebcc",
            "#ffffcc",
            "#cce8cc",
            "#cce0f5",
            "#ebd6ff",
            "#bbbbbb",
            "#f06666",
            "#ffc266",
            "#ffff66",
            "#66b966",
            "#66a3e0",
            "#c285ff",
            "#888888",
            "#a10000",
            "#b26b00",
            "#b2b200",
            "#006100",
            "#0047b2",
            "#6b24b2",
            "#444444",
            "#5c0000",
            "#663d00",
            "#666600",
            "#003700",
            "#002966",
            "#3d1466",
            "custom-color",
          ],
        },
      ],
    ],
  };

  const formats = [
    "header",
    "height",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "color",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "size",
  ];

  const handleProcedureContentChange = (content) => {
    setDescription(content);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Log submitted data
      console.log("Submitted Data:", {
        name,
        description,
      });

      // You can then send this data to your backend using axios
      const response = await axios.post("YOUR_API_ENDPOINT", {
        name,
        description,
      });
      console.log("Response:", response.data);

      // Clear form fields after successful submission
      setName("");
      setDescription("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Add Document</h1>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: "10px" }}
          />
          <ReactQuill
            theme="snow"
            modules={modules}
            formats={formats}
            placeholder="Write your content ..."
            onChange={handleProcedureContentChange}
            style={{ height: "220px", marginBottom: "10px" }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "rgb(0, 48, 91)",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              float: "right",
              marginTop:"50px",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-md-10">
    //       <h1 className="h3 mb-2 text-gray-800">Add Document</h1>
    //     </div>
    //     <div className="col-md-2">
    //       <a href="https://ifhir.clindcast.com/admin/document/list" className="btn btn-dark btn-icon-split">
    //         <span className="text">Back</span>
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card shadow mb-4">
    //     <div className="card-body">
    //       <div className="row">
    //         <div className="col-md-12">
    //           <div className="col-md-12">
    //             <form method="post" enctype="multipart/form-data">
    //               <input type="hidden" name="_token" value="i6BXjGFTGa2SjQafLx1GdV1GlFNQwGQ7jLNZz9IJ" />
    //               <div className="row mb-3">
    //                 <label className="col-sm-2 col-form-label required">Name</label>
    //                 <div className="col-sm-10">
    //                   <input type="text" name="name" placeholder="Name" className="form-control" required />
    //                 </div>
    //               </div>
    //               <div className="row mb-3">
    //                 <label className="col-sm-2 col-form-label">Description</label>
    //                 <div className="col-sm-10">
    //                   <textarea type="text" name="requirement" style={{ borderRadius: '8px', border: '2px solid', borderColor: '#c0c6cc' }} rows="30"></textarea>
    //                 </div>
    //               </div>
    //               <input type="submit" className="btn btn-primary" value="Save" />
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default TextEditor;
