import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Alert from 'react-bootstrap/Alert'
import Button from '@restart/ui/esm/Button';


const initialValues = {
    name: "Name *",
    company: "Company",
    email: "Email *",
    phone: "Phone",
    message: "Message",
};

const Quote = () => {
        
    const [values, setValues] = useState(initialValues);
    const [show, setShow] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };
 
    
    function sendEmail(e){
      e.preventDefault();
      
      emailjs.sendForm('service_fl980wd', 'template_peuofox', e.target, 'user_XzBLgiIz1VGwAG6koE2Jd').then(res=>{
        console.log(res);
      }).catch(err => console.log(err));

    };


    return (
        
        <div>
            <div className='box5'>
                <form onSubmit={sendEmail} >
                    <li><h5>Quote Form</h5></li>
                    <li><input type="text" name="name" placeholder={values.name} onChange={handleInputChange} className="form-control" required style={{ width: '90%', marginTop:"1%", marginLeft:'5%'}}/></li>
                    <li><input type="text" name="company" placeholder={values.company} onChange={handleInputChange} className="form-control" style={{ width: '90%', marginTop:"1%", marginLeft:'5%'}}/></li>    
                    <li><input type="text" name="email" placeholder={values.email} onChange={handleInputChange} className="form-control" required style={{ width: '90%', marginTop:"1%", marginLeft:'5%'}}/></li>
                    <li><input type="text" name="phone"  placeholder={values.phone} onChange={handleInputChange} className="form-control" style={{ width: '90%', marginTop:"1%", marginLeft:'5%'}}/></li>
                    <li><input type="text" name="message" placeholder={values.message} onChange={handleInputChange} className="form-control" style={{ marginTop:'1%', height: '180px', width: '90%', marginLeft:'5%'}}/></li>
                    <label style={{ marginTop:'1%', marginLeft: '5%', width: '20%'}}><input type="checkbox" name="includeinstallation" style={{ marginLeft: '1%', width: '20%'}}/>Include Installation</label>
                    
                    <li>
                        <Alert show={show} variant="success">
                            <Alert.Heading>You have sent a Message</Alert.Heading>
                            <div className="d-flex justify-content-center">
                                <Button onClick={() => setShow(false)} variant="outline-success">
                                    Close me y'all!
                                </Button>
                            </div>
                        </Alert>
                        {!show && <input onClick={() => setShow(true)} type='submit' value='Send Message' className='btn btn-background-slide' style={{ marginTop:'1%', marginLeft: '5%', width: '20%'}} /> }
                
                    </li>
                </form>
            </div>
            <div className='boxfooter'>
            </div>
            
        </div>
        
    )
}


                   
export default Quote