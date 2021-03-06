import React from "react";
import { useEffect, useState} from "react";

function Products() {

    const [ products, setProducts] = useState ([ ])
	useEffect(() => {
		console.log("%cse creó el componente", "color: green");
		fetch ("http://localhost:3030/api/products")
		.then (response => response.json ())
		.then (data => { 
			console.log(data);
			setProducts (data.data)})
		
		.catch ( error => console.error (error))
	}, [ ]);
	
	useEffect(() => {
		console.log("%cactualización" , "color:yellow");
	}, [products]);

    return (
	<div>
    <h1>PRODUCTOS</h1>
		<div>
			<p>Cantidad de productos: { products.length}</p>
			<div>
			<h1> LISTADO DE PRODUCTOS</h1>
		{
			products.length > 0 && products.map((product, i) => {
				return (
					<div key={i}>
						<img></img>
						<li>{product.brands.name} Cosecha {product.year}</li>
					</div>
				)
			})
		}
		</div>
	</div>
	</div>
	
	)

    
}


export default Products;
