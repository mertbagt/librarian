import React from 'react'

export default React.createContext({
  patrons: [],
  books: [],
  results: [],
  currentPatron: [],
  addPatron: () => {},
  addBook: () => {},
  updateError: () => {},
  updateResults: () => {},
  updateCurrentPatron: () => [],
  deletePatron: () => [],
  error: "",
})