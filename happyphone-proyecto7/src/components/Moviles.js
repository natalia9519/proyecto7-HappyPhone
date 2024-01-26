import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";

//  function useMoviles(){

   //  const [moviles, setMoviles] = useState([])

   //  useEffect(() => {
   //      fetch("http://localhost:5500/catalogo")
   //      .then(response => response.json())
   //      .then (datos => {
   //          setMoviles(datos.catalogo)
   //      })
   //  }, [])
   //  return moviles
//  }

export default function Moviles() {

 const [moviles, setMoviles] = useState([])

 useEffect(() => {
     fetch("http://localhost:3001/api/mobiles")
     .then(response => response.json())
     .then (datos => {
         setMoviles(datos)
     })
 }, [])

 console.log(moviles)

   //  const moviles = useMoviles()
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;

   const handleNextPage = () => {
   setCurrentPage(prevPage => prevPage + 1)
   }

   const handlePrevPage = () => {
   setCurrentPage(prevPage => prevPage - 1)
    }

 // Cálculo de los elementos a mostrar en la página actual
 const indexOfLastItem = (currentPage + 1) * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentItems = moviles.slice(indexOfFirstItem, indexOfLastItem);

    return(
       
      <section className="section-movil-product">
           <h1 className="h1-home">Productos</h1>
              <div className="div-movil-product" >
                   <button onClick={handlePrevPage} disabled={currentPage === 0} className="btn-pages">{"<"}</button>
                          
                  <div className="product-movil">
                  {currentItems.map(item => (
                  <div key={item.id} className="div-product-json">
                    <h2>{item.nombre}</h2>
                    
                     {<img src={`${process.env.PUBLIC_URL}/imgJson/${item.ruta_imagen}`} alt="Descripción del SVG" className="image-json"/>}
                    <Link to={`/movil/${item.id}`} className="link-to-return">Ver más</Link>
                  </div>
                     ))}
                </div>
             
             
             <button onClick={handleNextPage} disabled={(currentPage + 1) * itemsPerPage >= moviles.length} className="btn-pages">{">"}</button>
            </div>

      </section>
    );
   
};