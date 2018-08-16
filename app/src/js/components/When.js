import React from 'react';
import { Field } from 'redux-form';

export default class When extends React.Component {
    RenderInputDate(field){
        return(
            <span className="date-field">
                <input
                    { ...field.input } type={field.type} min={field.min}
                />
            </span>
        )
    }
    RenderInputTime(field){
        return(
            <span className="time-field d-inline-flex align-items-center">
                <input
                    { ...field.input } type={field.type} placeholder={field.placeholder}
                />
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </span>
        )
    }
    RenderInputDuration(field){
        return(
            <span className="duration-field">
                <input
                    { ...field.input } type={field.type} placeholder={field.placeholder}
                />
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
                        <div className="when__starts-on mb-15 d-flex">
                            <h3 className="required">Starts on</h3>
                            <span className="when__starts-on-field">
                                <Field name="date" type="date" min={formatDate(new Date())} component={this.RenderInputDate} />
                                <span className="simple-text">at</span>
                                <Field name="time" type="time" component={this.RenderInputTime} />
                            </span>
                        </div>
                        <div className="when__duration d-flex">
                            <h3>Duration</h3>
                            <span className="when__duration-field">
                                <Field name="duration" type="number" placeholder="Number" component={this.RenderInputDuration} />
                                <span className="simple-text">hour</span>
                            </span>
                        </div>
                        
                    </div>
                </div>
            </section>
        );
    }
}