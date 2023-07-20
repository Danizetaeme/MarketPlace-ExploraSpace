import React from 'react';
import './Contact.css';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Banner } from '../../components/Banner/Banner';


export const Contact = () => {
// const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Aquí puedes agregar lógica para enviar el formulario si lo necesitas.
//     // Por ahora, simplemente actualizaremos el estado para indicar que el formulario ha sido enviado.
//     setFormSubmitted(true);
//   };
  return (
    <div className="Contact-page-container">
        <Header />
        <Banner />
        <div className="contact-conteiner">
            <div className="contact-title">
                <h2 >Contactanos</h2>
            </div>
            <div className="contact-formulario">
            
                        <form action="" method="" className="formulario" id="formulario">
                          
                            <div className="formulario__grupo">
                                <label htmlFor="nombre" className="formulario__label">Nombre</label>
                                <div className="formulario__grupo-input">
                                    <input type="text" class="formulario__input" name="nombre" id="nombre"
                                        placeholder="John Doe"  required/>
                                </div>
                            </div>

                            <div className="formulario__grupo" id="grupo__apellido">
                                <label htmlFor="apellido" className="formulario__label">Apellido</label>

                                <div class="formulario__grupo-input">
                                    <input type="text" className="formulario__input" name="apellido" id="apellido"
                                        placeholder="López Ruiz"  required/>
                                </div>
                            </div>

                            <div className="formulario__grupo" id="grupo__telefono">
                                <label htmlFor="telefono" class="formulario__label">Movil</label>

                                <div className="formulario__grupo-input">
                                    <input type="tel" class="formulario__input" name="telefono" id="telefono"
                                        placeholder="654 987 432"  required/>
                                </div>
                            </div>

                            <div className="formulario__grupo" id="grupo__correo">
                                <label htmlFor="correo" className="formulario__label">Email</label>

                                <div className="formulario__grupo-input">
                                    <input type="email" className="formulario__input" name="correo" id="correo"
                                        placeholder="correo@correo.com" required />
                                </div>
                            </div>

                            <div className="formulario__grupo" id="grupo__comentario">
                                <label htmlFor="comentario" className="formulario__label">Comentario</label>
                                <div class="formulario__grupo-input">
                                    <textarea className="formulario__input" id="comentario" name="comentario"
                                        placeholder="Cuéntanos cómo podemos ayudarte.." required></textarea>
                                </div>
                            </div>

                           
                            <div className="formulario__grupo" id="grupo__terminos">
                                <label className="formulario__label">
                                    <input className="formulario__checkbox" type="checkbox" name="terminos" id="terminos" />
                                    Acepto los Terminos y Condiciones
                                </label>
                            </div>
                            
                            <div className="formulario__grupo formulario__grupo-btn-enviar">
                                <button type="submit" className="formulario__btn">Enviar</button>
                                
                            </div>
                        </form>
                        {/* {formSubmitted && (
            <p>Formulario enviado correctamente. Nos pondremos en contacto contigo lo antes posible.</p>
          )}   */}
            </div>
        </div>
      <Footer />
    </div>
  );
};