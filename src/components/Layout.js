import React, {useContext} from 'react'
import { MyContext } from './Context'
import Link from 'next/link'

function Layout({children}) {

  const { cards } = useContext(MyContext)

  return (
    <div className='Layout'>
      <div className="aside">
        <h3>INDEX</h3>
        <div className='asideItem'>
          <Link href={`/`}>
            Home
          </Link>
        </div>
      {cards.map(card=> {
        return (
        <div className="asideItem">
          <Link href={`/FlashCards/${card.id}`}>
            <p>{card.title}</p>
          </Link>
        </div>
        )
      })
      }
    </div>
    <div className="main">
      {children}
    </div>
  </div>
  )
}

export default Layout