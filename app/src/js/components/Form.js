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
    onSubmit( fieldValue ) {

		if (fieldValue.reward === undefined){
			fieldValue.reward = null;
		}
		if (fieldValue.category_id === undefined){
			fieldValue.category_id = null;
		}
		if (fieldValue.id === undefined){
			fieldValue.id = 3;
		}
		if (fieldValue.paid_event == false){
			fieldValue.event_fee = null;
		}
		if (fieldValue.email === undefined){
			fieldValue.email = null;
		}

		let durationInSeconds;
		if (fieldValue.duration === undefined ){
			durationInSeconds = null;
		} else {
			durationInSeconds = fieldValue.duration * 60 * 60;
			fieldValue.duration = fieldValue.duration;
		}

		const results = JSON.parse(`
		{
			"title": "${fieldValue.title}",
			"description": "${fieldValue.description}",
			"category_id": ${fieldValue.category_id},
			"paid_event": ${fieldValue.paid_event},
			"event_fee": ${fieldValue.event_fee},
			"reward": ${fieldValue.reward},
			"date": "${fieldValue.date}T${fieldValue.time}",
			"duration": ${durationInSeconds},
			"coordinator": {
				"email": "${fieldValue.email}",
				"id": "${fieldValue.id}"
			}
		}
		`);
		console.log(results);
		document.querySelector('form').innerHTML = `
			<section id="success" class="success">
				<div class="container">
					<div class="section-wrapper">

						<h2>Success</h2>
						<p>Event has been created, check console</p>
						
					</div>
				</div>
			</section>
		`;
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