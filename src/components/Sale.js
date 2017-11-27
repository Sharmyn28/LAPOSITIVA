import React from 'react';

const Sale = ({ successLogin }) => {
    return (
        <div class="progress">
            <div class="progress_inner">

                <div class="progress_inner__step">
                    <label for="step-<%= i + 1 %>">#</label>
                </div>
                <input checked="checked" id="step-1" name="step" type="radio"></input>
                <input id="step-<%= i + 1 %>" name="step" type="radio"></input>
                <div class="progress_inner__bar"></div>
                <div class="progress_inner__bar--set"></div>
                <div class="progress_inner__tabs">

                    <div class="tab-<%= i %> tab">
                        <h1>#</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor ipsum, eleifend vitae massa non, dignissim finibus eros. Maecenas non eros tristique nisl maximus sollicitudin.</p>
                    </div>

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