import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
        <input type="text" 
            role='search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='Search'
         />
    </form>
  )
}

export default Search