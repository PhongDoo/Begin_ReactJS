import React from "react";

class ChildExComponent extends React.Component {

    state = {
        status: false,
    }

    handleShowHide = () => {
        this.setState({
            status: !this.state.status,
        })
    }

    render() {

        let { listJobs } = this.props;
        let { status } = this.state;

        return (
            <>
                {status ?
                    <div>
                        <button className="show" onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="jobList">
                            {
                                listJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.position} - {item.salary}
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button className="hide" onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default ChildExComponent;