import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { MyContext } from '@/components/Context'
import Head from 'next/head'
import styles from '../../styles/[id].module.css'

function FlashCard() {
  const router = useRouter()
  const { cards, setCard } = useContext(MyContext)

  useEffect(() => {
    const storedCards = localStorage.getItem('cards')
    if (storedCards) {
      setCard(JSON.parse(storedCards))
    }
  }, [setCard])

  const { id } = router.query
  const card = cards.find(card => card.id === id)

  if (!card) {
    return <div>Card not found</div>
  }

  return (
    <div className={styles.cont}>
    <Head><title>{card.title}</title></Head>
      <h1 style={{color: `${card.color}`}}>{card.title}</h1>
      <h2>{card.content}</h2>
    </div>
  )
}

export default FlashCard