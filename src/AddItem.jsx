import React from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'


const AddItem = ({newItem, setNewItem, handleAddItem, handleToggleSearch}) => {
  return (
    <form className="addForm" onSubmit={handleAddItem}>
        {/* <label htmlFor="addItem">Add Item</label> */}
        <input 
          type="text" 
          id='addItem'
          required
          autoFocus
          placeholder='Add Item'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          />

          <button type='submit' >
            <FaPlus />
          </button>
          <div className='search'>
            <FaSearch onClick={handleToggleSearch}/>
          </div>
    </form>
  )
}

export default AddItem