import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { addAution } from '../actions/actions'

class Formul extends React.Component{
    render () {
        const {add, index} = this.props;
        return(
            <form onSubmit={(e) => {
                e.preventDefault();
                if (this.inputRef.value !== '')
                    add(this.inputRef.value, index);
                this.inputRef.value = '';
            }}>
                <input type='number' className='input-price' ref={(e) => { this.inputRef = e }} />
                <button>Aumentar Subasta</button>
            </form>
        );
    }
}



class Aution extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <div className='container'>
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
                                        <p><b>Precio Actual: </b>S/. {product.precio_subasta}</p>
                                        <p><b>Precio Base: </b>S/. {product.precio_base}</p>
                                            <Formul index={index} add={addAution}/>
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </div>
            </div>)
    }
}

export default Aution;