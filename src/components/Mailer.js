import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import Table from 'react-bootstrap/Table'
import Button from '@restart/ui/esm/Button';
import Alert from 'react-bootstrap/Alert';

const initialValues = {
    name: "Name *",
    company: "Company",
    email: "Email *",
    phone: "Phone",
    message: "Message",
};

const Mailer = () => {
        
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
    }
    
    return (
        <div>
            <div className='box5'>
                
                <form onSubmit={sendEmail} >
                    <div>
                    <Table borderless >
                        <tbody>
                        <tr>
                            <td style={{ paddingLeft: '5%' }}><input  type="text" name="name" placeholder={values.name} onChange={handleInputChange} className="form-control" required style={{ width: '90%'}}/></td>
                            <td><input type="text" name="company" placeholder={values.company} onChange={handleInputChange} className="form-control" style={{ width: '80%'}}/></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5%' }}><input type="text" name="email" placeholder={values.email} onChange={handleInputChange} className="form-control" required style={{ width: '90%', marginTop:"0"}}/></td>
                            <td><input type="text" name="phone"  placeholder={values.phone} onChange={handleInputChange} className="form-control" style={{ width: '80%', marginTop:"0"}}/></td>
                        </tr>
                        <tr>
                            <td style={{ paddingLeft: '5%' }} colSpan="4"><input type="text" name="message" placeholder={values.message} onChange={handleInputChange} className="form-control" style={{ marginTop:'1%', height: '180px', width: '90%'}}/></td>
                        </tr>
                        </tbody>
                        
                                    
                    </Table>
                    </div>
                    <div>
                    <Alert show={show} variant="success">
                        <Alert.Heading>You have sent a Message</Alert.Heading>
                        <div className="d-flex justify-content-center">
                            <Button  onClick={() => setShow(false)} variant="outline-success">
                                Close me y'all!
                            </Button>
                        </div>
                    </Alert>
                    {!show && <input onClick={() => setShow(true)} type='submit' value='Send Message' className='btn btn-background-slide' style={{ marginTop:'0', marginLeft: '5%', width: '20%'}} /> }
                    </div>
                </form>
            </div>
            <div className='boxfooter'>
            </div>
        </div>
    )
}

export default Mailer
