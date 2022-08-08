import React from 'react'
import DATAJSON from "./Data.json"


//const array = ["Pavitar", "Aman", "Gunjan", "Maria", "Prithivik"]
const SearchBar = () => {
  const [search, setSearch] = React.useState("")
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', marginTop: "2rem" }}>
        <div>
          <input
            type="text"
            placeholder='Search...'
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ padding: "0.6rem", width: "300px" }}
          />
        </div>
        {
          DATAJSON
            .filter((value) => {
              if (search === "") {
                return value
              } else if (value.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return value
              }
            })
            .map((data, index) => (
              <div
                key={index}
                style={{ margin: "1rem 0", fontWeight: "bold" }}
              >
                {data.first_name}
              </div>
            ))}
      </div>
    </>
  )
}

export default SearchBar

//https://www.mockaroo.com/