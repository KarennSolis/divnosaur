import { useState } from "react";

export function FollowerProfile(props) {
  const { followerData, recomendaciones, setNewRecomendacion, next, prev, recomendacionActual, user} =
    props;
  const [contenido, setContenido] = useState("");
  const handleContenidoChange = (event) => {
    setContenido(event.target.value);
    console.log(contenido);
  };
  const handleSubmitContenido = async (event) => {
    event.preventDefault();

    try {
      const userRec_id = user.user_id;
      console.log(userRec_id);
      console.log(followerData.user_id);
      const response = await fetch(
        "http://localhost:3001/profile/recomendaciones/new",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("Token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contenido: contenido,
            usuario_emisor_ID: userRec_id,
            usuario_receptor_ID: followerData.user_id,
          }),
        }
      );

      const result = await response.json();
      console.log(result);
      setNewRecomendacion(true);
      setContenido("");
    } catch (error) {
      console.log("Error de red:", error);
    }
  };

  return (
    <div className="container  mothership-b">
      <h1 className="tecler-perfil-b" id="perfilDeUsuario">
        Perfil de {followerData.name}{" "}
      </h1>
      <div className="card p-2 w-100 rounded-5 text-bg-info  border border-primary-subtle shadow">
        <div className="row perfil-row-b">
          <div className="col-5  colum-dat-usu">
            <i className="bi bi-geo-alt-fill bs-icon-b fs-4"></i>
            <p id="locationUser" className="p-perfil-b">
              {followerData.country}
            </p>
          </div>
          <div className="col-2">
            <button className="text-info bg-dark rounded-1" disabled>
              Localización
            </button>
          </div>
          <div className="col-5">
            <p className="text-center fw-bold">
              Recomendaciones de {followerData.name}:{" "}
            </p>
          </div>
        </div>
        <div className="row perfil-row-b">
          <div className="col-5 colum-dat-usu">
            <i className="bi bi-calendar bs-icon-b fs-4"></i>
            <p id="profileBirth" className="p-perfil-b">
              {followerData.age}
            </p>
          </div>
          <div className="col-2">
            <button className="text-info bg-dark rounded-1" disabled>
              Edad
            </button>
          </div>
          <div className="col-5">
            {recomendaciones.length === 0 ? (
              <p className="bi bi-emoji-frown-fill fw-bold text-center">
                Aún no tiene recomendaciones
              </p>
            ) : (
              recomendaciones.map((recomendacion, index) => (
                <div
                  className="text-center border-primary rounded-5 shadow bg-info-subtle p-2"
                  key={recomendacion.recomendacion_ID}
                  style={{
                    display: index === recomendacionActual ? "block" : "none",
                  }}
                >
                  <p className="bi bi-person-heart fw-bold">
                    {" "}
                    {recomendacion.name}
                  </p>
                  <p className="bi bi-chat-left-quote fst-italic">
                    {" "}
                    {recomendacion.contenido}
                  </p>
                  <button
                    className="btn btn-outline-primary bi bi-caret-left-square-fill"
                    onClick={prev}
                  ></button>
                  <button
                    className="btn btn-outline-primary ms-5 bi bi-caret-right-square-fill"
                    onClick={next}
                  ></button>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="row perfil-row-b">
          <div className="col-5 colum-dat-usu">
            <i className="bi bi-book-fill bs-icon-b fs-4"></i>
            <p id="profileStudy" className="p-perfil-b">
              {followerData.experience}
            </p>
          </div>
          <div className="col-2">
            <button className="text-info bg-dark rounded-1" disabled>
              Experiencia
            </button>
          </div>
          <div className="col-5">
            <p className="text-center fw-bold">
              Añade una recomendacion a {followerData.name}{" "}
            </p>
          </div>
        </div>
        <div className="row perfil-row-b">
          <div className="col-5 colum-dat-usu">
            <i className="bi bi-person bs-icon-b fs-4"></i>
            <p id="profileName" className="p-perfil-b">
              {followerData.name}
            </p>
          </div>
          <div className="col-2">
            <button className="text-info bg-dark rounded-1" disabled>
              Nombre
            </button>
          </div>
          <div className="col-5">
            <form onSubmit={handleSubmitContenido}>
              <input
                className="text-center w-100 pb-4 border border-primary border border-3 rounded-3"
                value={contenido}
                onChange={handleContenidoChange}
              />
            </form>
          </div>
        </div>
        <div className="row perfil-row-b">
          <div className="col-5 colum-dat-usu">
            <i className="bi bi-bicycle bs-icon-b fs-3"></i>
            <p id="profileHobbies" className="p-perfil-b">
              {followerData.hobbies}
            </p>
          </div>
          <div className="col-2">
            <button className="text-info bg-dark rounded-1" disabled>
              Hobbies
            </button>
          </div>
          <div className="col-5">
            <form onSubmit={handleSubmitContenido}>
              <button
                className="textareaPerfil rounded-5 shadow fw-bold text-center"
                type="submit"
              >
                Enviar recomendación
              </button>
            </form>
          </div>
        </div>
        <div className="row perfil-row-b justify-content-between">
          <div className="col-5 colum-dat-usu">
            <i className="bi bi bi-envelope bs-icon-b fs-4"></i>
            <p id="mailUser" className="p-perfil-b">
              {followerData.email}
            </p>
          </div>
          <div className="col-2">
            <button className="text-info bg-dark rounded-1" disabled>
              Correo
            </button>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </div>
  );
}
