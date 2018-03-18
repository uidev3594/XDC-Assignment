import React from 'react';
import  'materialize-css/dist/css/materialize.css';

export class Card extends React.Component{
    render(){
        const {cardData} = this.props;
        return (
            <div className="col s12 m4">
                    <div>
                        <div className="card horizontal row hoverable">
                            <div className="card-image col s4" id="card-image">
                                <img src={cardData.image} id="profile"/>
                                <p className="role mb-0">{cardData.role}</p>
                                <p className="skill m-0">{cardData.skill}</p>
                            </div>
                            <div className="card-stacked col s8 p-0">
                                <div className="card-content" id="card-content">
                                    <p className="name">{cardData.name}</p>
                                    <span className="education">{cardData.education}</span>
                                   <div className="contact-details">
                                        <p className="address">{ cardData.address}</p>
                                        <p className="email">{ cardData.email}</p>
                                   </div>
                                    <div className="experience">
                                        <div className="row">
                                            <div className="col s6">
                                                <div className="col s4">
                                                   {/* <img src="" /> */}
                                                   <i className="material-icons">content_paste</i>
                                                </div>
                                                <div className="col s8">
                                                    <div className="total-exp-label">Total Experience</div>
                                                    <div className="totalExperience">{cardData.totalExperience}</div>
                                                </div>
                                            </div>

                                            <div className="col s5">
                                                <div className="col s4">
                                                   {/* <img src="" /> */}
                                                   <i className="material-icons">library_books</i>
                                                </div>
                                                <div className="col s8">
                                                    <div className="position-exp-label">Exp in Position</div>
                                                    <div className="positionExperience">{cardData.positionExperience}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div> 
        )
    }
}