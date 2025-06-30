import { useState } from "react"

import { books as originBooksData } from "../constants/mockData"
import BookCard from "./BookCard"
import SideCard from "./SideCard"
import SearchBox from "./SearchBox"

import styles from "./Books.module.css"

function Books() {
  const [liked, setLiked] = useState([])
  const [search, setSearch] = useState("")
  const [books, setBooks] = useState(originBooksData)

  const handelLikedList = (book, status) => {
    if (status) {
      const newLikedList = liked.filter((i) => i.id !== book.id)
      setLiked(newLikedList)
    } else {
      setLiked((liked) => [...liked, book])
    }
  }

  const searchHandler = () => {
    if (search) {
      // use originBooksData instead books state, to search on all of the books without manipulated and handel error in 2th and more searches
      const searchedBook = originBooksData.filter((book) =>
        book.title.toLowerCase().includes(search)
      )
      setBooks(searchedBook)
    } else setBooks(originBooksData)
  }

  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        searchHandler={searchHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handelLikedList={handelLikedList}
            />
          ))}
        </div>
        {Boolean(liked.length) && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((likedBook) => (
              <SideCard key={likedBook.id} likedBook={likedBook} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Books
