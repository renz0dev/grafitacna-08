import { useState } from "react";

export default function LibroReclamaciones() {
  const [currentDate] = useState(new Date().toLocaleString("es-PE"));

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
          <form className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">Datos Generales</h2>
              <div className="space-y-2 text-sm">
                <p>Fecha del reclamo: {currentDate}</p>
                <p>Razón Social: GRAFITACNA SOLUCIONES TECNOLOGICAS Y SERVICIOS GENERALES EMPRESA INDIVIDUAL DE RESPONSABILIDAD LIMIT</p>
                <p>RUC: 20608883992</p>
                <p>Dirección: 
                 AV. MARIANO LINO URQUIETA NRO. 110 OTR. COMERCIAL (FRENTE A BAHIA) MOQUEGUA - ILO - ILO</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Identificación del Consumidor</h2>
              <div className="space-y-4">
                <div>
                  <label className="block">Nombres y Apellidos</label>
                  <input type="text" className="w-full border p-2 rounded" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block">Tipo de Documento</label>
                    <select className="w-full border p-2 rounded">
                      <option>Seleccionar</option>
                      <option value="dni">DNI</option>
                      <option value="ce">Carné de Extranjería</option>
                      <option value="passport">Pasaporte</option>
                    </select>
                  </div>
                  <div>
                    <label className="block">Número de Documento</label>
                    <input type="text" className="w-full border p-2 rounded" required />
                  </div>
                </div>

                <div>
                  <label className="block">Dirección</label>
                  <input type="text" className="w-full border p-2 rounded" required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block">Correo electrónico</label>
                    <input type="email" className="w-full border p-2 rounded" required />
                  </div>
                  <div>
                    <label className="block">Número de Teléfono</label>
                    <input type="tel" className="w-full border p-2 rounded" required />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">Identificación del bien contratado</h2>
              <div>
                <label className="block">Tipo de bien recibido</label>
                <select className="w-full border p-2 rounded">
                  <option>Seleccionar</option>
                  <option value="producto">Producto</option>
                  <option value="servicio">Servicio</option>
                </select>
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
                  <select className="w-full border p-2 rounded">
                    <option>Seleccionar</option>
                    <option value="reclamo">Reclamo</option>
                    <option value="queja">Queja</option>
                  </select>
                </div>
                <div>
                  <label className="block">Detalle de la reclamación</label>
                  <textarea className="w-full border p-2 rounded min-h-[150px]" required></textarea>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" required />
                    <label>Declaro que los datos consignados son correctos y fiel expresión de la verdad.</label>
                  </div>
                </div>
                <div className="pt-6">
                  <button type="submit" className="w-full md:w-auto bg-blue-600 text-white p-2 rounded">Enviar</button>
                </div>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
