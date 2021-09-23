import React from "react";
import { useEffect, useState} from "react";

function Products() {

    const [ products, setProducts] = useState ([ ])
	useEffect(() => {
		console.log("%cse creó el componente", "color: green");
		fetch ("http://localhost:3030/api/products")
		.then (response => response.json ())
		.then (data => {setProducts (data)})
		
		.catch ( error => console.error (error))
	}, [ ]);
	
	useEffect(() => {
		console.log("%cactualización" , "color:yellow");
	}, [products]);

    return (
	<div>
    <h1>PRODUCTOS</h1>
		<div>
			<p>{ products.total}</p>
		{
			products.length > 0 && products.map((product, i) => {
				return (
					<div className="col-sm-6 col-md-3 my-4" key={i}>
						<h5>{products.total}</h5>
						<p>{product.year}</p>
					</div>
				)
			})
		}
		</div>
	</div>
	
	)

    
}


export default Products;
