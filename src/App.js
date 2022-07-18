import {Provider} from 'react-redux'
import store from './store'
import Logs from './component/Logs'

function App() {
  return (
    <Provider store={store}>
      <div className='w-screen min-h-screen h-screen-full bg-zinc-200 pt-10'>
        <Logs></Logs>
      </div>
    </Provider>
  );
}

export default App;
