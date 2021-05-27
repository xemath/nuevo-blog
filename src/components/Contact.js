import React from 'react';
import emailjs from 'emailjs-com';


function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_n2mznhm', 'template_kx5fiaz', e.target, 'user_VxHqOfnyCC2XnfEVN75pE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

    return (
        <div className="container-fluid fondo-about p-0">
        <div className="row">
            <h1 className="display-2 titulo text-center mt-5">contactame</h1>
        </div>
        <div className="row">
            <div className="col-sm-6 mx-auto">
                <form onSubmit={sendEmail}>
                    <div className="mb-2">
                      <label for="exampleInputEmail1" className="form-label">Tu Email</label>
                      <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-2">
                      <label for="exampleInputPassword1" className="form-label">Tema</label>
                      <input type="text" className="form-control" id="exampleInputPassword1" name="titulo"/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword2" className="form-label">Descripcion</label>
                        <textarea rows="5" className="form-control" id="exampleInputPassword2" name="texto"></textarea>
                      </div>
                    
                    <button type="submit" className="btn btn-dark mx-auto">Enviar</button>
                  </form>
            </div>
        </div>
      </div>
    )
}

export default Contact
