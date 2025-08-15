'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type TalkToSalesContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
}

export const ModalContext = createContext<TalkToSalesContextType | undefined>(undefined)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) throw new Error('useModal must be used within ModalProvider')
  return context
}
