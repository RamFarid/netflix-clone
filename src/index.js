import React from 'react'
import ReactDOM from 'react-dom/client'
import { SkeletonTheme } from 'react-loading-skeleton'
import App from './App'
import AuthContextProvider from './Contexts/AuthContext'
import RootContextProvider from './Contexts/RootContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

// Add strict mode
root.render(
  <AuthContextProvider>
    <RootContextProvider>
      <SkeletonTheme baseColor='#141414' highlightColor='#000'>
        <App />
      </SkeletonTheme>
    </RootContextProvider>
  </AuthContextProvider>
)
