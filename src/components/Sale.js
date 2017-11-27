import React from 'react';
import '../styles/sale.css';

const Sale = ({ successLogin }) => {
    const process = ['Start order', 'Prepare gift', 'Pack gift', 'Decorate box', 'Send gift'].map((steps, index) => {
        return (
            <div class="progress_inner__step">
                <label for="step-<%= i + 1 %>">#{index}</label>
            </div>
        )
    })

    const proceso = ['Start order', 'Prepare gift', 'Pack gift', 'Decorate box', 'Send gift'].map((steps, index) => {
        return (
            <div class="tab-<%= i %> tab">
                <h1>#{steps}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>
            </div>
        )
    })
    return (
        <div class="progress">
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

export default Sale;