import React, { useEffect } from 'react';
import { Nav } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import EmailListItem from './EmailListItem';
import {
  fetchEmails,
  SelectEmail,
  starEmail,
  importantEmail,
  deleteEmail,
  checkEmail,
} from '../../../store/apps/email/EmailSlice';

const EmailList = () => {
  const dispatch = useDispatch();

  useEffect(() => {//@ts-ignore
    dispatch(fetchEmails());
  }, [dispatch]);
  const getVisibleEmail = ({emails, filter, emailSearch} : {
    emails: any;
    filter: string;
    emailSearch: string;
  }) => {
    switch (filter) {
      case 'inbox':
        return emails.filter(
          (c : any) => c.inbox && !c.trash && c.from.toLocaleLowerCase().includes(emailSearch),
        );

      case 'sent':
        return emails.filter(
          (c : any) => c.sent && !c.trash && c.from.toLocaleLowerCase().includes(emailSearch),
        );

      case 'draft':
        return emails.filter(
          (c : any) => !c.trash && c.draft && c.from.toLocaleLowerCase().includes(emailSearch),
        );

      case 'spam':
        return emails.filter(
          (c : any) => !c.trash && c.spam && c.from.toLocaleLowerCase().includes(emailSearch),
        );

      case 'trash':
        return emails.filter((c : any) => c.trash && c.from.toLocaleLowerCase().includes(emailSearch));

      case 'starred':
        return emails.filter(
          (c : any) => !c.trash && c.starred && c.from.toLocaleLowerCase().includes(emailSearch),
        );

      case 'important':
        return emails.filter(
          (c : any) => !c.trash && c.important && c.from.toLocaleLowerCase().includes(emailSearch),
        );

      case 'Social':
        return emails.filter(
          (c : any) =>
            !c.trash && c.label === 'Social' && c.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'Health':
        return emails.filter(
          (c : any) =>
            !c.trash && c.label === 'Health' && c.from.toLocaleLowerCase().includes(emailSearch),
        );
      case 'Promotional':
        return emails.filter(
          (c : any) =>
            !c.trash &&
            c.label === 'Promotional' &&
            c.from.toLocaleLowerCase().includes(emailSearch),
        );

      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  };
  const emails = useSelector((state : any) =>
    getVisibleEmail({
      emails: state.emailReducer.emails,
      filter: state.emailReducer.currentFilter,
      emailSearch: state.emailReducer.emailSearch,
    }
    ),
  );
  const active = useSelector((state : any) => state.emailReducer.emailContent);
  return (
    <>
      <Nav>
        {emails.map((email : any) => (
          <EmailListItem
            key={email.id}
            active={active}
            {...email}
            handlechecked={() => dispatch(checkEmail(email.id))}
            onDelete={() => dispatch(deleteEmail(email.id))}
            onEmailClick={() => dispatch(SelectEmail(email.id))}
            onStar={() => dispatch(starEmail(email.id))}
            onImportant={() => dispatch(importantEmail(email.id))}
          />
        ))}
      </Nav>
    </>
  );
};

export default EmailList;
