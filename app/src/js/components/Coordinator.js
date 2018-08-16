import React from 'react';
import { Field } from 'redux-form';
import { EmployesSelectField } from './EmployesSelectField';

export default class Coordinator extends React.Component {
    RenderInputEmail(field){
        return(
            <span className="email-field">
                <input
                    { ...field.input } type={field.type} placeholder={field.placeholder}
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
                        <div className="coordinator__employes mb-15 d-flex">
                            <h3 className="required">Responsible</h3>
                            <span className="coordinator__employes-field w-80">
                                <Field name="id" component="select">
                                    <option value={this.employesId = 3}>{this.employesName = "Walter"} {this.employesLastName = "Nelson"}</option>
                                    {this.props.employes.filter(notId3).map(employesToCategory)}
                                </Field>
                            </span>
                        </div>
                        <div className="coordinator__email d-flex">
                            <h3>Email</h3>
                            <span className="coordinator__email-field w-80">
                                <Field name="email" type="text" placeholder="Email" component={this.RenderInputEmail} />
                            </span>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}