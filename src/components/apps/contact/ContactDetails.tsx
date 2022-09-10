import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input } from 'reactstrap';
import { isEdit, UpdateContact } from '../../../store/apps/contacts/ContactSlice';

const ContactDetails = () => {
  const contactDetail = useSelector(
    (state : any) => state.contactsReducer.contacts[state.contactsReducer.contactContent - 1],
  );

  const editContact = useSelector((state : any) => state.contactsReducer.editContact);
  const dispatch = useDispatch();

  return (
    <>
      {contactDetail ? (
        <div>
          {/***********Contact Topbar**************/}
          <div className="d-flex align-items-center p-3 border-bottom">
            <div className="">
              <img src={contactDetail.image} alt="user" className="rounded-circle" width="46" />
            </div>
            <div className="mx-2">
              <h5 className="mb-0">
                {contactDetail.firstname} {contactDetail.lastname}
              </h5>
              <small>{contactDetail.department}</small>
            </div>
          </div>

          {/***********Contact Edit box**************/}
          <div className="p-4">
            {!editContact ? (
              <table className="table table-borderless">
                <tbody>
                  <tr>
                    <td width="150">
                      <h6>Firstname </h6>
                    </td>
                    <td>: {contactDetail.firstname}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Lastname</h6>
                    </td>
                    <td>: {contactDetail.lastname}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Company</h6>
                    </td>
                    <td>: {contactDetail.company}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Department</h6>
                    </td>
                    <td>: {contactDetail.department}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Email</h6>
                    </td>
                    <td>: {contactDetail.email}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Phone</h6>
                    </td>
                    <td>: {contactDetail.phone}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Address</h6>
                    </td>
                    <td>: {contactDetail.address}</td>
                  </tr>
                  <tr>
                    <td>
                      <h6>Note</h6>
                    </td>
                    <td>: {contactDetail.notes}</td>
                  </tr>
                  <tr>
                    <td />
                    <td>
                      <Button color="primary" onClick={() => dispatch(isEdit(() => undefined))}>
                        Edit Contact
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <>
                {/***********Contact form box**************/}
                <table className="table table-borderless align-middle">
                  <tbody>
                    <tr>
                      <td width="150">
                        <h6>Firstname </h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="firstName"
                          id="firstName"
                          value={contactDetail.firstname}
                          onChange={(e) =>
                            dispatch(UpdateContact({id: contactDetail.id,field: 'firstname',value: e.target.value}))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Lastname</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="lastname"
                          id="lastname"
                          value={contactDetail.lastname}
                          onChange={(e) =>
                            dispatch(UpdateContact({id: contactDetail.id, field: 'lastname',value: e.target.value}))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Company</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="company"
                          id="company"
                          value={contactDetail.company}
                          onChange={(e) =>
                            dispatch(UpdateContact({id: contactDetail.id, field: 'company', value: e.target.value}))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Department</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="department"
                          id="department"
                          value={contactDetail.department}
                          onChange={(e) =>
                            dispatch(UpdateContact({id: contactDetail.id, field:'department', value:e.target.value}))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Email</h6>
                      </td>
                      <td>
                        <Input
                          type="email"
                          name="email"
                          id="email"
                          value={contactDetail.email}
                          onChange={(e) =>
                            dispatch(UpdateContact({id: contactDetail.id, field:'email', value:e.target.value}))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Phone</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="phone"
                          id="phone"
                          value={contactDetail.phone}
                          onChange={(e) =>
                            dispatch(UpdateContact({id:contactDetail.id, field:'phone',value: e.target.value}))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Address</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="address"
                          id="address"
                          value={contactDetail.address}
                          onChange={(e) =>
                            dispatch(UpdateContact({id: contactDetail.id,filed: 'address', value: e.target.value}))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Note</h6>
                      </td>
                      <td>
                        <Input
                          type="text"
                          name="notes"
                          id="notes"
                          value={contactDetail.notes}
                          onChange={(e) =>
                            dispatch(UpdateContact({id: contactDetail.id, field: 'notes', value:e.target.value}))
                          }
                        />
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td>
                        <Button color="success" onClick={() => dispatch(isEdit(()=> undefined))}>
                          Save Contact
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      ) : (
        'Please Select The contact'
      )}
    </>
  );
};

export default ContactDetails;
