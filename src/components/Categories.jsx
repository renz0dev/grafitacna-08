import React from 'react'

const categories = [
  {
    name: "Procesadores",
    image: "/cat-procesador.jpg",
    href: "/categorias/procesadores",
  },
  {
    name: "Impresoras",
    image: "/cat-impres0ra.jpg",
    href: "/categorias/impresoras"
  },
  {
    name: "Periféricos",
    image: "/cat-peri.jpg",
    href: "/categorias/perifericos"
  },
  {
    name: "Monitores",
    image: "/cat-monitor.jpg",
    href: "/categorias/monitores"
  },
  {
    name: "Tintas",
    image: "/cat-tinta.jpg",
    href: "/categorias/tintas"
  }
]

const Categories = () => {
  return (
    <section className="w-full py-12 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-black text-center mb-12">
          CATEGORIAS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative w-[236.667px] h-[298.25px] aspect-square rounded-lg overflow-hidden bg-black"
            >
              <div className="absolute inset-0 bg-[#191919] rounded-lg" />
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 text-white text-lg font-semibold z-10">
                {category.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
