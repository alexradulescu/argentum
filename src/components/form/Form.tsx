import React, { FC } from 'react'

export const Form: FC = () => {
  const onSubmit = () => {
    alert('Form submitted')
  }

  return (
    <form onSubmit={onSubmit}>
      <label className="form-group">
        <span>Title</span>
        <input
          type="name"
          className="form-control"
          placeholder="ex: Groceries or Shopping"
        />
      </label>
      <label className="form-group">
        <span>Amount</span>
        <input className="form-control" type="text" placeholder="ex: 100" />
      </label>
    </form>
  )
}
