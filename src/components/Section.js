import React from 'react';

const Section = ({ title, items, newItem, setNewItem, handleAddItem, collection }) => {
  return (
    <section className="mb-10 p-6 border rounded-lg shadow-lg bg-white">
      <h2 className="text-3xl font-semibold mb-4 text-gray-800">{title}</h2>
      <ul className="list-disc pl-5 mb-4">
        {items.length > 0 ? (
          items.map((item, index) => (
            <li key={index} className="text-gray-700">{item}</li>
          ))
        ) : (
          <li className="text-gray-500">No items yet</li>
        )}
      </ul>
      <div className="flex">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          className="border border-gray-300 p-2 rounded-lg flex-grow mr-2 focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={() => handleAddItem(collection, newItem)}
          className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add
        </button>
      </div>
    </section>
  );
};

export default Section;
