"use client"

import { useState, useCallback, useEffect } from "react"

const BOOKMARKS_KEY = "astra-bookmarks"

interface Bookmark {
  id: string
  type: "tool" | "model" | "article" | "comparison"
  title: string
  slug: string
  addedAt: string
}

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([])

  useEffect(() => {
    const stored = localStorage.getItem(BOOKMARKS_KEY)
    if (stored) {
      try {
        setBookmarks(JSON.parse(stored))
      } catch {
        setBookmarks([])
      }
    }
  }, [])

  const saveBookmarks = useCallback((updated: Bookmark[]) => {
    setBookmarks(updated)
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated))
  }, [])

  const addBookmark = useCallback(
    (bookmark: Omit<Bookmark, "addedAt">) => {
      const exists = bookmarks.some((b) => b.id === bookmark.id)
      if (!exists) {
        saveBookmarks([...bookmarks, { ...bookmark, addedAt: new Date().toISOString() }])
      }
    },
    [bookmarks, saveBookmarks]
  )

  const removeBookmark = useCallback(
    (id: string) => {
      saveBookmarks(bookmarks.filter((b) => b.id !== id))
    },
    [bookmarks, saveBookmarks]
  )

  const isBookmarked = useCallback(
    (id: string) => bookmarks.some((b) => b.id === id),
    [bookmarks]
  )

  const toggleBookmark = useCallback(
    (bookmark: Omit<Bookmark, "addedAt">) => {
      if (isBookmarked(bookmark.id)) {
        removeBookmark(bookmark.id)
      } else {
        addBookmark(bookmark)
      }
    },
    [isBookmarked, addBookmark, removeBookmark]
  )

  return { bookmarks, addBookmark, removeBookmark, isBookmarked, toggleBookmark }
}
