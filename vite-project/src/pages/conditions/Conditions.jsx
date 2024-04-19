import { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./Conditions.css"

function Conditions() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <body>
        <div className='conditions-policy'>
          <section>
            <h2>INFORMACIÓN GENERAL</h2>
            <p>La titularidad de este sitio web , (en adelante Sitio Web) la ostenta: Guayre Espino Méndez, con NIF: 69447514L, y cuyos datos de contacto son:

              Dirección: TiburcioElMejor

              Teléfono de contacto: 3;8;21;16;1;13;5;12;1

              Email de contacto: nashe@gmail.com

              Este documento (así como otros documentos que aquí se mencionen) regula las condiciones por las que se rige el uso de este Sitio Web () y la compra o adquisición de productos y/o servicios en el mismo (en adelante, Condiciones).

              A efectos de estas Condiciones se entiende que la actividad que Xike desarrolla a través del Sitio Web comprende:


              Además de leer las presentes Condiciones, antes de acceder, navegar y/o usar esta página web, el Usuario ha de haber leído el Aviso Legal y las Condiciones Generales de Uso, incluyendo, la política de cookies, y la política de privacidad y de protección de datos de Xike. Al utilizar este Sitio Web o al hacer y/o solicitar la adquisición de un producto y/o servicio a través del mismo el Usuario consiente quedar vinculado por estas Condiciones y por todo lo anteriormente mencionado, por lo que si no está de acuerdo con todo ello, no debe usar este Sitio Web.

              Asimismo, se informa que estas Condiciones podrían ser modificadas. El Usuario es responsable de consultarlas cada vez que acceda, navegue y/o use el Sitio Web ya que serán aplicables aquellas que se encuentren vigentes en el momento en que se solicite la adquisición de productos y/o servicios.

              Para todas las preguntas que el Usuario pueda tener en relación con las Condiciones puede ponerse en contacto con el titular utilizando los datos de contacto facilitados más arriba o, en su caso, utilizando el formulario de contacto.</p>
          </section>
          <section>
            <h2>EL USUARIO</h2>
            <p>El acceso, la navegación y uso del Sitio Web, confiere la condición de usuario (en adelante referido, indistintamente, individualmente como Usuario o conjuntamente como Usuarios), por lo que se aceptan, desde que se inicia la navegación por el Sitio Web, todas las Condiciones aquí establecidas, así como sus ulteriores modificaciones, sin perjuicio de la aplicación de la correspondiente normativa legal de obligado cumplimiento según el caso.

              El Usuario asume su responsabilidad de un uso correcto del Sitio Web. Esta responsabilidad se extenderá a:

              Hacer uso de este Sitio Web únicamente para realizar consultas y compras o adquisiciones legalmente válidas.

              No realizar ninguna compra falsa o fraudulenta. Si razonablemente se pudiera considerar que se ha hecho una compra de esta índole, podría ser anulada y se informaría a las autoridades pertinentes.

              Facilitar datos de contacto veraces y lícitos, por ejemplo, dirección de correo electrónico, dirección postal y/u otros datos (ver Aviso Legal y Condiciones Generales de Uso).

              El Usuario declara ser mayor de 18 años y tener capacidad legal para celebrar contratos a través de este Sitio Web.

              El Sitio Web está dirigido principalmente a Usuarios residentes en España. Xike no asegura que el Sitio Web cumpla con legislaciones de otros países, ya sea total o parcialmente. Xike declina toda responsabilidad que se pueda derivar de dicho acceso, así como tampoco asegura envíos o prestación de servicios fuera de España.

              El Usuario podrá formalizar, a su elección, con Xike el contrato de compraventa de los productos y/o servicios deseados en cualquiera de los idiomas en los que las presentes Condiciones estén disponibles en este Sitio Web.</p>

          </section>
          <section>
            <h2>PROCESO DE COMPRA O ADQUISICIÓN</h2>
            <p>Los Usuarios pueden comprar en el Sitio Web por los medios y formas establecidos. Deberán seguir el procedimiento de compra y/o adquisición online de , durante el cual varios productos y/o servicios pueden ser seleccionados y añadidos al carrito, cesta o espacio final de compra y, finalmente, hacer clic en: ""

              Asimismo, el Usuario deberá rellenar y/o comprobar la información que en cada paso se le solicita, aunque, durante el proceso de compra, antes de realizar el pago, se pueden modificar los datos de la compra.

              Seguidamente, el Usuario recibirá un correo electrónico confirmando que Xike ha recibido su pedido o solicitud de compra y/o prestación del servicio, es decir, la confirmación del pedido. Y, en su caso, se le informará, igualmente, mediante correo electrónico cuando su compra esté siendo enviada.
              Una vez el procedimiento de compra ha concluido, el Usuario consiente que el Sitio Web genere una factura electrónica que se hará llegar al Usuario a través del correo electrónico. Asimismo, el Usuario puede, si así lo desea, obtener una copia de su factura en papel, solicitándolo a Xike utilizando los espacios de contacto del Sitio Web o a través de los datos de contacto facilitados más arriba.

              El Usuario reconoce estar al corriente, en el momento de la compra, de ciertas condiciones particulares de venta que conciernen al producto y/o servicio en cuestión y que se muestran junto a la presentación o, en su caso, imagen de éste en su página del Sitio Web, indicando, a modo enunciativo, pero no exhaustivo, y atendiendo a cada caso: nombre, precio, componentes, peso, cantidad, color, detalles de los productos, o características, modo en el que se llevarán a cabo y/o coste de las prestaciones; y reconoce que la realización del pedido de compra o adquisición materializa la aceptación plena y completa de las condiciones particulares de venta aplicables a cada caso.

              Las comunicaciones, órdenes de compra y pagos que intervengan durante las transacciones efectuadas en el Sitio Web podrían ser archivadas y conservadas en los registros informatizados de Xike con el fin de constituir un medio de prueba de las transacciones, en todo caso, respetando las condiciones razonables de seguridad y las leyes y normativas vigentes que a este respecto sean de aplicación, y particularmente atendiendo al Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales, y a los derechos que asisten a los Usuarios conforme a la política de privacidad de este Sitio Web.</p>

          </section>

        </div>

      </body>
      <Footer />
    </>
  )
}

export default Conditions