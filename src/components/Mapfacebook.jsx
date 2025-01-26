import React from 'react'

const MapFacebook = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white" id="mapa">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Map Image Section */}
        <section className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Como llegar</h2>
          <div className="w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
          <iframe
        title="Ubicación GrafiTacna"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15208.615709088954!2d-71.34085119999997!3d-17.642867199999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91445b0bbff22613%3A0x5c4977ed62d3fe79!2sGrafitacna!5e0!3m2!1ses!2spe!4v1732865144745!5m2!1ses!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
          </div>
        </section>

        {/* Facebook Posts Section */}
        <section className="w-full lg:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Revisa nuestro Facebook</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
                className="aspect-square relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <img
                  src="/pub/pub1.jpg"
                  alt="Servicio1"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div
                className="aspect-square relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <img
                  src="/pub/pub2.jpg"
                  alt="Servicio2"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div
                className="aspect-square relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <img
                  src="/pub/pub3.jpg"
                  alt="Servicio3"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div
                className="aspect-square relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <img
                  src="/pub/pub4.jpg"
                  alt="Servicio4"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div
                className="aspect-square relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <img
                  src="/pub/pub5.jpg"
                  alt="Servicio5"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
            <div
                className="aspect-square relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
                <img
                  src="/pub/pub6.jpg"
                  alt="Servicio6"
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default MapFacebook

