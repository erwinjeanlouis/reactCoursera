import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail  extends Component {        
    renderComments(comments) {
        const commentBlock = 
            comments != null ?
                    comments.map((comment) => {
                        return(
                            <li key={comment.id}> 
                                {comment.comment} <br/> --{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}  
                            </li>                        
                        )
                        }
                    )
                :
                    <div></div>;

        return(
            <div>
                <h4> Comments </h4>
                <ul className = "list-unstyled">
                    {commentBlock}                            
                </ul>                        
            </div>
        );
    }

    renderDish(dish)
    {
        return(
        <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }
    render() {
        if (this.props.dish != null)
            return(
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div  className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}                                             
                    </div>                             
                </div>
            );
        else
            return(
                <div></div>
            );
    }
}

export default DishDetail ;