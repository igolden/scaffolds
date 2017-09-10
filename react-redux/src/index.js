import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/App';
import { register as registerServiceWorker } from '~/util';
import { Provider } from 'react-redux'
import configureStore from '~/store/configureStore'
import Styles from "~/assets/stylesheets/"
import DevTools from '~/containers/DevTools'

// Global import styles

const store = configureStore();

export default function App (props) {
  return (
    <Provider store={store} >
      <App />
      <DevTools />
    </Provider>
  )
}

ReactDOM.render(<Github />, document.getElementById('root'));
registerServiceWorker();
