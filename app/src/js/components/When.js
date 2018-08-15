import React from 'react';
import { Field } from 'redux-form';

export default class When extends React.Component {
    RenderInputDate(field){
        return(
            <span className="formInput">
                <input
                    { ...field.input } type={field.type} min={field.min}
                    className={field.meta.error ? "error" : ""}
                />
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </span>
        )
    }
    RenderInput(field){
        return(
            <span className="formInput">
                <input
                    { ...field.input } type={field.type} placeholder={field.placeholder}
                    className={field.meta.error ? "error" : ""}
                />
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </span>
        )
    }
    render() {
        function formatDate(date) {
            var monthNames = [
              "01", "02", "03",
              "04", "05", "06", "07",
              "08", "09", "10",
              "11", "12"
            ];
            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();
            return year + '-' + monthNames[monthIndex] + '-' + day;
          }
        return (
            <section id="when" className="when">
                <div className="container">
                    <div className="section-wrapper">

                        <h2>When</h2>
                        <div className="when__starts-on">
                            <label htmlFor="startson">Starts on</label>
                            <Field name="date" type="date" min={formatDate(new Date())} component={this.RenderInputDate} />
                            <span>at</span>
                            <Field name="time" type="time" component={this.RenderInput} />
                        </div>
                        <div className="when__duration">
                            <label htmlFor="duration">Duration</label>
                            <Field name="duration" type="number" placeholder="Number" component={this.RenderInput} />
                            <span>hour</span>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}