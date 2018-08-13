import React from 'react';
import { reduxForm } from 'redux-form';
import About from './About';
import Coordinator from './Coordinator';
import When from './When';
 
class EventForm extends React.Component {
    constructor(props){
        super();
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
					// document.querySelector("#event-fee input").value = "";
				}
			});
	  }




 
    onSubmit( wartosciZFormularz ){
        console.log(wartosciZFormularz)
    }
 
    render(){
        const { handleSubmit } = this.props
		
        return (
            <form onSubmit={handleSubmit(this.onSubmit)}>
				<About categories={this.props.categories} />
				<Coordinator />
				<When />
                <button type="submit">Publish event</button>
            </form>
        )
    }
}

function validateForm(values){
  const errors = {};
	
	// @Params
	// name
	// How to use
	// errors.nameField

	if(!values.title)
		errors.title = 'Plese enter title'
	if(!values.description)
		errors.description = 'Please enter description'
	if(!values.event_fee && values.paid_event)
	errors.event_fee = 'Please enter price'
	// if(!values.paid_event != true)
	// errors.paid_event = 'Please choose one'


  return errors
} 

export default reduxForm({
  form: 'event',
  validate: validateForm
})(EventForm);