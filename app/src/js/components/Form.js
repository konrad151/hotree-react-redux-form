import React from 'react';
import { reduxForm } from 'redux-form';
import About from './About';
import Coordinator from './Coordinator';
import When from './When';
 
class EventForm extends React.Component {
    constructor(props){
        super(props);
    }
	componentDidMount() {
		const radioPaidEvent = document.querySelector("#radio-paid-event input");
		const radioFreeEvent = document.querySelector("#radio-free-event input");
		radioPaidEvent.addEventListener( 'change', function() {
			if(this.checked) {
				document.querySelector("#event-fee").style.display="inline";
			}
		});
		radioFreeEvent.addEventListener( 'change', function() {
			if(this.checked) {
				document.querySelector("#event-fee").style.display="none";
			}
		});
	}
    onSubmit( wartosciZFormularz ) {
		if (wartosciZFormularz.reward === undefined){
			wartosciZFormularz.reward = null;
		}
		if (wartosciZFormularz.category_id === undefined){
			wartosciZFormularz.category_id = null;
		}
		if (wartosciZFormularz.id === undefined){
			wartosciZFormularz.id = 3;
		}
		if (wartosciZFormularz.paid_event == false){
			wartosciZFormularz.event_fee = null;
		}
		if (wartosciZFormularz.email === undefined){
			wartosciZFormularz.email = null;
		}
		const results = JSON.parse(`
		{
			"title": "${wartosciZFormularz.title}",
			"description": "${wartosciZFormularz.description}",
			"category_id": ${wartosciZFormularz.category_id},
			"paid_event": ${wartosciZFormularz.paid_event},
			"event_fee": ${wartosciZFormularz.event_fee},
			"reward": ${wartosciZFormularz.reward},
			"date": "${wartosciZFormularz.date}T${wartosciZFormularz.time}",
			"coordinator": {
				"email": "${wartosciZFormularz.email}",
				"id": "${wartosciZFormularz.id}"
			}
		}
		`);
		console.log(results);
    }
    render(){
        const { handleSubmit } = this.props
		
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
				<About categories={this.props.categories} />
				<Coordinator employes={this.props.employes} />
				<When />
                <button type="submit">Publish event</button>
            </form>
        )
    }
}

function validateForm(values){
  const errors = {};

	if ( !values.title )
		errors.title = 'Plese enter title'
	if ( !values.description )
		errors.description = 'Please enter description'
	if ( !values.event_fee && values.paid_event )
		errors.event_fee = 'Please enter price'
	if ( values.paid_event === undefined )
		errors.paid_event = 'Please choose one'
	if ( values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) )
		errors.email = 'Invalid email address'
	if ( values.date === undefined || values.time === undefined )
		errors.time = 'Please choose date and time'

  	return errors
}

export default reduxForm({
	form: 'event',
	validate: validateForm
})(EventForm);