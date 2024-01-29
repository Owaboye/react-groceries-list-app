import {useState} from 'react'
import List from './List'

import AddItem from './AddItem';
import Search from './Search';

export default function Content(){
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem('groceryList')) || []
        // [
        //     {
        //         id: 1,
        //         item: 'This is item 1',
        //         check: false
        //     },

        //     {
        //         id: 2,
        //         item: 'This is item 2',
        //         check: false
        //     },

        //     {
        //         id: 3,
        //         item: 'This is item 3',
        //         check: false
        //     }
        // ]
    );

    const [openSearch, setOpenSearch] = useState(false)

    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')

    function handleToggleSearch(){
        setOpenSearch((openSearch) => !openSearch)
    }

    function setAndSaveItems(newItemLists){
        setItems(newItemLists)
        localStorage.setItem('groceryList', JSON.stringify(newItemLists))
    }

    function handleChange(id){
        const itemList = items.map((item) => (item.id === id) ? {...item, check: !item.check} : item)
        setAndSaveItems(itemList)
    }

    function handleDelete(id){
        const itemList = items.filter((item) => item.id !== id)
        // setItems(itemList)
        // localStorage.setItem('groceryList', JSON.stringify(itemList))
        setAndSaveItems(itemList)
    }

    function addItem(item){
        let id = items.length ? items[items.length - 1].id + 1 : 0;
        const myNewItem = {id, check : false, item}
        const newItemLists = [...items, myNewItem]
        setAndSaveItems(newItemLists)
        setNewItem('')
    }

    const handleAddItem = (e) => {
        addItem(newItem)
        e.preventDefault()

    }
    
    return (
        <main>
           <div className="container">
                <AddItem 
                    newItem={newItem} 
                    setNewItem={setNewItem} 
                    handleAddItem={handleAddItem}
                    handleToggleSearch={handleToggleSearch}
                />
                {openSearch && <Search search={search} setSearch={setSearch} />}
                {items.length ? 
                    (<List items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleChange={handleChange} handleDelete={handleDelete}/>) 
                    : (<p>There are no item in the list</p>)}
           </div>
        </main>
    )
}

