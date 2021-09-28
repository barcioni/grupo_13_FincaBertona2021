import React from "react";
import { useEffect, useState} from "react";

function Users() {

    const [ users, setUsers] = useState ([ ])
	useEffect(() => {
		console.log("%cse creó el componente", "color: green");
		fetch ("http://localhost:3030/api/users")
		.then (response => response.json ())
		.then (data => { 
			console.log(data);
			setUsers (data.data)})
		
		.catch ( error => console.error (error))
	}, [ ]);
	
	useEffect(() => {
		console.log("%cactualización" , "color:oragne");
	}, [users]);

    return (
        <div>
    <h1>USUARIOS</h1>
		<div>
			<p>Cantidad: { users.length}</p>
			<div>
			<h1> LISTADO </h1>
		{
			users.length > 0 && users.map((user, i) => {
				return (
					<div key={i}>
						<ul>{user.nombre}{user.apellido}
                            <li>E-mail: {user.email}</li>
                            <li>Domicilio: {user.domicilio}</li>                      
                        </ul>
					</div>
				)
			})
		}        
		</div>
	</div>
	</div>
	)

    
}




export default Users;