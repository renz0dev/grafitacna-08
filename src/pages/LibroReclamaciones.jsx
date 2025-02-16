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
    tipoReclamo: "",
    detalleReclamo: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataWithDate = {
      ...formData,
      fecha: new Date().toLocaleString("es-PE"), // ✅ Agrega la fecha en el formato correcto
    };
  
    console.log("Datos enviados:", formDataWithDate);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/api/enviar-reclamo/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${import.meta.env.VITE_API_KEY}`,
        },
        body: JSON.stringify(formDataWithDate), // ✅ Enviar formData con fecha
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${data.error || "No especificado"}`);
      }
  
      alert("Reclamo enviado correctamente.");
      setFormData({
        nombres: "",
        tipoDocumento: "",
        numeroDocumento: "",
        direccion: "",
        correo: "",
        telefono: "",
        tipoBien: "",
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
          <h2 className="text-2xl font-bold">Libro de Reclamaciones</h2>
        </div>
        <div className="p-6">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <section>
              <h2 className="text-xl font-semibold mb-4">Datos Generales</h2>
              <p>Fecha del reclamo: {currentDate}</p>
              <p>Razón Social: GRAFITACNA SOLUCIONES TECNOLOGICAS</p>
              <p>RUC: 20608883992</p>
              <p>Dirección: AV. MARIANO LINO URQUIETA NRO. 110, MOQUEGUA - ILO - ILO</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Identificación del Consumidor</h2>
              <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} className="w-full border p-2 rounded" required placeholder="Nombres y Apellidos" />
              <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">Seleccionar Documento</option>
                <option value="dni">DNI</option>
                <option value="ce">Carné de Extranjería</option>
                <option value="passport">Pasaporte</option>
              </select>
              <input type="text" name="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} className="w-full border p-2 rounded" required placeholder="Número de Documento" />
              <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} className="w-full border p-2 rounded" required placeholder="Dirección" />
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} className="w-full border p-2 rounded" required placeholder="Correo Electrónico" />
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} className="w-full border p-2 rounded" required placeholder="Teléfono" />
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Detalle de la Reclamación</h2>
              <select name="tipoReclamo" value={formData.tipoReclamo} onChange={handleChange} className="w-full border p-2 rounded">
                <option value="">Seleccionar Tipo de Reclamo</option>
                <option value="reclamo">Reclamo</option>
                <option value="queja">Queja</option>
              </select>
              <textarea name="detalleReclamo" value={formData.detalleReclamo} onChange={handleChange} className="w-full border p-2 rounded min-h-[150px]" required placeholder="Detalle del Reclamo"></textarea>
              <button type="submit" className="w-full md:w-auto bg-blue-600 text-white p-2 rounded">Enviar</button>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
