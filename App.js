import logo from './logo.svg';
import './App.css';
import  {data} from './data'
import User from './User';

function App() {


  let userData = data

console.log(userData)
  return (
    <div className="App">

      
{
  userData.map((user,index)=>{

   return <User user={user} index={index} key={user.id}  />

    
  }  )}      
  </div>
    
  );
}

export default App;
