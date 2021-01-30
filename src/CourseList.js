import React from "react";

export default function CourseList({ clist, onEnquireClick }) {
  return (
    <div className="c1">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course Name</th>
            <th scope="col">Fees</th>
            <th scope="col">Enquire</th>
          </tr>
        </thead>
        <tbody>
          {clist.map((element, index) => {
            return (
              <tr key={index}>
                <th>{element.id}</th>
                <th>{element.name}</th>
                <th>{element.fees}</th>
                <th>
                  <button
                    onClick={() => {
                      onEnquireClick(element.name);
                    }}
                  >
                    Enquiry
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
