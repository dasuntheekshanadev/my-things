import React, { useState, useEffect } from 'react';
import { db } from './config/firebase';
import Section from './components/Section';
import './App.css';

function App() {
  const [buyItems, setBuyItems] = useState([]);
  const [doItems, setDoItems] = useState([]);
  const [watchItems, setWatchItems] = useState([]);

  const [newBuyItem, setNewBuyItem] = useState('');
  const [newDoItem, setNewDoItem] = useState('');
  const [newWatchItem, setNewWatchItem] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const buySnapshot = await db.collection('buy').get();
      const doSnapshot = await db.collection('do').get();
      const watchSnapshot = await db.collection('watch').get();

      setBuyItems(buySnapshot.docs.map(doc => doc.data().item));
      setDoItems(doSnapshot.docs.map(doc => doc.data().item));
      setWatchItems(watchSnapshot.docs.map(doc => doc.data().item));
    };

    fetchData();
  }, []);

  const handleAddItem = async (collection, item) => {
    if (item.trim()) {
      try {
        await db.collection(collection).add({ item });
        // Update the local state to reflect changes
        switch (collection) {
          case 'buy':
            setBuyItems([...buyItems, item]);
            break;
          case 'do':
            setDoItems([...doItems, item]);
            break;
          case 'watch':
            setWatchItems([...watchItems, item]);
            break;
          default:
            break;
        }
        // Clear input field
        switch (collection) {
          case 'buy':
            setNewBuyItem('');
            break;
          case 'do':
            setNewDoItem('');
            break;
          case 'watch':
            setNewWatchItem('');
            break;
          default:
            break;
        }
      } catch (error) {
        console.error(`Error adding item to ${collection} list: `, error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-8 text-gray-900">To-Do List</h1>
      <Section
        title="What I Need to Buy"
        items={buyItems}
        newItem={newBuyItem}
        setNewItem={setNewBuyItem}
        handleAddItem={handleAddItem}
        collection="buy"
      />
      <Section
        title="What I Need to Do"
        items={doItems}
        newItem={newDoItem}
        setNewItem={setNewDoItem}
        handleAddItem={handleAddItem}
        collection="do"
      />
      <Section
        title="What I Need to Watch"
        items={watchItems}
        newItem={newWatchItem}
        setNewItem={setNewWatchItem}
        handleAddItem={handleAddItem}
        collection="watch"
      />
    </div>
  );
}

export default App;
