
import {useState} from "react"
 
const App = () => {
const [userName, setUserName] = useState ("");
 const [awais,setAwais]= useState([]);
 
 
const addName= (e)=> {

e.preventDefault();
const namesList= localStorage.getItem("users");

let china = [];
if(!namesList){
    china.push(userName);
    localStorage.setItem("users",JSON.stringify(china));
} else {
    china= JSON.parse(namesList);
    china.push(userName);
    localStorage.setItem("users",JSON.stringify(china));
}}
const getName=()=>{

setAwais(JSON.parse(localStorage.getItem("users")))
}

 
 
  return (
   
   <div> <form
     onSubmit = {addName}
    >
      <input
        type="text/submit"
        
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Username"
      />
       
      <button type="submit">Submit</button>
      
    </form>
    <tbody>
        {awais.map(item=>
            <tr> {item}</tr>)}
    </tbody>
    <button onClick={getName} > Get Data</button>
</div>
  )
};
 
export default App;