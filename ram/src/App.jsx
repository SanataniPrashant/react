import Header from './Header'
import Data from './Data'
import Footer from './Footer'


function App() {
  return (
    <>
    <form action="">
      Enter name :<input type="text"  placeholder="Enter your name" />
      <br />
      <hr />
      Enter your Rollno:<input type="text"  placeholder="Enter your rollno" />
      <br />
      <hr />
    Select Class:<select name="class" id="class">
      <option value="1st">1st</option>
      <option value="2nd">2nd</option>
      <option value="3nd">3rd</option>
    </select>
    <br />
    <hr />
    Enter Comment:<textarea id="comment"  placeholder="enter your comment"/>

    </form>
    <Header/>
    <Data/>
    <Footer/>
    </>
  )
}

export default App
