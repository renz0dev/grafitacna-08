import { useState } from "react";

export default function LibroReclamaciones() {
  const currentDate = new Date().toLocaleString("es-PE");

  const [formData, setFormData] = useState({
    nombres: "",
    tipoDocumento: "",
    numeroDocumento: "",
    direccion: "",
    correo: "",
    telefono: "",
    tipoBien: "",
    descripcionBien: "",
    tipoReclamo: "",
    detalleReclamo: "",
  });

  const [mensajeExito, setMensajeExito] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!window.confirm("¿Está seguro de que quiere enviar el reclamo? Cualquier información falsa o reclamo hecho en broma no será tomada en cuenta")) {
      return;
    }
  
    const formDataWithDate = {
      ...formData,
      fecha: new Date().toLocaleString("es-PE"),
    };
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/enviar-reclamo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify(formDataWithDate),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${data.error || "No especificado"}`);
      }
  
      setMensajeExito(`Gracias por su comunicación. La reclamación ha sido registrada correctamente. Una copia de la reclamación ha sido enviada al correo del personal, y se comunicará con usted a través del correo que nos brindó. \n\nEl proveedor deberá dar respuesta al reclamo en un plazo no mayor de treinta (30) días calendario, pudiendo ampliar el plazo hasta por treinta (30) días más, previa comunicación al consumidor.`);
      
      setFormData({
        nombres: "",
        tipoDocumento: "",
        numeroDocumento: "",
        direccion: "",
        correo: "",
        telefono: "",
        tipoBien: "",
        descripcionBien: "",
        tipoReclamo: "",
        detalleReclamo: "",
      });
  
    } catch (error) {
      console.error("Error detallado:", error);
      alert(`Error al enviar el reclamo: ${error.message}`);
    }
  };
  
  return (
    <div className="container mx-auto py-6 max-w-3xl">
      <div className="text-center mb-8">
        <img src="https://i.ibb.co/QFMdypFT/grafitacna-logo.png" alt="Grafitacna Logo" className="mx-auto mb-4 h-16" />
      </div>
      <div className="border rounded-lg shadow-md p-6">
        <div className="text-center border-b pb-4">
          <h2 className="text-2xl font-bold">Libro de Reclamaciones Virtual</h2>
        </div>
        <div className="p-6">
        {mensajeExito ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <p>{mensajeExito}</p>
            </div>
          ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <section>
              <h2 className="text-xl font-semibold mb-4">Datos Generales</h2>
              <div className="space-y-2 text-sm">
                <p>Fecha del reclamo: {currentDate}</p>
                <p>Razón Social: GRAFITACNA SOLUCIONES TECNOLOGICAS</p>
                <p>RUC: 20608883992</p>
                <p>Dirección: AV. MARIANO LINO URQUIETA NRO. 110, MOQUEGUA - ILO - ILO</p>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-4">Identificación del Consumidor</h2>
              <div className="space-y-4">
                <div>
                  <label className="block">Nombres y Apellidos</label>
                  <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} className="w-full border p-2 rounded" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block">Tipo de Documento</label>
                    <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} className="w-full border p-2 rounded">
                      <option value="">Seleccionar</option>
                      <option value="DNI">DNI</option>
                      <option value="Carné de Extranjería">Carné de Extranjería</option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                  </div>
                  <div>
                    <label className="block">Número de Documento</label>
                    <input type="text" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} className="w-full border p-2 rounded" required />
                  </div>
                </div>
                <div>
                  <label className="block">Dirección</label>
                  <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} className="w-full border p-2 rounded" required />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block">Correo electrónico</label>
                    <input type="email" name="correo" value={formData.correo} onChange={handleChange} className="w-full border p-2 rounded" required />
                  </div>
                  <div>
                    <label className="block">Número de Teléfono</label>
                    <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full border p-2 rounded" required />
                  </div>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-4">Identificación del Bien Contratado</h2>
              <div className="space-y-4">
                <div>
                  <label className="block">Tipo de Bien Recibido</label>
                  <select name="tipoBien" value={formData.tipoBien} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="">Seleccionar</option>
                    <option value="Producto">Producto</option>
                    <option value="Servicio">Servicio</option>
                  </select>
                </div>
                <div>
                  <label className="block">Descripción del Bien</label>
                  <textarea name="descripcionBien" value={formData.descripcionBien} onChange={handleChange} className="w-full border p-2 rounded min-h-[100px]" required></textarea>
                </div>
              </div>
            </section>
            <section>
              <h2 className="text-xl font-semibold mb-4">Detalle de la reclamación</h2>
              <div className="space-y-4">
                <div className="space-y-2 text-sm">
                  <p>* Queja: Disconformidad no relacionada a los productos o servicios o malestar o descontento respecto a la atención al público.</p>
                  <p>* Reclamo: Disconformidad relacionada a los productos o servicios.</p>
                </div>
                <div>
                  <label className="block">Tipo de reclamación</label>
                  <select name="tipoReclamo" value={formData.tipoReclamo} onChange={handleChange} className="w-full border p-2 rounded">
                    <option value="">Seleccionar</option>
                    <option value="Reclamo">Reclamo</option>
                    <option value="Queja">Queja</option>
                  </select>
                </div>
                <div>
                  <label className="block">Detalle de la reclamación</label>
                  <textarea name="detalleReclamo" value={formData.detalleReclamo} onChange={handleChange} className="w-full border p-2 rounded min-h-[150px]" required></textarea>
                </div>
                <div className="pt-6">
                  <button type="submit" className="w-full md:w-auto bg-blue-600 text-white p-2 rounded">Enviar</button>
                </div>
              </div>
            </section>
          </form>
          )}
        </div>
      </div>
    </div>
  );
}
