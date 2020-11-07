import React from 'react';
import { Row, Col } from 'react-grid-system';
import "../styles/Contact.scss";
import { FiMessageSquare } from "react-icons/fi";
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

// Create component for button
class Button extends React.Component {
  render() {
    return (
      <fieldset>
        <button
          type={this.props.type || 'button'}
          value={this.props.value || null}
        >
         <FiMessageSquare/> {this.props.text}
        </button>
      </fieldset>
    );
  }
};

// Create component for datalist input
class Datalist extends React.Component {
  render() {
    // Get all options from option prop
    const dataOptions = this.props.options.split(', ');

    // Generate list of options
    const dataOptionsList = dataOptions.map((dataOption, index) => {
      return <option key={index} value={dataOption} />
    });

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        
        <input list={this.props.htmlFor} placeholder="What is your budget?" name="budget"/>
          
        <datalist
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>What are you interested in?</option>

          {dataOptionsList}
        </datalist>
      </fieldset>
    );
  }
};

// Create component for label
class Label extends React.Component {
  render() {
    if (this.props.hasLabel === 'true') {
      return <label htmlFor={this.props.htmlFor}>{this.props.label}</label>
    }
  }
}

// Create component for input
class Input extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <input
          id={this.props.htmlFor}
          max={this.props.max || null}
          min={this.props.min || null}
          name={this.props.name || null}
          placeholder={this.props.placeholder || null}
          required={this.props.required || null}
          step={this.props.step || null}
          type={this.props.type || 'text'}
        />
      </fieldset>
    );
  }
}

// Create component for select input
class Select extends React.Component {
  render() {
    // Get all options from option prop
    const selectOptions = this.props.options.split(', ');

    // Generate list of options
    const selectOptionsList = selectOptions.map((selectOption, index) => {
      return <option key={index} value={index}>{selectOption}</option>
    });

    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />
        
        <select
          defaultValue=''
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
        >
          <option value='' disabled>What are you interested in?</option>

          {selectOptionsList}
        </select>
      </fieldset>
    );
  }
};

// Create component for textarea
class Textarea extends React.Component {
  render() {
    return (
      <fieldset>
        <Label
          hasLabel={this.props.hasLabel}
          htmlFor={this.props.htmlFor}
          label={this.props.label}
        />

        <textarea
          cols={this.props.cols || null}
          id={this.props.htmlFor}
          name={this.props.name || null}
          required={this.props.required || null}
          rows={this.props.rows || null}
        >
        </textarea>
      </fieldset>
    );
  }
};

// Create component for form
class Form extends React.Component {  
  render() {
    function sendEmail(e) {
      e.preventDefault();
  
      emailjs.sendForm('gmail', 'template_97jqy78', e.target, 'user_ecnp3wpiHTrqkvQRmiNbZ')
        .then((result) => {
            console.log(result.text);
            swal("Successfully Submitted!", "I will get back to you soon!", "success");
        e.target.reset()

        }, (error) => {
            console.log(error.text);
        });
    }

    return (
      <form onSubmit={sendEmail}>
        <Input
          hasLabel='true'
          htmlFor='textInput'
          label='Your Name'
          required='true'
          placeholder='What is your name?'
          type='text'
          name='name'
        />
        
        <Input
          hasLabel='true'
          htmlFor='emailInput'
          label='Your Email'
          required='true'
          placeholder='What is your email address?'
          type='email'
          name='email'
        />
        
        <Input
          hasLabel='true'
          htmlFor='numberInput'
          label='Your Phone Number'
          required='false'
          placeholder='What is your phone number?'
          type='number'
          name='phone'
        />
        
        <Select
          hasLabel='true'
          htmlFor='select'
          label='Service'
          options='Need help with a one-off project, Looking for a long term partnership, Want to hire a full-time, Just wanted to say hi!'
          required='true'
          name='service'
        />

        <Datalist
          hasLabel='true'
          htmlFor='datalist'
          label='Budget'
          options='$500 - $1000, $1000 - $2000, $2000 - $4000, $4000 - $5000, $5000 or more'
          required='true'
          name='budget'
        />
        
        <Textarea
          hasLabel='true'
          htmlFor='textarea'
          label='Message'
          required='false'
          placeholder='What is your message?'
          name='message'
        />
        
        <Button
          id='submitbutton'
          type='submit'
          value='submit'
          text='Send Message'
        />
      </form>
    
    )
  }
}

const Contact = () => {
    return (
      <>
      <div>
        <div className="wrapper5">
        <h5>
            <Row>
            <Col sm={7}>
            <p className="About-Title-font">DEVELOPMENT SERVICES</p>
            <strong className="About-Platforms-font">
            Get in touch 
            <br></br>
          — let’s work together.
            </strong>
            <br></br>
          <b className="About-Detail">
          Got a project? Drop me a line if you want to work together on something exciting. Big or small.
          </b>
            </Col>
            <Col sm={5}>
            <br></br>
            <Form />
            </Col>
            </Row>
        </h5>
        </div>
        <hr></hr>
      </div>
      </>
    )
}

export default Contact