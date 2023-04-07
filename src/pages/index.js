import React, {useState, useContext} from 'react'
import styles from '../styles/Home.module.css'
import FlashCardCreator from '@/components/FlashCardCreator'
import Head from 'next/head'
import Link from 'next/link'
import { MyContext } from '../components/Context';

function Home() {
  const [show, setShow] = useState(false)
  const { cards, removeCard } = useContext(MyContext)

  return (
      <div className={styles.home}>
        <Head><title>FlashCards</title></Head>
        <div className={styles.header}>
          <button 
          className={styles.newFlashCardBtn} 
          onClick={()=>setShow(true)}>
            + New FlashCard
          </button>
        </div>
        <div className={styles.cardList}>
          {cards.map(card => {
            return (
              <div
              key={card.id} 
              className={styles.card} 
              style={{borderLeft: `4px solid ${card.color}`}}
              >
                <h3 className={styles.cardTitle}>
                  {card.title}
                </h3>
                <p className={styles.cardContent}>
                  {card.content}
                </p>
                <button 
                onClick={e=>removeCard(card.id)} 
                className={styles.cardRemoveButton}>delete</button>
              </div>
            )
          })}
        </div>
      <FlashCardCreator show={show} setShow={setShow}/>
      </div>
  )
}

export default Home