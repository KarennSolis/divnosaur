import React from 'react'
import { useForm } from "react-hook-form";
import { Navbar1 } from '../Navbar/Navbar1/Navbar1';
import { edadValidator } from "./validators";
import "./formulario.css"

const Formulario = () => {

    const { register, formState: { errors }, watch, handleSubmit, reset } = useForm();
    // const onSubmit = (data) => {
    //     console.log(data);

    //     asyncPostCall(data)
    // }
    const onSubmit = async (data) => {
        console.log(data);
        await asyncPostCall(data);
        reset(); // Resetear los campos del formulario después de enviarlo
      };
    const incluirTelefono = watch('incluirTelefono')
    const incluirHobbies = watch('incluirHobbies')
    const anadirExp = watch('anadirExp')

    const asyncPostCall = async (formData) => {
        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            const { result, message } = data;

            if (result) {
                alert(message)
            } else {
                alert(message)
                window.location.href = "/public/index.html"
            }

        } catch (error) {
            console.error('Error al enviar la solicitud: ', error)
        }
    }

    return <div>
        <Navbar1 />
        <div id="login" className="container-fluid">
            <div className="row">
                <h1 className="text-center">Registrate, es muy fácil</h1>
                <div className="contenedor-Login text-center">
                    {/* <h2 className="tituloLogin text-center">Login</h2> */}
                    <div className="contenedor-Form" id="contenedorForm">
                        <form className="form-horizontal" action="/register" method="post" id="form" onSubmit={handleSubmit(onSubmit)}>
                            <ul id="ul">
                                <li>

                                    <label htmlFor="User" className="visually-hidden"></label>
                                    <input className="form-control" type="text" placeholder="Nombre (8-50 caracteres)" id="user" {...register('name', {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 50
                                    })} />
                                    {errors.name?.type === 'required' && <p className="warnings-z" id="warnings">El campo nombre es requerido</p>}
                                    {errors.name?.type === 'minLength' && <p className="warnings-z" id="warnings">El campo nombre debe tener más de 8 caracteres</p>}
                                    {errors.name?.type === 'maxLength' && <p className="warnings-z" id="warnings">El campo nombre debe tener menos de 50 caracteres</p>}

                                </li>
                                <li>
                                    <label htmlFor="Correo" className="visually-hidden"></label>
                                    <input type="text" placeholder="Correo (example@example.com)" className="form-control" id="Correo"  {...register('email', {
                                        pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                                    })} />
                                    {errors.email?.type === 'pattern' && <p className="warnings-z" id="warnings">El formato del correo es incorrecto</p>}

                                </li>
                                <li>
                                    {/* <!-- cajita para escribir --> */}
                                    <label htmlFor="" className="visually-hidden"></label>
                                    {/* <!-- cajita para poner contraseña oculta --> */}
                                    <input type="password" name="Contraseña" id="Contrasena" placeholder="Password (8-24 caracteres)" className="form-control" {...register('password', {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 24
                                    })} />
                                    {errors.password?.type === 'required' && <p className="warnings-z" id="warnings">El campo password es requerido</p>}
                                    {errors.password?.type === 'minLength' && <p className="warnings-z" id="warnings">El campo password debe tener más de 8 caracteres</p>}
                                    {errors.password?.type === 'maxLength' && <p className="warnings-z" id="warnings">El campo password debe tener menos de 24 caracteres</p>}

                                </li>
                                <li>
                                    <label htmlFor="Edad" className="visually-hidden"></label>
                                    <input type="text" placeholder="Edad" className="form-control" id="age" {...register('age', {
                                        validate: edadValidator
                                    })} />
                                    {errors.age && <p className="warnings-z" id="warnings">Los usuarios deben tener entre 18 y 67 años</p>}
                                </li>
                                <li>
                                    <label htmlFor="exampleDataList" className="form-label">Lugar de residencia</label>
                                    <input className="form-control" list="datalistOptions" id="town"
                                        placeholder="Ciudad" />
                                    <datalist id="datalistOptions">
                                        <option value="España" />
                                        <option value="México" />
                                        <option value="Argentina" />
                                    </datalist>
                                </li>
                                <li>
                                    <label htmlFor="País">Selecione su país de residencia:</label>
                                    <select name="pais" className="form-control" id="country" {...register('country')} defaultValue={"España"}>
                                        <option value="España"> España</option>
                                        <option value="México"> México</option>
                                        <option value="Colombia"> Colombia</option>
                                        <option value="Argentina"> Argentina</option>
                                        <option value="Francia"> Francia</option>
                                        <option value="Italia"> Italia</option>

                                    </select>
                                </li>
                                <li>

                                    <label htmlFor="Telefono" className="">¿Incluir telefono?</label>
                                    <input type="checkbox" {...register('incluirTelefono')} />

                                </li>
                                {incluirTelefono && (
                                    <li>
                                        <label htmlFor="Telefono" className="visually-hidden">Telefono</label>
                                        <input type="text" placeholder="Escriba aquí su Telefono"  {...register('phone')} />
                                    </li>
                                )}






                                <li>
                                    <label htmlFor="exampleFormControlTextareaHobbies">¿Incluir hobbies?</label>
                                    <input type="checkbox" {...register('incluirHobbies')} />

                                </li>
                                {incluirHobbies && (
                                    <li>
                                        {/* <label htmlFor="exampleFormControlTextareaHobbies">Hobbies</label> */}
                                        <textarea type="text" className="form-control" id="hobbies" rows="3"
                                            placeholder="Describa aqui sus hobbies" itemID="hobbies" {...register('hobbies')}></textarea>
                                    </li>
                                )}
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">¿Añadir experiencia laboral?</label>
                                    <input type="checkbox" {...register('anadirExp')} />

                                </div>
                                {anadirExp && (
                                    <li>
                                        <textarea className="form-control" id="experience" rows="3"
                                            placeholder="Describa aquí su experiencia laboral" {...register('experience')}></textarea>
                                    </li>
                                )}
                                <li>
                                    <label htmlFor="formFile" className="form-label">CV</label>
                                    <input className="form-control" type="file" id="formFile" />
                                </li>
                                <li>
                                    <label htmlFor="formFileimg" className="form-label">Imagen de perfil</label>
                                    <input className="form-control" type="file" id="formFileimg" />
                                </li>
                                <li>
                                    <button type="submit" className="btn btn-primary" id="submit">Acceder</button>
                                    <button type="reset" className="btn btn-primary">Borrar</button><br />
                                    <p className="warnings-z" id="warnings"></p>
                                </li>

                            </ul>
                        </form>

                    </div>

                </div>

            </div>

        </div >
    </div >


}

export default Formulario;

