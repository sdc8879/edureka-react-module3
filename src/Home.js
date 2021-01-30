import React from "react";
import CourseList from "./CourseList";
import EnquiryForm from "./EnquiryForm";
import data from "./db.json";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseList: [],
      enableForm: false,
      enquiryFormdata: {
        currentCourseName: "",
        firstName: "",
        lastName: "",
        mobileNumber: ""
      }
    };
    this.clickEnquiry = this.clickEnquiry.bind(this);
    this.enquiryFormHandleChange = this.enquiryFormHandleChange.bind(this);
    this.onEnquiryFormSubmit = this.onEnquiryFormSubmit.bind(this);
    this.getCourseList = this.getCourseList.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  componentDidMount() {
    this.getCourseList();
  }

  isEmpty(data) {
    if (data !== null && data !== '' && data !== undefined) {
      console.log('abc')
      return true;
    }
    return false;
  }

  getCourseList() {
    let url = "http://localhost:3001/courses";
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        this.setState({ courseList: [...data] })
      })
      .catch(console.log)
  }

  clickEnquiry(value) {
    this.setState({
      enableForm: true,
      enquiryFormdata: {
        currentCourseName: value
      }
    });
  }

  enquiryFormHandleChange(event) {
    this.setState({
      enquiryFormdata: {
        ...this.state.enquiryFormdata,
        [event.target.name]: event.target.value || ""
      }
    });
    event.preventDefault();
  }
  onEnquiryFormSubmit(event) {
    if (this.isEmpty(this.state.enquiryFormdata.currentCourseName) && this.isEmpty(this.state.enquiryFormdata.firstName) && this.isEmpty(this.state.enquiryFormdata.lastName) && this.isEmpty(this.state.enquiryFormdata.mobileNumber)) {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.enquiryFormdata)
      }).then(res => res.json())
        .then((data) => {
          this.clickEnquiry(data.currentCourseName)
          event.preventDefault();
        })
    }
    event.preventDefault();
  }

  render() {
    let formDiv;
    if (this.state.enableForm) {
      formDiv = (
        <EnquiryForm
          enquiryFormState={this.state.enquiryFormdata}
          enquiryFormInputChange={this.enquiryFormHandleChange}
          onEnquirySubmit={this.onEnquiryFormSubmit}
        ></EnquiryForm>
      );
    }
    return (
      <div className="container">
        
        <CourseList
          clist={this.state.courseList}
          onEnquireClick={this.clickEnquiry}
        ></CourseList>
        {formDiv}
      </div>
    );
  }
}
