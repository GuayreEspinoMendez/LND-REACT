import { useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./Refound.css"
import ScrollToTopButton from '../../components/scrollToTop/ScrollToTop'

function Refound() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ productCode: '', name: '', dni: '', price: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = form;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      setProducts([...products, form]);
    }
    setForm({ productCode: '', name: '', dni: '', price: '' });
  };

  const handleEdit = (index) => {
    setForm(products[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((product, i) => i !== index);
    setProducts(updatedProducts);
  };

  return (
    <>
    <Header />
    <body className='refound-body'>
    <div className="refound-container">
      <div className="refound-form-container">
      <form onSubmit={handleSubmit}>
        <input className="refound-input" name="productCode" value={form.productCode} onChange={handleChange} placeholder="Product Code" required />
        <input className="refound-input" name="name" value={form.name} onChange={handleChange} placeholder="Your Name" required />
        <input className="refound-input" name="dni" value={form.dni} onChange={handleChange} placeholder="DNI" required />
        <input className="refound-input" name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
        <button className="refound-button" type="submit">{editingIndex !== null ? 'Update' : 'Add'}</button>
      </form>
      </div>
      <div className="refound-table-container">
      <table className='refound-table'>
        <thead>
          <tr className='refound-tr'>
            <th className='refound-th'>Product Code</th>
            <th className='refound-th'>Your Name</th>
            <th className='refound-th'>DNI</th>
            <th className='refound-th'>Price</th>
            <th className='refound-th'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className='refound-tr'>
              <td className='refound-td'>{product.productCode}</td>
              <td className='refound-td'>{product.name}</td>
              <td className='refound-td'>{product.dni}</td>
              <td className='refound-td'>{product.price}</td>
              <td className='refound-td'>
                <button className="refound-button" onClick={() => handleEdit(index)}>Edit</button>
                <button className="refound-button" onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
    <ScrollToTopButton/>
    </body>
    <Footer />
    </>
  );
}

export default Refound;
