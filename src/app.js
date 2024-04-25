const express = require("express");
const app = express();
const WishlistModel = require("./models/WishlistModel");
const OrderModel = require("./models/OrderModel");
const PolicyModel = require("./models/PolicyModel");

app.use(express.json());

app.post("/wishlists", async (req, res) => {
  const { body } = req;
  const wishlist = new WishlistModel(body);
  wishlist.save();
  return res.status(200).send(wishlist);
});

app.get("/wishlists/:id", async (req, res) => {
  const { id } = req.params;
  const wishlist = await WishlistModel.findById(id);
  return res.status(200).send(wishlist);
});

app.post("/orders", async (req, res) => {
  const { body } = req;
  const order = new OrderModel(body);
  order.save();
  return res.status(200).send(order);
});

app.get("/orders/:id", async (req, res) => {
  const { id } = req.params;
  const order = await OrderModel.findById(id);
  return res.status(200).send(order);
});

app.post("/policies", async (req, res) => {
  const { body } = req;
  const policy = new PolicyModel(body);
  policy.save();
  return res.status(200).send(policy);
});

app.get("/policies/:id", async (req, res) => {
  const { id } = req.params;
  const order = await PolicyModel.findById(id);
  return res.status(200).send(order);
});

module.exports = app;
