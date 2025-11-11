import { useEffect, useState } from "react";
import axios from "axios";
import { FaWhatsapp, FaPhoneAlt, FaSearch, FaTimes } from "react-icons/fa";
import "./Products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null); // selected product for modal

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    // close on Escape
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const phoneNumber = "919876543210"; // replace with your number

  const handleWhatsApp = (name) => {
    const message = encodeURIComponent(`Hello! I'm interested in ${name}. Please share more details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const handleCall = () => {
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) window.location.href = `tel:+${phoneNumber}`;
    else alert(`📞 You are in desktop mode.\nPlease call: +${phoneNumber}`);
  };

  return (
    <div className="products-page">
      <h1 className="title">Our Products</h1>

      {/* Search */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for a product..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Grid */}
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products found!</p>
        ) : (
          filteredProducts.map((p) => (
            <div
              key={p._id}
              className="product-card"
              role="button"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => { if (e.key === "Enter") setSelected(p); }}
            >
              <div className="product-image">
                <img src={p.image} alt={p.name} />
              </div>
              <div className="product-info">
                <h3>{p.name}</h3>
                <p className="price">₹{p.price}</p>
                <p className="desc">{p.description}</p>
                <div className="card-buttons">
                  <button
                    className="whatsapp-btn"
                    onClick={(e) => { e.stopPropagation(); handleWhatsApp(p.name); }}
                  >
                    <FaWhatsapp /> WhatsApp
                  </button>
                  <button
                    className="call-btn"
                    onClick={(e) => { e.stopPropagation(); handleCall(); }}
                  >
                    <FaPhoneAlt /> Call Now
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal / Lightbox */}
      {selected && (
        <div
          className="product-modal"
          onClick={() => setSelected(null)} // click outside closes
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">
              <FaTimes />
            </button>

            <div className="modal-left">
              <img src={selected.image} alt={selected.name} className="modal-image" />
            </div>

            <div className="modal-right">
              <h2>{selected.name}</h2>
              <p className="modal-price">₹{selected.price}</p>
              <p className="modal-desc">{selected.description}</p>

              <div className="modal-buttons">
                <button
                  className="whatsapp-btn"
                  onClick={() => handleWhatsApp(selected.name)}
                >
                  <FaWhatsapp /> WhatsApp
                </button>
                <button
                  className="call-btn"
                  onClick={() => handleCall()}
                >
                  <FaPhoneAlt /> Call Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
