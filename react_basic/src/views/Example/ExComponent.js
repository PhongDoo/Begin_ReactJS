import React from "react";
import ChildExComponent from "./ChildExComponent";

class ExComponent extends React.Component {

    state = {
        fisrtName: '',
        lastName: '',
        listJobs: [
            {
                id: "job1",
                position: "Dev",
                salary: "1000 $",
            },
            {
                id: "job2",
                position: "Tester",
                salary: "2000 $",
            },
            {
                id: "job3",
                position: "PM",
                salary: "3000 $",
            },
        ],
    }

    handleOnChangeFName = (event) => {
        this.setState({
            fisrtName: event.target.value,
        })
    }

    handleOnChangeLName = (event) => {
        this.setState({
            lastName: event.target.value,
        })
    }

    handleClickSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <>
                <div>
                    <form action="/action_page.php" id="formDemo">
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text" id="fname" value={this.state.fisrtName} onChange={(event) => {
                            this.handleOnChangeFName(event);
                        }} />
                        <br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text" id="lname" value={this.state.lastName} onChange={(event) => {
                            this.handleOnChangeLName(event);
                        }} /><br /><br />
                        <input type="submit" value="Submit" onClick={(event) => {
                            this.handleClickSubmit(event);
                        }} />
                    </form>
                </div>
                <div>
                    <ChildExComponent
                        listJobs={this.state.listJobs}
                    />
                </div>



            </>
        )
    }
}

export default ExComponent;