"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderServices = void 0;
const order_model_1 = require("./order.model");
const createOrder = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.create(payLoad);
    return result;
});
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_model_1.Order.find();
    return result;
});
const searchOrders = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const trimmedQuery = email.trim().toLowerCase();
    const regex = new RegExp(trimmedQuery, 'i');
    const result = yield order_model_1.Order.find({
        $or: [{ email: { $regex: regex } }],
    });
    if (result.length === 0) {
        throw new Error('No orders found for the provided email.');
    }
    return result;
});
exports.OrderServices = {
    createOrder,
    getAllOrders,
    searchOrders,
};
