import React from "react";

export default class UserInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userList: []
        }
        this.getUserList = this.getUserList.bind(this);
    }

    componentDidMount() {
        this.getUserList();
    }

    getUserList() {
        fetch("http://localhost:3001/users")
            .then(res => res.json())
            .then((data) => {
                console.log('userlist data---', data);
                this.setState({
                    userList: [...data]
                })
            })
    }

    render() {
        return (
            <div className="container">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Mobile Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.userList.map((element, index) => {
                            return (
                                <tr key={index}>
                                    <th>{element.id}</th>
                                    <th>{element.firstName}</th>
                                    <th>{element.lastName}</th>
                                    <th>{element.mobileNumber}</th>
                                    <th>{element.currentCourseName}</th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        )
    }

}