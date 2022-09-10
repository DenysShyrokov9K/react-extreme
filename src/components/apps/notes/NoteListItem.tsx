import React from 'react';
import { NavItem, UncontrolledTooltip } from 'reactstrap';
import PropTypes from 'prop-types';

const NoteListItem = ({ onClick, id, active, noteTitle, noteColor, noteDatef, onDeleteClick } : {
  onClick: (...args: any[]) => any,
  noteTitle: string,
  noteDatef: string,
  noteColor: string,
  id: string,
  active: any,
  onDeleteClick: (...args: any[]) => any,
}) => (
  <NavItem className={`border-bottom cursor-pointer ${active === id ? 'bg-light' : ''}`}>
    <div onClick={onClick as any} className={`border-start p-3 border-4 border-${noteColor}`}>
      <h5 className="text-truncate noteText">{noteTitle}</h5>
      <div className="d-flex">
        <small>{noteDatef}</small>
        <UncontrolledTooltip placement="top" target="delete">
          Delete
        </UncontrolledTooltip>
        <i onClick={onDeleteClick as any} className="bi bi-trash ms-auto" id="delete" />
      </div>
    </div>
  </NavItem>
);

NoteListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  noteTitle: PropTypes.string.isRequired,
  noteDatef: PropTypes.string.isRequired,
  noteColor: PropTypes.string.isRequired,
  id: PropTypes.number,
  active: PropTypes.any,
  onDeleteClick: PropTypes.func.isRequired,
};

export default NoteListItem;
