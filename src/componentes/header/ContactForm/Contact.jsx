import { useState } from "react"
import { Link } from "react-router-dom"

export const ContactForm =()=>{
    const[contact,setContact]=useState(true)
    
    const genContact=()=>{
        setContact(false)
        
    }
    
    return(
        <>
        {contact ?
            <div>
                    
                {/*Section: Contact v.2*/}
                <section className="mb-4">

                    {/*Section heading*/}
                    <h2 className="h1-responsive font-weight-bold text-center my-4">Contacto</h2>
                    {/*Section description*/}
                    <p className="text-center w-responsive mx-auto mb-5">¿Tiene usted alguna pregunta? Por favor, no dude en contactarnos directamente. Nuestro equipo le responderá lo antes posible para ayudarte.</p>

                    <div className="row">

                        {/*Grid column*/}
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form id="contact-form" name="contact-form" onSubmit={genContact}>

                                {/*Grid row*/}
                                <div className="row">

                                    {/*Grid column*/}
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="name" name="name" className="form-control"/>
                                            <label htmlFor="name" className="">Tu Nombre</label>
                                        </div>
                                    </div>
                                    {/*Grid column*/}

                                    {/*Grid column*/}
                                    <div className="col-md-6">
                                        <div className="md-form mb-0">
                                            <input type="text" id="email" name="email" className="form-control"/>
                                            <label htmlFor="email" className="">Tu email</label>
                                        </div>
                                    </div>
                                    {/*Grid column*/}

                                </div>
                                {/*Grid row*/}

                                {/*Grid row*/}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input type="text" id="subject" name="subject" className="form-control"/>
                                            <label htmlFor="subject" className="">Asunto</label>
                                        </div>
                                    </div>
                                </div>
                                {/*Grid row*/}

                                {/*Grid row*/}
                                <div className="row">

                                    {/*Grid column*/}
                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                            <label htmlFor="message">Tu mensaje</label>
                                        </div>

                                    </div>
                                </div>
                                {/*Grid row*/}

                            </form>

                            <div className="text-center text-md-left">
                                <a className="btn btn-primary" onClick={genContact}>Enviar</a>
                            </div>
                            <div className="status"></div>
                        </div>
                        {/*Grid column*/}

                        {/*Grid column*/}
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                    <p>El Salvador 5218 Soho, CP 1414 Buenos Aires</p>
                                </li>

                                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                    <p>+ 54 000 123456 89</p>
                                </li>

                                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                    <p>contacto@materialesonline.000</p>
                                </li>
                            </ul>
                        
                        </div>
                        {/*Grid column*/}

                    </div>

                </section>
                {/*Section: Contact v.2*/}
            </div>
        :
            <div>
                <br></br>
                <h3>Su consulta fue enviada exitosamente</h3>
                <br></br>
                <Link to="/">
                    <button className="btn btn-outline-primary btn-block">
                        Seguir comprando
                    </button>
                </Link>
          </div>
        }
        </>
    )
}