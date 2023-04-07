import React, {useContext, useState, useEffect} from 'react'
import styles from '../styles/FlashCardCreator.module.css'
import { MyContext } from '../components/Context';
import { v4 as uuidv4 } from 'uuid';

function FlashCardCreator({show, setShow}) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");

  const { addCard } = useContext(MyContext);

  useEffect(() => {
    if (show) {
      setTitle("")
      setContent("")
      setColor("")
    }
  }, [show]);

  const cardDone = (title, content, color, id) => {
    setShow(false);
    addCard(title, content, color, id);
  };

  if (show) {
    return (
      <div 
      className={styles.flashCardCreatorOverlay} 
      onClick={()=> setShow(false)}>
        <div 
        className={styles.flashCardCreator} 
        onClick={e=>e.stopPropagation()}
        style={{borderLeft: `6px solid ${color}`}}>
          <div>
            <input 
            className={styles.titleInput} 
            placeholder='Title' 
            onChange={e=>setTitle(e.target.value)}
            style={{borderBottom: `3px solid ${color}`}}></input>
            <input 
            className={styles.colorInput} 
            type="color"
            onChange={e=>{setColor(e.target.value)}}></input>
          </div>
          <textarea 
          className={styles.contentInput} 
          placeholder='Content'
          onChange={e=>setContent(e.target.value)}
          style={{borderBottom: `3px solid ${color}`}}
          ></textarea>
          <button 
          className={styles.doneBtn} 
          style={{backgroundColor: `${color}`}}
          onClick={()=>cardDone(title, content, color, uuidv4())}>Done</button>
        </div>
      </div>
    )
  };
  return null;
};

export default FlashCardCreator