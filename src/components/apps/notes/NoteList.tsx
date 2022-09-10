import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from 'reactstrap';
import NoteListItem from './NoteListItem';
import { fetchNotes, SelectNote, DeleteNote } from '../../../store/apps/notes/NotesSlice';

const NoteList = () => {
  const dispatch = useDispatch();
  useEffect(() => {//@ts-ignore
    dispatch(fetchNotes());
  }, [dispatch]);

  const filterNotes = (notes : any, noteSearch : string) => {
    if (noteSearch !== '')
      return notes.filter(
        (t : any) =>
          !t.deleted &&
          t.title.toLocaleLowerCase().concat(' ').includes(noteSearch.toLocaleLowerCase()),
      );
    return notes.filter((t : any) => !t.deleted);
  };

  const notes = useSelector((state : any) =>
    filterNotes(state.notesReducer.notes, state.notesReducer.noteSearch),
  );
  const active = useSelector((state : any) => state.notesReducer.notesContent);

  return (
    <Nav>
      {notes && notes.length
        ? notes.map((note : any) => (
            <NoteListItem
              key={note.id}
              {...note}
              active={active}
              onClick={() => dispatch(SelectNote(note.id))}
              onDeleteClick={() => dispatch(DeleteNote(note.id))}
              noteTitle={note.title}
              noteColor={note.color}
              noteDatef={new Date(note.datef).toLocaleDateString({//@ts-ignore
                weekday: 'short',
                year: 'numeric',
                month: 'short',
              })}
            />
          ))
        : 'no notes'}
    </Nav>
  );
};

export default NoteList;
