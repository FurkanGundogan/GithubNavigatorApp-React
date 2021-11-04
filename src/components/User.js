import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class User extends Component {
  
    render() {
        //this'i her yerde yazmamak için:
        const {login,avatar_url,html_url}=this.props.user;

        return (
                <div className="col-md-4 col-lg-3 col-sm-6 ">
                    <div className="card mt-2">                   
                        <img src={avatar_url} className="img-fluid" alt="" />                  
                            <div className="card-body">
                                <h5 className="card-title">{login}</h5>
                                <Link to={`/user/${login}`} className="btn btn-primary btn-sm"> Github Profile</Link>
                            </div>
                    </div>
                </div>
        )
    }   
}

export default User
