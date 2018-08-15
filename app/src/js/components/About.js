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
                    // value={field.defaultValue}
                />
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </span>
        )
    }
    renderRadioFree(field){
        return(
            <span>
                {/* <input
                    { ...field.input } type={field.type} placeholder={field.placeholder}
                    className={field.meta.error ? "error" : ""}
                    // value={field.defaultValue}
                />
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''} */}
                <input  { ...field.input } type={field.type} />

            </span>
        )
    }
    renderRadioPaid(field){
        return(
            <span>
                {/* <input
                    { ...field.input } type={field.type} placeholder={field.placeholder}
                    className={field.meta.error ? "error" : ""}
                    // value={field.defaultValue}
                />
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''} */}
                <input  { ...field.input } type={field.type} />
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
		// const normalizeNumber = value => {
		// 	if (typeof value === "string" && value == '') {
		// 		return "";
		// 	}
		// 	if (typeof value === "string") {
		// 		return parseInt(value);
		// 	}
		// 	return value;
		// };
        return (
            <section id="about" className="about">
                <div className="container">
                    <div className="section-wrapper">

                        <h2>About</h2>
                        <div className="about__title">
                            <label htmlFor="title">Title</label>
                            <Field name="title" type="text" placeholder="Make it short and clear" component={this.RenderInput} />
                        </div>
                        <div className="about__desciption">
                            <label htmlFor="description">Description</label>
                            <Field name="description" type="text" placeholder="Write about your event, be creative" component={this.RenderInput}  />
                        </div>
                        <div className="about__category">
                            <label htmlFor="category_id">Category</label>
                            <Field name="category_id" component="select">
                                <option value="">Select category</option>
                                {this.props.categories.map(categoriesToCategory)}
                            </Field>
                        </div>
                        <div className="about__payment">
                            <label>Payment</label>
                            <span className="formRadio">
                                <label id="radio-free-event">
                                    {'Free event'} 
                                    <Field
                                        name="paid_event"
                                        type="radio"
                                        component={this.renderRadioFree}
                                        value={false}
                                        normalize={normalizeBooleanFree}
                                    />
                                    {/* <Field
                                        name="paid_event"
                                        component="input"
                                        type="radio"
                                        value="false"
                                        normalize={normalizeBooleanFree}
                                    />{'Free event'} */}
                                </label>
                                <label id="radio-paid-event">
                                    {' Paid event '}
                                    <Field
                                        name="paid_event"
                                        type="radio"
                                        component={this.renderRadioPaid}
                                        value={true}
                                        normalize={normalizeBooleanPaid}
                                    />
                                    {/* <Field
                                        name="paid_event"
                                        component="input"
                                        type="radio"
                                        value="true"
                                        normalize={normalizeBooleanPaid}
                                    />{' Paid event '} */}
                                </label>
                                <label id="event-fee">
                                    <Field
                                        name="event_fee"
                                        type="number"
                                        placeholder="Fee"
                                        component={this.RenderInput} 
                                        // normalize={normalizeNumber} 
                                    />
                                </label>
                            </span>
                        </div>
                        <div className="about__reward">
                            <label htmlFor="reward">Reward</label>
                            <Field name="reward" type="number" placeholder="Number" component={this.RenderInput} />
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}