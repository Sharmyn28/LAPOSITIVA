import React from 'react';
import '../styles/process.css';

const Process = ({ successLogin }) => {
    const process = ['Registrarse', 'Subasta o Venta', 'Escoger la pieza', 'Hacer Pago', 'Esperar entrega'].map((e, index) => {
        console.log(process);
        return (
            <div class="progress_inner__step" key={index}>
                <label for="step-<%= i + 1 %>">#{e}</label>
            </div>
        )
    })

    const proceso = ['Start order', 'Prepare gift', 'Pack gift', 'Decorate box', 'Send gift'].map((e) => {
        return (
            <div class="tab-<%= i %> tab">
                <h1>#{e}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>
            </div>
        )
    })
    return (
        <div class="">
            <div class="progress_inner">
                {process}
                <input checked="checked" id="step-1" name="step" type="radio"></input>
                <input id="step-<%= i + 1 %>" name="step" type="radio"></input>
                <div class="progress_inner__bar"></div>
                <div class="progress_inner__bar--set"></div>
                <div class="progress_inner__tabs">
                    {proceso}
                </div>
                <div class="progress_inner__status">
                    <div class="box_base"></div>
                    <div class="box_lid"></div>
                    <div class="box_ribbon"></div>
                    <div class="box_bow">
                        <div class="box_bow__left"></div>
                        <div class="box_bow__right"></div>
                    </div>
                    <div class="box_item"></div>
                    <div class="box_tag"></div>
                    <div class="box_string"></div>
                </div>
            </div>
        </div>
    )
}

export default Process;