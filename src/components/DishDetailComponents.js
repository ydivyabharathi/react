import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, Breadcrumb, BreadcrumbItem, CardText, CardBody, CardTitle,
        Row, Col, Label, Button,
        Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom'
import { LocalForm, Errors, Control } from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => !(val) || (val.length >= len);
const maxLength = (len) => (val) => !(val) || (val.length <= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values) {
        this.toggleModal();
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current state is : " + JSON.stringify(values));
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg"></span> Submit Comment
                </Button>   

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        Submit Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="ratings" md={2}>Ratings</Label>
                                <Col md={12}>
                                    <Control.select model=".ratings" id="ratings" name="ratings"
                                        placeholder="1"
                                        className="form-control" >

                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </Control.select>
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="name" md={5}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Your name"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(3),
                                            maxLength: maxLength(15)
                                        }} />

                                    <Errors 
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be lesser than 15 characters'
                                        }}
                                    />
                                </Col>
                            </Row>


                            <Row className="form-group">
                                <Label htmlFor="comment" md={2}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        className="form-control"
                                        rows="6"
                                    />

                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{size:10}}>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>

                        </LocalForm>
                    </ModalBody>

                </Modal>
            </div>

        )
    }

}



    function RenderDish(dish) {
        if(dish != null) {
            return (
                <Card>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else {
            return (
                <div></div>
            )
        }
    }

    function RenderComments(comments) {
        if(comments!=null){
            var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var com = comments.map((obj)=>{
                var d = new Date(obj.date)
                return (
                    <div>
                    <p>{obj.comment}</p>
                    <p>--{obj.author}, {months[d.getMonth()]} {d.getDate()}, {d.getFullYear()}</p></div>
                )
            })
            return(
                <div>
                    <h2>Comments</h2>
                    {com}
                </div>
            )
        }
        else {
            return (
                <div></div>
            )
        }
        
    }

    function CardDetails(props) {
        return (
            <div class="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12 col-md-5">
                        {RenderDish(props.dish)}
                    </div>
                    <div className="col-12 col-md-5">
                        {RenderComments(props.comments)}
                        <CommentForm />
                    </div>
                </div>
            </div>
        )
    }




export default CardDetails