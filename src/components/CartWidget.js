import React from 'react'



const CartWodget =({SubTitulos, comentario, imagenes}) => {
const seleccionar = () =>{
alert (" quiero que se se despliegue el comentario y la imagen ")

}





    return (
        <div>
            < div className="contenedor">
                <button onClick={seleccionar}>{SubTitulos}</button>
                <div>{comentario}</div>
                <img className="img" src = {imagenes} />


            </div>
<br></br>

        </div>
    );

}

export default CartWodget