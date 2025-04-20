import React from 'react'

export function TopPaddingLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className='pt-[58px]'>
      {children}
    </div>
  )
}
