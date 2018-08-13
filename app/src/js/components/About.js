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
    render() {
        // const category = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];

        const categoriesToCategory = categories => {
            const key = categories.id;
            const categoryName = categories.name;
            return <CategoriesSelectField key={key} categoryName={categoryName} />;
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
		const normalizeNumber = value => {
			if (typeof value === "string" && value == '') {
				return "";
			}
			if (typeof value === "string") {
				return parseInt(value);
			}
			return value;
		};
        return (
            <section id="about">
                <div className="container">
                    <div className="section-wrapper">
                        <h2>About</h2>

                        <div>
                            <label htmlFor="title">Title</label>
                            <Field name="title" type="text" placeholder="Make it short and clear" component={this.RenderInput} />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <Field name="description" type="text" placeholder="Write about your event, be creative" component={this.RenderInput}  />
                        </div>
                        <div>
                            <label htmlFor="category_id">Category</label>
                            <Field name="category_id" component="select">
                                <option value="">Select category</option>
                                {this.props.categories.map(categoriesToCategory)}
                            </Field>
                        </div>
                        <div>
                            <label>Payment</label>
                            <div>
                                <label id="radio-free-event">
                                    <Field
                                        name="paid_event"
                                        component="input"
                                        type="radio"
                                        value={false}
                                        normalize={normalizeBooleanFree}
                                        
                                    />{' '}
                                    Free event
                                </label>
                                <label id="radio-paid-event">
                                    <Field
                                        name="paid_event"
                                        component="input"
                                        type="radio"
                                        value={true}
                                        // defaultValue={true}
                                        normalize={normalizeBooleanPaid}
                                    />{' '}
                                    Paid event
                                </label>
                                <label id="event-fee">
                                    <Field name="event_fee" type="number" placeholder="Fee" component={this.RenderInput} normalize={normalizeNumber} />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="reward">Reward</label>
                            <Field name="reward" type="number" placeholder="Number" component={this.RenderInput} normalize={normalizeNumber}/>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}