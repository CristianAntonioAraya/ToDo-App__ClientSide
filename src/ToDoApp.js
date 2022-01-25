
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';
import AppRoutes from './routes/AppRoutes';

const ToDoApp = () => {
  return (
    <Provider store={store}>
        <AppRoutes/>
    </Provider>
  );
};

export default ToDoApp;
