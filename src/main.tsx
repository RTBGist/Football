import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {Provider} from "react-redux";
import {store} from "./app/store/store";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {CreatePage} from "./pages/CreatePage";
import {MainPage} from "./pages/MainPage";
import {ClubDetailPage} from "./pages/ClubDetailPage";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="create" element={<CreatePage />} />
          <Route path="club/:id" element={<ClubDetailPage />} />
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
