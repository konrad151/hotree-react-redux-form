import React from 'react';
import { Field } from 'redux-form';
import { CategoriesSelectField } from './CategoriesSelectField';

export default class About extends React.Component {
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
    renderRadioFree(field){
        return(
            <span>
                <input  { ...field.input } type={field.type} />
                {'Free event'}
            </span>
        )
    }
    renderRadioPaid(field){
        return(
            <span>
                <input  { ...field.input } type={field.type} />
                {' Paid event '}
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </span>
        )
    }
    render() {
        const categoriesToCategory = categories => {
            const key = categories.id;
            const categoryName = categories.name;
            const categoryId = categories.id;
            return <CategoriesSelectField key={key} categoryName={categoryName} categoryId={categoryId} />;
        };
		const normalizeBooleanFree = value => {
			if (value === "true") {
				return true;
			}
			if (value === "false") {
				return false;
			}
			return value;
		};
		const normalizeBooleanPaid = value => {
			if (value === "true") {
				return true;
			}
			if (value === "false") {
				return false;
			}
			return value;
		};
        return (
            <section id="about" className="about">
                <div className="container">
                    <div className="section-wrapper">

                        <h2>About</h2>
                        <div className="about__title d-flex">
                            <h3 htmlFor="title">Title</h3>
                            <Field name="title" type="text" placeholder="Make it short and clear" component={this.RenderInput} />
                        </div>
                        <div className="about__desciption d-flex">
                            <h3 htmlFor="description">Description</h3>
                            <Field name="description" type="text" placeholder="Write about your event, be creative" component={this.RenderInput}  />
                        </div>
                        <div className="about__category d-flex">
                            <h3 htmlFor="category_id">Category</h3>
                            <span>
                                <Field name="category_id" component="select">
                                    <option value="">Select category</option>
                                    {this.props.categories.map(categoriesToCategory)}
                                </Field>
                                <div className="mini-description">
                                    <p>Max length 140 characters</p>
                                </div>
                            </span>
                        </div>
                        <div className="about__payment d-flex">
                            <h3>Payment</h3>
                            <span className="formRadio">
                                <label id="radio-free-event"> 
                                    <Field
                                        name="paid_event"
                                        type="radio"
                                        component={this.renderRadioFree}
                                        value={false}
                                        normalize={normalizeBooleanFree}
                                    />
                                </label>
                                <label id="radio-paid-event">
                                    <Field
                                        name="paid_event"
                                        type="radio"
                                        component={this.renderRadioPaid}
                                        value={true}
                                        normalize={normalizeBooleanPaid}
                                    />
                                </label>
                                <label id="event-fee">
                                    <Field
                                        name="event_fee"
                                        type="number"
                                        placeholder="Fee"
                                        component={this.RenderInput}
                                    />
                                </label>
                            </span>
                        </div>
                        <div className="about__reward d-flex">
                            <h3 htmlFor="reward">Reward</h3>
                            <Field name="reward" type="number" placeholder="Number" component={this.RenderInput} />
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}