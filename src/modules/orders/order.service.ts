import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad);
  return result;
};

const getAllOrders = async () => {
  const result = await Order.find();
  return result;
};

const searchOrders = async (email: string) => {
  const trimmedQuery = email.trim().toLowerCase();
  const regex = new RegExp(trimmedQuery, 'i');
  const result = await Order.find({
    $or: [{ email: { $regex: regex } }],
  });

  if (result.length === 0) {
    throw new Error('No orders found for the provided email.');
  }

  return result;
};

export const OrderServices = {
  createOrder,
  getAllOrders,
  searchOrders,
};
