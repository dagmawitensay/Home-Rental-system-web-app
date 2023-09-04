import router from './screens/router';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import React from 'react';
import store from './store';

function App() {
  return (
    <div className="App">
    {/* <h1>Hello</h1> */}
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </div>
  );
}

export default App;
