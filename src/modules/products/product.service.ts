import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (payLoad: TProduct) => {
  const result = await Product.create(payLoad);
  return result;
};

const getAllProducts = async () => {
  const result = await Product.find();
  return result;
};

const getSingleProduct = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

const updateProduct = async (_id: string, payload: TProduct) => {
  const result = await Product.findByIdAndUpdate(_id, payload, { new: true });
  return result;
};

const deleteProduct = async (_id: string) => {
  const result = await Product.findByIdAndDelete(_id);
  return result;
};

const searchProducts = async (searchTerm: string) => {
  const trimmedQuery = searchTerm.trim().toLowerCase();
  const regex = new RegExp(trimmedQuery, 'i');
  const result = await Product.find({
    $or: [
      { name: { $regex: regex } },
      { description: { $regex: regex } },
      { category: { $regex: regex } },
    ],
  });

  if (result.length === 0) {
    throw new Error('No products found.');
  }

  return result;
};

export const ProductServices = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};
