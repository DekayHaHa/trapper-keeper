import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { rootReducer } from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './containers/App';
import thunk from 'redux-thunk';
import { SnackbarProvider } from 'material-ui-snackbar-redux';
import './styles/index.scss';

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
	<Provider store={store}>
		<SnackbarProvider SnackbarProps={{ autoHideDuration: 3000 }}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</SnackbarProvider>
	</Provider>,
document.getElementById('root'));
