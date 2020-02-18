import React from 'react';
import './Styles.css'
//import  './userScript';
import $ from 'jquery';
window.$= $;


window.$(document).ready(function() {
    var panels = window.$('.user-infos');
    var panelsButton = window.$('.dropdown-user');
    panels.hide();

    //Click dropdown
    panelsButton.click(function() {
        //get data-for attribute
        var dataFor = window.$(this).attr('data-for');
        var idFor = window.$(dataFor);

        //current button
        var currentButton = window.$(this);
        idFor.slideToggle(400, function() {
            //Completed slidetoggle
            if(idFor.is(':visible'))
            {
                currentButton.html('<i class="icon-chevron-up text-muted"></i>');
            }
            else
            {
                currentButton.html('<i class="icon-chevron-down text-muted"></i>');
            }
        })
    });


    //window.$('[data-toggle="tooltip"]').tooltip();
    //window.$('[data-toggle="tooltip"]');

    window.$('button').click(function(e) {
        e.preventDefault();
        alert("This is a demo.\n :-)");
    });
});

const UserDetails = ()=>{


    return(
<div className="container">
 <div className="well span8 offset2">
        <div className="row-fluid user-row">
            <div className="span1">
                <img className="img-circle"
                     src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=50"
                     alt="User Pic" />
            </div>
            <div className="span10">
                <strong>Cyruxx</strong><br/>
                <span className="text-muted">User level: Administrator</span>
            </div>
            <div className="span1 dropdown-user" data-for=".cyruxx">
                <i className="icon-chevron-down text-muted"></i>
            </div>
        </div>
        <div className="row-fluid user-infos cyruxx">
            <div className="span10 offset1">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">User information</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row-fluid">
                            <div className="span3">
                                <img className="img-circle"
                                     src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=100"
                                     alt="User Pic" />
                            </div>
                            <div className="span6">
                                <strong>Cyruxx</strong><br/>
                                <table className="table table-condensed table-responsive table-user-information">
                                    <tbody>
                                    <tr>
                                        <td>User level:</td>
                                        <td>Administrator</td>
                                    </tr>
                                    <tr>
                                        <td>Registered since:</td>
                                        <td>11/12/2013</td>
                                    </tr>
                                    <tr>
                                        <td>Topics</td>
                                        <td>15</td>
                                    </tr>
                                    <tr>
                                        <td>Warnings</td>
                                        <td>0</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <button className="btn  btn-primary" type="button"
                                data-toggle="tooltip"
                                data-original-title="Send message to user"><i className="icon-envelope icon-white"></i></button>
                        <span className="pull-right">
                            <button className="btn btn-warning" type="button"
                                    data-toggle="tooltip"
                                    data-original-title="Edit this user"><i className="icon-edit icon-white"></i></button>
                            <button className="btn btn-danger" type="button"
                                    data-toggle="tooltip"
                                    data-original-title="Remove this user"><i className="icon-remove icon-white"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        </div>


        <div className="row-fluid user-row">
            <div className="span1">
                <img className="img-circle"
                     src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=50"
                     alt="User Pic" />
            </div>
            <div className="span10">
                <strong>Nibbler</strong><br/>
                <span className="text-muted">User level: Moderator</span>
            </div>
            <div className="span1 dropdown-user" data-for=".alexanderMahrt">
                <i style={{backgroundColor:"white"}} className="icon-chevron-down text-muted"></i>
            </div>
        </div>
        <div className="row-fluid user-infos alexanderMahrt">
            <div className="span10 offset1">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">User information</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row-fluid">
                            <div className="span3">
                                <img className="img-circle"
                                     src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=100"
                                     alt="User Pic" />
                            </div>
                            <div className="span6">
                                <strong>Alexander Mahrt</strong><br/>
                                <table className="table table-condensed table-responsive table-user-information">
                                    <tbody>
                                        <tr>
                                            <td>User level:</td>
                                            <td>Moderator</td>
                                        </tr>
                                        <tr>
                                            <td>Registered since:</td>
                                            <td>11/12/2013</td>
                                        </tr>
                                        <tr>
                                            <td>Topics</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td>Warnings</td>
                                            <td>0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-primary" type="button"
                                data-toggle="tooltip"
                                data-original-title="Send message to user"><i className="icon-envelope icon-white"></i></button>
                        <span className="pull-right">
                            <button className="btn btn-warning" type="button"
                                    data-toggle="tooltip"
                                    data-original-title="Edit this user"><i className="icon-edit icon-white"></i></button>
                            <button className="btn btn-danger" type="button"
                                    data-toggle="tooltip"
                                    data-original-title="Remove this user"><i className="icon-remove icon-white"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div className="row-fluid user-row">
            <div className="span1">
                <img className="img-circle"
                     src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=50"
                     alt="User Pic" />
            </div>
            <div className="span10">
                <strong>MyUsername</strong><br/>
                <span className="text-muted">User level: Registered user</span>
            </div>
            <div className="span1 dropdown-user" data-for=".myUsername">
                <i className="icon-chevron-down text-muted"></i>
            </div>
        </div>
        <div className="row-fluid user-infos myUsername">
            <div className="span10 offset1">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">User information</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row-fluid">
                            <div className="span3">
                                <img className="img-circle"
                                     src="https://lh5.googleusercontent.com/-b0-k99FZlyE/AAAAAAAAAAI/AAAAAAAAAAA/eu7opA4byxI/photo.jpg?sz=100"
                                     alt="User Pic" />
                            </div>
                            <div className="span6">
                                <strong>MyUsername</strong><br/>
                                <table className="table table-condensed table-responsive table-user-information">
                                    <tbody>
                                    <tr>
                                        <td>User level:</td>
                                        <td>Registered user</td>
                                    </tr>
                                    <tr>
                                        <td>Registered since:</td>
                                        <td>11/12/2013</td>
                                    </tr>
                                    <tr>
                                        <td>Topics</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <td>Warnings</td>
                                        <td>1</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-primary" type="button"
                                data-toggle="tooltip"
                                data-original-title="Send message to user"><i className="icon-envelope icon-white"></i></button>
                        <span className="pull-right">
                            <button className="btn btn-warning" type="button"
                                    data-toggle="tooltip"
                                    data-original-title="Edit this user"><i className="icon-edit icon-white"></i></button>
                            <button className="btn btn-danger" type="button"
                                    data-toggle="tooltip"
                                    data-original-title="Remove this user"><i className="icon-remove icon-white"></i></button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}


export default UserDetails;