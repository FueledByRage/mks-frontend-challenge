import Head from '@/components/Head';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import React from 'react';
import { Provider } from "react-redux";
import { store } from '../store/store';

export default function App({ Component, pageProps }: AppProps) {
  return <React.StrictMode>
    <Provider store={store} >
      < Head />
      <Component {...pageProps} />
    </Provider>
  </React.StrictMode>
}
