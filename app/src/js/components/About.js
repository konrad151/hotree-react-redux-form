import React from 'react';
import { Field } from 'redux-form';
import { CategoriesSelectField } from './CategoriesSelectField';



export default class About extends React.Component {
    constructor(){
        super();
        this.state = {
            textareaValue: 0
        };
    }
    handleChange(event) {
        this.setState({ textareaValue: event.target.value.length });
    }
    renderInputTitle(field){
        return(
            <span className="title-field d-flex align-items-center">
                <input
                    { ...field.input } type={field.type} placeholder={field.placeholder}
                />
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </span>
        )
    }
    renderTextarea(field){
        return(
            <div className="d-flex align-items-center">
                <textarea { ...field.input } placeholder={field.placeholder} maxLength={field.maxlength}></textarea>
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </div>
        )
    }
    renderRadioFree(field){
        return(
            <span id="radio-free-event">
                <input  { ...field.input } type={field.type} />
                {<span className="simple-text">Free event</span>}
            </span>
        )
    }
    renderRadioPaid(field){
        return(
            <span id="radio-paid-event">
                <input  { ...field.input } type={field.type} />
                {<span className="simple-text">Paid event</span>}
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </span>
        )
    }
    renderInputFee(field){
        return(
            <span className="fee-field d-flex align-items-center">
                <input
                    { ...field.input } type={field.type} placeholder={field.placeholder} />
                <span className="simple-text">$</span>
                { field.meta.touched ? <span className="error">{field.meta.error}</span> : ''}
            </span>
        )
    }
    renderInputReward(field){
        return(
            <span className="reward-field">
                <input
                    { ...field.input } type={field.type} placeholder={field.placeholder}
                />
                {<span className="simple-text">reward points for attendance</span>}
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
                        <div className="about__title mb-15 d-flex">
                            <h3 className="required">Title</h3>
                            <span className="about__title-field w-80">
                                <Field
                                    name="title"
                                    type="text"
                                    placeholder="Make it short and clear"
                                    component={this.renderInputTitle}
                                />
                            </span>
                        </div>
                        <div className="about__desciption mb-15 d-flex">
                            <h3 className="required">Description</h3>
                            <span className="about__desciption-field w-80">
                                <Field
                                    name="description"
                                    onChange={this.handleChange.bind(this)}
                                    placeholder="Write about your event, be creative"
                                    component={this.renderTextarea}
                                    maxlength="140"
                                />
                                <div className="mini-description">
                                    <span>Max length 140 characters</span>
                                    <span className="mini-description-length">{this.state.textareaValue}/140</span>
                                </div>
                            </span>
                        </div>
                        <div className="about__category mb-35 d-flex">
                            <h3>Category</h3>
                            <span className="about__category-field w-80">
                                <Field name="category_id" component="select">
                                    <option value="">Select category</option>
                                    {this.props.categories.map(categoriesToCategory)}
                                </Field>
                            </span>
                        </div>
                        <div className="about__payment mb-35 d-flex">
                            <h3 className="required">Payment</h3>
                            <span className="about__payment-field">
                                <Field
                                    name="paid_event"
                                    type="radio"
                                    component={this.renderRadioFree}
                                    value={false}
                                    normalize={normalizeBooleanFree}
                                />
                                <Field
                                    name="paid_event"
                                    type="radio"
                                    component={this.renderRadioPaid}
                                    value={true}
                                    normalize={normalizeBooleanPaid}
                                />
                                <span id="event-fee">
                                    <Field
                                        name="event_fee"
                                        type="number"
                                        placeholder="Fee"
                                        component={this.renderInputFee}
                                    />
                                </span>
                            </span>
                        </div>
                        <div className="about__reward d-flex">
                            <h3 htmlFor="reward">Reward</h3>
                            <span className="about__reward-field">
                                <Field
                                    name="reward"
                                    type="number"
                                    placeholder="Number"
                                    component={this.renderInputReward}
                                />
                            </span>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}