
import { Provider } from 'react-redux';
import { store } from './redux/store/Store';
import DashBoardRoutes from './routes/DashboardRoutes';

const ToDoApp = () => {

  return (
    <Provider store={store}>
        <DashBoardRoutes/>
    </Provider>
  );
};

export default ToDoApp;
