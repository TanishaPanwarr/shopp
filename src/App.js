import React, {useEffect,useState } from 'react';
import './App.css';
import { EmployeeData } from './EMployeeData';

function App()
{
const [data,setData] = useState([]);
const [firstName,setFirstName] = useState('')
const [lastName,setLastName] = useState('')
const [age,setAge] = useState(0)
const [id,setId] = useState(0)
const [isUpdate,setIsUpdate] = useState(false)
useEffect(() => {
	setData(EmployeeData)
	},[]);
const handelEdit =(id) => {
     const dt =data.filter(item => item.id ===id);
     if (dt !==undefined) {
	setIsUpdate(true)
	setId(id);
	setFirstName(dt[0].firstName);
	setLastName(dt[0].lastName);
	setAge(dt[0].age);
    }
  }

const handelDelete = (id) => {
     if (id > 0) {
 	if(window.confirm("Are you sure to de;ete this item")){
	  const dt =data.filter(item => item.id !==id);
	  setData(dt);
}
}
}

const handelSave = (e) =>{

let error = '';

if(firstName === '')
    error += 'first name is required';

if(lastName === '')
    error += 'last name is required';

if(age <=0)
    error += 'Age is required';
if(error !== '')
{

e.preventDefault();
const dt = [...data];
const newObject = {
     id: EmployeeData.length + 1,
     firstName : firstName,
     lastName: lastName,
     age: age
}
 dt.push(newObject);
 setData(dt);
}
else {
    alert(error)
}}

const handleUpdate =() =>{
  const index = data.map((item) => {
	return item.id
   }).indexOf(id);
   const dt = [...data];
   dt[index].firstName = firstName;
   dt[index].lastName = lastName;
   dt[index].age = age;
    setData(dt);
    handelClear();
}
const handelClear = () => {
    setId(0);
    setFirstName('');
    setLastName('');
    setAge('');
    setIsUpdate(false);
}

return (
    
  <div classNAme="App">
  <div style = {{ display : 'flex', justifyContent:'center', marginTop: "10px" , marginBottom:"10px"}}>
    <div>
         <label> First Name :
	    <input type='text' placeholder=' Enter first name ' onChange={(e) => setFirstName(e.target.value)} value={firstName}/></label>
    </div>
    <div>
         <label> Last Name :
	<input type='text' placeholder=' Enter Last name ' onChange={(e) => setLastName(e.target.value)} value={lastName}/></label>
    </div>
   <div>
         <label> Age :
	<input type='text' placeholder=' Enter Age ' onChange={(e) => setAge(e.target.value)} value={age} /></label>
    </div>
     <div>
     {
        !isUpdate ?
	<button className='btn btn-primary' onClick={() => handelSave()}>Save</button>
    :
    <button className='btn btn-danger' onClick ={() => handleUpdate()}>Update</button>
     }
                <button className='btn btn-danger' onClick ={() => handelClear()}>clear</button>
     </div>
</div>

<table className="table table-hover">
<thead>
     <tr>
     <td> Sr.No</td>
     <td> Id</td>
     <td>First Name</td>
     <td> Last Name</td>
     <td> age</td>
      <td>Action</td>
     </tr>
   </thead>
    <tbody>
	{
        
        data.map((item,index)=>{
            return(
                <tr key={index}>
                <td>{index+ 1}</td>
                <td>{item.id}</td>
                <td>{item.firstname}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>
                <button className='btn btn-primary' onClick={() => handelEdit(item.id)}>Edit</button>&nbsp;
		        <button className='btn btn-danger' onClick={()=> handelDelete(item.id)}>Delete</button>
                </td>
                 </tr>
            )
        })
}
</tbody>
</table>	
</div>
    )

}
export default App;