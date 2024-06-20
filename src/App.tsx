import { Provider } from 'react-redux';

import { AppErrorBoundary } from './components/ErrorBoundary';
import { AppRoutes } from './pages';
import { store } from './store/store';
import { GlobalStyles } from './theme';

const App = () => (
  <AppErrorBoundary>
    <Provider store={store}>
      <AppRoutes />
      <GlobalStyles />
    </Provider>
  </AppErrorBoundary>
);

export default App;
