import './App.css';
import Exercise1Solution1 from './components/Exercise1Solution1';
import Exercise1Solution2 from './components/Exercise1Solution2';
import Question2ExtendsAnother10Animals from './components/Question2ExtendsAnother10Animals';
import Question3 from './components/Question3';

function App() {
  return (
    <>
      <div>
      <p className='text-bold'>Exercise 1 Solution 1</p>
            <Exercise1Solution1/>
      </div> 
      <div className='text-red'>
         <p className='text-bold'>Exercise 1 Solution 2</p>
               <Exercise1Solution2/>
      </div>
      <div className='text-green'>
         <p className='text-bold'>Exercise 2</p>
               <Question2ExtendsAnother10Animals/>
      </div>
      <div className='text-blue'>
        <p className='text-bold'>Question3</p>
        <Question3/>
      </div>
    </>
  );
}

export default App;
