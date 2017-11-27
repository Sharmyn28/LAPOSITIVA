import React from 'react';
import {selectSectionAction} from '../actions/actions';
import {Row, Col} from 'react-bootstrap';

const Bar = ({onCollapseClick}) => {
    return(
        <div>
        <div className="d-flex flex-row text-white align-items-stretch text-center">
           <div
              className="port-item p-4 bg-primary"
              data-toggle="collapse"
              data-target="#mecanic"
              onClick={() => onCollapseClick('mecanic')}
           >
              PIEZAS MECANICAS
           </div>
           <div
              className="port-item p-4 bg-success"
              data-toggle="collapse"
              data-target="#out"
              onClick={() => onCollapseClick('out')}
           >
             PIEZAS EXTERNAS
           </div>
           <div
              className="port-item p-4 bg-warning"
              data-toggle="collapse"
              data-target="#into"
              onClick={() => onCollapseClick('into')}
           >
            PIEZAS INTERNAS
           </div>
           <div
              className="port-item p-4 bg-danger"
              data-toggle="collapse"
              data-target="#carroceria"
              onClick={() => onCollapseClick('carroceria')}
           >
             CARROCERIA
           </div>
        </div>
     </div>
    )
}

const Out = ({ selectedSection, products }) => (
    <div
       id="out"
       className={'collapse ' + (selectedSection == 'out' ? 'show' : 'hide')}
    >
       <div className="card card-body py-5">
          {
              products.interno.map((product, index) => {
                return (
                    <Row key={index}>
                        <Col md={2} xs={4} lg={2} >
                            <img className='product-img' src={product.img} />
                        </Col>
                        <Col md={5} xs={4} lg={5} >
                            <h4>{product.articulo}</h4>
                            <p><b>Marca: </b>{product.marca}</p>
                            <p><b>Modelo: </b>{product.modelo}</p>
                            <p><b>Año: </b>{product.year}</p>
                        </Col>
                        <Col md={5} xs={4} lg={5} >
                            <p><b>Precio: </b>S/. {product.precio_aseguradora}</p>
                            <p><b>Precio del Mercado: </b>S/. {product.precio_mercado}</p>
                            <button>Comprar</button>
                        </Col>
                    </Row>
                )
              })
          }
       </div>
    </div>
 );

 const Carroceria = ({ selectedSection, products }) => (
    <div
       id="carroceria"
       className={'collapse ' + (selectedSection == 'carroceria' ? 'show' : 'hide')}
    >
       <div className="card card-body py-5">
          {
              products.carroceria.map((product, index) => {
                return (
                    <Row key={index}>
                        <Col md={2} xs={4} lg={2} >
                            <img className='product-img' src={product.img} />
                        </Col>
                        <Col md={5} xs={4} lg={5} >
                            <h4>{product.articulo}</h4>
                            <p><b>Marca: </b>{product.marca}</p>
                            <p><b>Modelo: </b>{product.modelo}</p>
                            <p><b>Año: </b>{product.year}</p>
                        </Col>
                        <Col md={5} xs={4} lg={5} >
                            <p><b>Precio: </b>S/. {product.precio_aseguradora}</p>
                            <p><b>Precio del Mercado: </b>S/. {product.precio_mercado}</p>
                            <button>Comprar</button>
                        </Col>
                    </Row>
                )
              })
          }
       </div>
    </div>
 );

 const Into = ({ selectedSection, products }) => (
    <div
       id="into"
       className={'collapse ' + (selectedSection == 'into' ? 'show' : 'hide')}
    >
       <div className="card card-body py-5">
          {
              products.interiores.map((product, index) => {
                return (
                    <Row key={index}>
                        <Col md={2} xs={4} lg={2} >
                            <img className='product-img' src={product.img} />
                        </Col>
                        <Col md={5} xs={4} lg={5} >
                            <h4>{product.articulo}</h4>
                            <p><b>Marca: </b>{product.marca}</p>
                            <p><b>Modelo: </b>{product.modelo}</p>
                            <p><b>Año: </b>{product.year}</p>
                        </Col>
                        <Col md={5} xs={4} lg={5} >
                            <p><b>Precio: </b>S/. {product.precio_aseguradora}</p>
                            <p><b>Precio del Mercado: </b>S/. {product.precio_mercado}</p>
                            <button>Comprar</button>
                        </Col>
                    </Row>
                )
              })
          }
       </div>
    </div>
 );

 const Mecanic = ({ selectedSection, products }) => (
    <div
       id="mecanic"
       className={'collapse ' + (selectedSection == 'mecanic' ? 'show' : 'hide')}
    >
       <div className="card card-body py-5">
          {
              products.mecanica.map((product, index) => {
                return (
                    <Row key={index}>
                        <Col md={2} xs={4} lg={2} >
                            <img className='product-img' src={product.img} />
                        </Col>
                        <Col md={5} xs={4} lg={5} >
                            <h4>{product.articulo}</h4>
                            <p><b>Marca: </b>{product.marca}</p>
                            <p><b>Modelo: </b>{product.modelo}</p>
                            <p><b>Año: </b>{product.year}</p>
                        </Col>
                        <Col md={5} xs={4} lg={5} >
                            <p><b>Precio: </b>S/. {product.precio_aseguradora}</p>
                            <p><b>Precio del Mercado: </b>S/. {product.precio_mercado}</p>
                            <button>Comprar</button>
                        </Col>
                    </Row>
                )
              })
          }
       </div>
    </div>
 );

const Sale = ({ selectedSection , products}) => {

    return (
        <div className="container">
            <Bar onCollapseClick={e => selectSectionAction(e)} />
            <Out selectedSection={selectedSection} products={products}/>
            <Mecanic selectedSection={selectedSection} products={products}/>
            <Into selectedSection={selectedSection} products={products}/>
            <Carroceria selectedSection={selectedSection} products={products}/>
            {/* <Footer /> */}
        </div>
    )
}

export default Sale;