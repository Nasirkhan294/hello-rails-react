import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/store';
import App from './components/App';
import Greeting from './components/Greeting';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/greetings/random" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);