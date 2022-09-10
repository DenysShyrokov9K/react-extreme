import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Button,
  Input,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { valuesType } from './interface';
//import user1 from '../../../assets/images/users/user1.jpg';
import { addContact } from '../../../store/apps/contacts/ContactSlice';
//const user1 = require('../../../assets/images/users/user1.jpg');
import user1 from '../../../assets/images/users/user1.jpg';
//It takes time....
const ContactAdd = ({ click } : any) => {
  const id = useSelector((state : any) => state.contactsReducer.contacts.length);
  const dispatch = useDispatch();
  const [values, setValues] = React.useState<valuesType>({
    firstname: '',
    lastname: '',
    department: '',
    company: '',
    phone: '',
    email: '',
    address: '',
    notes: '',
  });

  const handleSubmit = (e : any) => {
    e.preventDefault();
    dispatch(
      addContact({
        id: id,
        firstname: values.firstname,
        lastname: values.lastname,
        image: user1,
        department :values.department,
        company: values.company,
        phone: values.phone,
        email: values.email,
        address: values.address,
        notes: values.notes,
  }),
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <ModalBody>
        <Row>
          <Col md={6} className="text-center">
            <img src={user1} className="rounded-circle" alt={id} width="100" />
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="firstName">First Name</Label>
              <Input
                className="form-control"
                type="text"
                name="firstname"
                id="firstName"
                value={values.firstname}
                onChange={(e) => setValues({ ...values, firstname: e.target.value })}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastName">Last Name</Label>
              <Input
                className="form-control"
                type="text"
                name="lastname"
                id="lastName"
                value={values.lastname}
                onChange={(e) => setValues({ ...values, lastname: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="department">Department</Label>
              <Input
                className="form-control"
                type="text"
                name="department"
                id="department"
                value={values.department}
                onChange={(e) => setValues({ ...values, department: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="company">Company</Label>
              <Input
                className="form-control"
                type="text"
                name="company"
                id="company"
                value={values.company}
                onChange={(e) => setValues({ ...values, company: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input
                className="form-control"
                type="text"
                name="phone"
                id="phone"
                value={values.phone}
                onChange={(e) => setValues({ ...values, phone: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                className="form-control"
                type="email"
                name="email"
                id="email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                className="form-control"
                type="text"
                name="address"
                id="address"
                value={values.address}
                onChange={(e) => setValues({ ...values, address: e.target.value })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="notes">Notes</Label>
              <Input
                className="form-control"
                type="textarea"
                name="notes"
                id="notes"
                value={values.notes}
                onChange={(e) => setValues({ ...values, notes: e.target.value })}
              />
            </FormGroup>
          </Col>
        </Row>
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          type="submit"
          onClick={click}
          disabled={values.firstname.length === 0 || values.notes.length === 0}
        >
          Add Contact
        </Button>
      </ModalFooter>
    </Form>
  );
};

ContactAdd.propTypes = {
  click: PropTypes.any,
};

export default ContactAdd;
