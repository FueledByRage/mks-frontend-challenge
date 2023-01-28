import { store } from "../src/store/store"
import { Provider as ReduxProvider } from "react-redux";


interface IProps {
  children: JSX.Element;
}


import React from 'react'

export default function TestComponent( { children } : IProps ) {
  return (
    <ReduxProvider store={store}>
        { children }
    </ReduxProvider>
  )
}

