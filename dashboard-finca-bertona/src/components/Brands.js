import React from "react";
import { useEffect, useState} from "react";

function Brands() {

    const [ brands, setBrands] = useState ([ ])
	useEffect(() => {
		console.log("%cse creó el componente", "color: green");
		fetch ("http://localhost:3030/api/brands")
		.then (response => response.json ())
		.then (data => { 
			console.log(data);
			setBrands (data.data)})
		
		.catch ( error => console.error (error))
	}, [ ]);
	
	useEffect(() => {
		console.log("%cactualización" , "color:yellow");
	}, [brands]);

    

    return (
	<div>
    <h1>MARCAS</h1>
		<div>
			<p>Cantidad: { brands.length}</p>
			<div>
			<h1> LISTADO </h1>
		{
			brands.length > 0 && brands.map((brand, i) => {
				return (
					<div key={i}>
						<li>{brand.name}</li>
                        <p>Cantidad de productos {brand.products.length}</p>

					</div>
				)
			})
		}
        
        
		</div>
	</div>
	</div>
	
	)

    
}



export default Brands;