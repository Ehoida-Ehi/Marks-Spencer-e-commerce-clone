import React, { useEffect, useState } from 'react'; // Ensure useState is imported here
import axios from 'axios';

const Allcategories = () => {
  // Fetching merchant data from local storage
  const merchant = JSON.parse(localStorage.getItem('merchant_details'));

  // States for fetching categories
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [merchantId, setMerchantId] = useState("");
  const [editingCategory, setEditingCategory] = useState(null);
  const [editName, setEditName] = useState("");
  const [editImage, setEditImage] = useState("");
  const [loading, setLoading] = useState(true);

  // Set merchantId from local storage when component mounts
  useEffect(() => {
    if (merchant) {
      setMerchantId(merchant.id);
    }
  }, [merchant]);

  // Fetch categories based on merchantId
  useEffect(() => {
    const fetchCategories = async () => {
      if (!merchantId) return;

      try {
        const response = await axios.get(
          `http://ecommerce.reworkstaging.name.ng/v2/categories?merchant_id=${merchantId}`
        );
        setCategories(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, [merchantId]);

  // Function to handle delete category
  const handleDeleteCategory = async (categoryId) => {
    try {
      await axios.delete(
        `http://ecommerce.reworkstaging.name.ng/v2/categories/${categoryId}`
      );

      // Remove deleted category from the list
      setCategories(categories.filter((item) => item.id !== categoryId));
      alert("Category deleted successfully!");
    } catch (error) {
      console.error("Error deleting category:", error);
      alert("Failed to delete category. Please try again.");
    }
  };

  // Function to handle edit category
  const handleEditCategory = async (categoryId) => {
    try {
      const response = await axios.put(
        `http://ecommerce.reworkstaging.name.ng/v2/categories/${categoryId}`,
        { name: editName, image: editImage }
      );

      // Update the category list with the edited data
      setCategories(
        categories.map((item) =>
          item.id === categoryId ? { ...item, name: editName, image: editImage } : item
        )
      );

      // Reset editing state
      setEditingCategory(null);
      setEditName("");
      setEditImage("");
    } catch (error) {
      console.error("Error updating category:", error);
      alert("Failed to update category. Please try again.");
    }
  };

  // Function to start editing a category
  const startEditCategory = (category) => {
    setEditingCategory(category.id);
    setEditName(category.name);
    setEditImage(category.image);
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold underline">Category List</h1>

        {loading ? (
          <p className="text-center text-lg">Loading categories...</p>
        ) : error ? (
          <p className="text-center text-lg text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            {categories.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 shadow-sm">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-full object-contain mb-8 rounded-md"
                />
                {editingCategory === item.id ? (
                  <div>
                    <input
                      type="text"
                      value={editName}
                      onChange={(e) => setEditName(e.target.value)}
                      placeholder="Category Name"
                      className="block w-full border mb-2 p-2 rounded"
                    />
                    <input
                      type="text"
                      value={editImage}
                      onChange={(e) => setEditImage(e.target.value)}
                      placeholder="Category Image URL"
                      className="block w-full border mb-2 p-2 rounded"
                    />
                    <button
                      onClick={() => handleEditCategory(item.id)}
                      className="bg-gradient-to-t from-green-800 via-green-400 to-green-600 text-black px-4 py-2 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingCategory(null)}
                      className="bg-gradient-to-t from-red-800 via-red-400 to-red-600 text-black px-4 py-2 rounded ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    {/* <p className="text-sm text-red-500">Merchant ID: {merchantId || item.merchant_Id}</p> */}
                    <div className="flex justify-between mt-4">
                      <button
                        onClick={() => startEditCategory(item)}
                        className="bg-gradient-to-t from-blue-800 via-blue-400 to-blue-600 text-black px-4 py-2 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteCategory(item.id)}
                        className="bg-gradient-to-t from-red-800 via-red-400 to-red-600 text-black px-4 py-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Allcategories;
