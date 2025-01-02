import React, { useState } from 'react';
import './App.css';

type Note = {
  id: number;
  title: string;
  content: string;
};

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
  {
    id: 1,
    title: "test note 1",
    content: "bla bla note1",
  },
  {
    id: 2,
    title: "test note 2 ",
    content: "bla bla note2",
  },
  {
    id: 3,
    title: "test note 3",
    content: "bla bla note3",
  },
  {
    id: 4,
    title: "test note 4 ",
    content: "bla bla note4",
  },
  {
    id: 5,
    title: "test note 5",
    content: "bla bla note5",
  },
  {
    id: 6,
    title: "test note 6",
    content: "bla bla note6",
  },
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("title:",title);
    console.log("contet:",content);

    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content,
    };
    
    setNotes([newNote, ...notes]);
  };

  return (
    <div className='app-container'>
      <form className='note-form' onSubmit={(event) => handleAddNote(event)}>
        <input 
          placeholder='Title'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        ></input>
        <textarea 
          placeholder='Content'
          value={content}
          onChange={(event) => setContent(event.target.value)}
          rows={10} 
          required
        ></textarea>
        <button type='submit'>Add Note</button>
      </form>
      <div className="notes-grid">
      {notes.map((note) => (
        <div className="note-item">
          <div className="notes-header">
            <button>x</button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default App;
