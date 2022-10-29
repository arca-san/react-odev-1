import axios from 'axios';
import './App.css';


function App() {
  async function getText(number) {
    let url = `https://jsonplaceholder.typicode.com/users/${number}`
    let url2 = `https://jsonplaceholder.typicode.com/posts?userId=${number}`
    const x = await axios.get(url).then(ret => {
      return ret.data
    })
    const y = await axios.get(url2).then(ret => {
      return ret.data
    })
    x.posts = y
    console.log(x);
    }
  getText(1);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
