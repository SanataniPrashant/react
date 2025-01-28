import header from './header';
import data from './data';
import footer from './Footer';

function App() {
 

  return (
    <>
    <form action="">
      Enter name :<input type="text"  placeholder="Enter your name" />
      <br />
      Enter your Rollno:<input type="text"  placeholder="Enter your rollno" />
      <br />
    Select Class:<select name="class" id="class">
      <option value="1st">1st</option>
      <option value="2nd">2nd</option>
      <option value="3nd">3rd</option>
    </select>
    <br />
    Enter Comment:<textarea id="comment"  placeholder="enter your comment"/>

    </form>
      
    </>
  )
}

export default App
