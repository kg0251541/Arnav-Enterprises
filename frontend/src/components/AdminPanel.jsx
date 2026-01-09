import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminPanel.css";
import { FaPlus, FaTrash, FaEdit, FaBox, FaChartBar } from "react-icons/fa";

export default function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
  });
  const [editing, setEditing] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("https://bakend-p4gh.onrender.com/api/products");
    setProducts(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editing) {
      await axios.put(`https://bakend-p4gh.onrender.com/api/products/${editing}`, formData);
      setEditing(null);
    } else {
      await axios.post("https://bakend-p4gh.onrender.com/products", formData);
    }
    setFormData({ name: "", price: "", description: "", image: "" });
    fetchProducts();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      await axios.delete(`https://bakend-p4gh.onrender.com/products/${id}`);
      fetchProducts();
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditing(product._id);
  };

  return (
    <div className="admin-dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Arnav Admin</h2>
        <ul>
          <li><FaBox /> Products</li>
          {/* <li></> </li> */}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="admin-header">
          <h1>Admin Panel</h1>
          <p>Manage your products efficiently.</p>
        </header>

        {/* Form Section */}
        <section className="form-section">
          <h2>{editing ? "Update Product" : "Add New Product"}</h2>
          <form onSubmit={handleSubmit} className="product-form">
            <input
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <input
              type="number"
              placeholder="Price (₹)"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              required
            />
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
            <button type="submit" className="submit-btn">
              <FaPlus /> {editing ? "Update" : "Add Product"}
            </button>
          </form>
        </section>

        {/* Products Table */}
        <section className="table-section">
          <h2>All Products</h2>
          <div className="product-table">
            {products.length === 0 ? (
              <p className="no-products">No products found.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr key={p._id}>
                      <td><img src={p.image} alt={p.name} /></td>
                      <td>{p.name}</td>
                      <td>₹{p.price}</td>
                      <td>{p.description}</td>
                      <td>
                        <button className="edit-btn" onClick={() => handleEdit(p)}>
                          <FaEdit />
                        </button>
                        <button className="delete-btn" onClick={() => handleDelete(p._id)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
