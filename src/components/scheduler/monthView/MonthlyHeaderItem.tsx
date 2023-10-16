import React from 'react'

const MonthlyHeaderItem = (props: React.PropsWithChildren) => {
  return (
    <div className="border text-center py-1 font-semibold border-zinc-300">
      {props.children}
    </div>
  )
}

export default MonthlyHeaderItem