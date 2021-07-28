import { Table } from 'react-bootstrap'
import axios from 'axios'
import React from 'react'
import { Component, state } from 'react'

class Userlist extends Component {
    constructor(props) {
        super(props);
    
        this.replaceModalItem = this.replaceModalItem.bind(this);
        this.saveModalDetails = this.saveModalDetails.bind(this);
        this.state = {
            User: []
        }
      }
      replaceModalItem(index) {
        this.setState({
          requiredItem: index
        });
      }
    
      saveModalDetails(item) {
        const requiredItem = this.state.requiredItem;
        let tempbrochure = this.state.brochure;
        tempbrochure[requiredItem] = item;
        this.setState({ brochure: tempbrochure });
      }
    
      deleteItem(index) {
        let tempBrochure = this.state.brochure;
        tempBrochure.splice(index, 1);
        this.setState({ brochure: tempBrochure });
      }
    componentDidMount() {
        axios.get('http://localhost:90/user/showall')
            .then((response) => {
                console.log(response)
                this.setState({
                    User: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    render() {
        return (
            <div className='productview'>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Usertype</th>
                            <th> </th>
                        </tr>
                    </thead>

                    {this.state.User.map((User) => {
                        return (

                            <tbody>
                                <tr>
                                    <td>{User._id}</td>
                                    <td>{User.fullname}</td>
                                    <td>{User.email}</td>
                                    <td>{User.userType}</td>
                                    <td><button style={{width:"100px"}} size="sm">Update</button></td>
                                </tr>
                            </tbody>
                        )
                    })}
                </Table>
            </div>
        )
    }

}


export default Userlist