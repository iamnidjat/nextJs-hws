import React from 'react'
 
interface Props {
  children: React.ReactNode
}
 
const CustomBox = ({children}: Props) => {
  return (
    <div
      style={{
        width: '100%',
        padding: 120,
        margin: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
      }}>
      {children}
    </div>
  )
}
 
export default CustomBox