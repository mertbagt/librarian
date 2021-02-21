import React from 'react'

export default React.createContext({
  patrons: [],
  books: [],
  addPatron: () => {},
  addBook: () => {},
  error: "",
})