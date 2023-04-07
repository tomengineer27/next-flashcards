import React, { createContext, useState, useEffect } from 'react';

export const MyContext = createContext();

function Context({ children }) {
  const [cards, setCard] = useState(() => {
    const storedCards = typeof window !== 'undefined' && localStorage.getItem('cards');
    return storedCards ? JSON.parse(storedCards) : [];
  });

  useEffect(() => {
    typeof window !== 'undefined' && localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);
  
  const addCard = (title, content, color, id) => {
    setCard(prevCards => [...prevCards, {title, content, color, id}]);
  }

  const removeCard = (id) => {
    setCard(prevCards => prevCards.filter(card => card.id !== id));
  }

  return <MyContext.Provider value={{ cards, addCard, removeCard, setCard }}>
    {children}
    </MyContext.Provider>;
}

export default Context;