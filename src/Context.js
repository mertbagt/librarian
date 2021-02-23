import React from 'react'

export default React.createContext({
  patrons: [],
  books: [],
  booksCheckedOut: [],
  patronResults: [],
  bookResults: [],
  currentPatron: [],
  addPatron: () => {},
  addBook: () => {},
  checkBook: () => [],
  checkIn: () => [],
  updateError: () => {},
  updatePatronResults: () => {},
  updateBookResults: () => {},
  updateCurrentPatron: () => [],
  deletePatron: () => [],
  deleteBook: () => [],
  error: "",
})