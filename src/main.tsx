import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store } from './redux/store.ts'
import {Provider} from "react-redux";
import App from './App.tsx'
import {BrowserRouter} from "react-router";

import './styles/global.css'
import './styles/reset.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/hack2025">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
