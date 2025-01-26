import { useEffect, useState } from 'react';
import axios from 'axios';
import { Root as CheckboxRoot, Indicator as CheckboxIndicator } from '@radix-ui/react-checkbox';
import { AnimatedModalDemo } from '../components/ui/AnimatedModalDemo';
import { Link } from 'react-router-dom';
import { SiMsibusiness } from 'react-icons/si';

const TerosLogo = () => (
  <img
    src="https://i.ibb.co/V3qXrJt/teros-logo-1-1-1-removebg-preview.png"
    alt="Teros Logo"
    className="w-6 h-6"
  />
);

function Monitores() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = "5e58a170a0b599511b621cbe713a18540ea4710a";
    axios
      .get("http://127.0.0.1:8000/api/products/?category=8", {
        headers: { Authorization: `Token ${token}` },
      })
      .then((response) => {
        const fetchedProducts = response.data.results || response.data || [];
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar los productos:", error.response?.data || error.message);
        setError("Error al cargar los productos");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedBrands.length > 0) {
      setFilteredProducts(
        products.filter((product) =>
          selectedBrands.some((brand) => 
            product.name.toLowerCase().split(' ').includes(brand.toLowerCase())
          )
        )
      );
    } else {
      setFilteredProducts(products);
    }
  }, [selectedBrands, products]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBrandChange = (brand, checked) => {
    setSelectedBrands(prevBrands => {
      if (checked) {
        return [...prevBrands, brand];
      } else {
        return prevBrands.filter(b => b !== brand);
      }
    });
  };

  if (loading) {
    return <p className="text-center">Cargando productos...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  const brandIcons = {        
    'Teros': <TerosLogo />,
    'MSI': <SiMsibusiness className="w-6 h-6" />,
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 lg:w-1/5 space-y-6">
          <div>
            <h3 className="font-semibold mb-4">Por Marcas</h3>
            <div className="space-y-2">
              {['Teros', 'MSI'].map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <CheckboxRoot
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onCheckedChange={(checked) => handleBrandChange(brand, checked)}
                    className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center"
                  >
                    <CheckboxIndicator>
                      <span className="text-green-500">✔</span>
                    </CheckboxIndicator>
                  </CheckboxRoot>
                  <label htmlFor={brand} className="text-sm cursor-pointer flex items-center">
                    {brandIcons[brand]}
                    <span className="ml-2">{brand}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold text-black mb-8">Monitores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg p-4 flex flex-col font-[Itim]">
                <div className="relative aspect-square mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-sm font-medium mb-2">{product.name}</h3>
                <p className="text-sm text-green-600 mb-2">
                  {product.stock > 0 ? 'Stock disponible' : 'Sin stock'}
                </p>
                <div className="flex items-center mb-2">
                  <span className="bg-red-600 text-white text-xs px-2 py-1 rounded mr-2">PRECIO</span>
                  <span className="font-bold">S/ {product.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">SKU: {product.sku}</p>
                <Link to={`/product/${product.id}`}>
                  <AnimatedModalDemo/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitores;