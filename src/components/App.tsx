import React, { FC } from 'react'

import { Form } from './form'

export const App: FC = () => {
  return (
    <div className="vh-100 vw-100 d-flex bg-dark">
      <main className="container">
        <h1 className="text-light text-center">
          Welcome to my basic react + typescript template
        </h1>
        <Form />
      </main>
    </div>
  )
}
