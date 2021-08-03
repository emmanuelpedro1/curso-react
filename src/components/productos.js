import React from 'react'
import CartWidget from './CartWidget';
import Crema from '../imagenes/crema.jpg'
import Perfume from '../imagenes/perfume.jpg'
import Maquillaje from '../imagenes/maquillaje.jpg'


const contenido = [{
    SubTitulos: 'Perfumes',
    comentario: 'Muchos perfumes',
    img:Perfume
  },
  {
    SubTitulos: 'Cremas',
    comentario: 'Muchos cremas',
    img: Crema
  },
  {
    SubTitulos: 'Maquillaje',
    comentario: 'Muchos Maquillaje',
    img:Maquillaje
  },
  ]
  
  
  
  
  


export default function productos() {
    return (
        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        Contenido
        {
          contenido.map(contenidos => {
            return (
              <CartWidget
                SubTitulos={contenidos.SubTitulos}
                comentario={contenidos.comentario}
                imagenes={contenidos.img}

              />
            )

          })
        }

      </div>

  
    );
  }