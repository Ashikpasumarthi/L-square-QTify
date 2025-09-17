// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { qtifyStore, persistor } from './store'; //persistor from './store';
import HomePage from './Components/HomePage/homePage';
import ErrorPage from "./errorPage";
import CardDetail from './Components/DetailPage/detail';
import { PersistGate } from 'redux-persist/integration/react';
import AuthSuccessPage from './Components/AuthSuccessPage/authSuccess';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/card/:id',
        element: <CardDetail />
      },
      {
        path: '/auth/success',
        element: <AuthSuccessPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={ qtifyStore }>
    <PersistGate loading={ null } persistor={ persistor } >
      <RouterProvider router={ router } />
    </PersistGate>
  </Provider >

);

console.log("App component rendered", qtifyStore.getState());
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

