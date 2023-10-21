import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import { Form, Button,Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { getUserDetails, updateUser } from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'
import {useNavigate} from 'react-router-dom'
import Header from '../components/Header'

function UserEditScreen() {
    const { id } = useParams();
    const userId = id
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            navigate('/admin/userlist')
        } else {

            if (!user.name || user._id !== Number(userId)) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
            }
        }

    }, [user, userId, successUpdate, navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: user._id, name, email, isAdmin }))
    }

    return (
        <div className = "mt-9 px-5">
         <Header></Header>
            <Link to='/admin/userlist' className = "btn btn-light my-3">
                Go Back
            </Link>
            <Row className="justify-content-md-center">
                <Col md = {5}>
                    <FormContainer className = "px-5">
                        <h1 style = {{textAlign: 'center'}} className = "highlight">Edit User</h1>
                        {loadingUpdate && <Loader />}
                        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}

                        {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                            : (
                                <Form onSubmit={submitHandler}>

                                    <Form.Group controlId='name'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control

                                            type='name'
                                            placeholder='Enter name'
                                            value={name}
                                            className="rounded-pill mt-3"
                                            onChange={(e) => setName(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='email'>
                                        <Form.Label className = "mt-4">Email Address</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter Email'
                                            value={email}
                                            className="rounded-pill mt-3"
                                            onChange={(e) => setEmail(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='isadmin'>
                                        <Form.Check
                                            type='checkbox'
                                            label='Is Admin'
                                            checked={isAdmin}
                                            className="rounded-pill mt-3"
                                            onChange={(e) => setIsAdmin(e.target.checked)}
                                        >
                                        </Form.Check>
                                    </Form.Group>

                                    <Button type='submit' variant='primary' className="mt-2 rounded-pill w-100 btn-sign-in">
                                        Update
                                    </Button>

                                </Form>
                            )}
                    </FormContainer>
                </Col>
            </Row>
        </div>

    )
}

export default UserEditScreen