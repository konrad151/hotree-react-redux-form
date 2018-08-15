import React from 'react';
import { Field } from 'redux-form';
import { EmployesSelectField } from './EmployesSelectField';

export default class Coordinator extends React.Component {
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
        const employesToCategory = employes => {
            const key = employes.id;
            const employesId = employes.id;
            const employesName = employes.name;
            const employesLastName = employes.lastname;
            return <EmployesSelectField key={key} employesId={employesId} employesName={employesName} employesLastName={employesLastName} />;
        };
        const notId3 = objects => {
            if (objects.id != 3) {
                return objects.id != 3;
            }
        };
        return (
            <section id="coordinator" className="coordinator">
                <div className="container">
                    <div className="section-wrapper">

                        <h2>Coordinator</h2>
                        <div className="coordinator__employes">
                            <label htmlFor="id">Responsible</label>
                            <Field name="id" component="select">
                                <option value={this.employesId = 3}>{this.employesName = "Walter"} {this.employesLastName = "Nelson"}</option>
                                {this.props.employes.filter(notId3).map(employesToCategory)}
                            </Field>
                        </div>
                        <div className="coordinator__email">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" placeholder="Email" component={this.RenderInput} />
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}