import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { doubleCount } from './store/CounterSlice';
import { addCount } from './store/DheerajSlice';

function App() {
    const {count} = useSelector((state)=>state.vinita)
    const {count2 : ankita} = useSelector((state)=>state.dheeraj)
    const dispatch = useDispatch()
  return (
  <>
  <h1>VINITA : {count}</h1>
  <h1>DHEERAJ : {ankita}</h1>
  <button onClick={()=> dispatch(doubleCount({value:10}))}>VINITA</button>
  <button onClick={()=> dispatch(addCount({value:20}))}>DHEERAJ</button>
  </>
  );
}

export default App;
