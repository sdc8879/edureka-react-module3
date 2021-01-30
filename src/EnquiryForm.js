import React from "react";
export default function EnquiryForm({
  enquiryFormState,
  enquiryFormInputChange,
  onEnquirySubmit
}) {
  return (
    <form>
      <div className="form-group">
        <label>Course Name</label>
        <input
          type="text"
          readOnly
          className="form-control"
          value={enquiryFormState.currentCourseName}
          name="courseName"
          id="courseName"
        />
      </div>
      <div className="form-group">
        <label>First Name</label>
        <input
          type="text"
          className="form-control"
          onChange={enquiryFormInputChange}
          value={enquiryFormState.firstName || ""}
          name="firstName"
          id="firstName"
          placeholder="Enter First Name"
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          type="text"
          className="form-control"
          onChange={enquiryFormInputChange}
          value={enquiryFormState.lastName || ""}
          name="lastName"
          id="lastName"
          placeholder="Enter Last Name"
        />
      </div>
      <div className="form-group">
        <label>Mobile Number</label>
        <input
          type="text"
          className="form-control"
          onChange={enquiryFormInputChange}
          value={enquiryFormState.mobileNumber || ""}
          name="mobileNumber"
          id="mobileNumber"
          placeholder="Enter Mobile Number"
        />
      </div>
      <div className="form-group">
        <button
          type="btn"
          className="btn btn-primary"
          onClick={(e) => {
            onEnquirySubmit(e);
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
