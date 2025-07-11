require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URL;
const PositionsModel = require("./model/PositionsModel");
const HoldingsModel = require("./model/HoldingsModel");
const OrdersModel = require("./model/OrdersModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

const authRoute = require("./Routes/AuthRoute");

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "https://zerodha-clone-fv2o.vercel.app",
      "https://zerodha-clone-gbbk.vercel.app",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

// app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/", authRoute);

// app.get("/holdings", async (req, res) => {
//   try {
//     const tempHoldings = [
//       {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//       },
//       {
//         name: "HINDUNILVR",
//         qty: 1,
//         avg: 2335.85,
//         price: 2417.4,
//         net: "+3.49%",
//         day: "+0.21%",
//       },
//       {
//         name: "INFY",
//         qty: 1,
//         avg: 1350.5,
//         price: 1555.45,
//         net: "+15.18%",
//         day: "-1.60%",
//         isLoss: true,
//       },
//       {
//         name: "ITC",
//         qty: 5,
//         avg: 202.0,
//         price: 207.9,
//         net: "+2.92%",
//         day: "+0.80%",
//       },
//       {
//         name: "KPITTECH",
//         qty: 5,
//         avg: 250.3,
//         price: 266.45,
//         net: "+6.45%",
//         day: "+3.54%",
//       },
//       {
//         name: "M&M",
//         qty: 2,
//         avg: 809.9,
//         price: 779.8,
//         net: "-3.72%",
//         day: "-0.01%",
//         isLoss: true,
//       },
//       {
//         name: "RELIANCE",
//         qty: 1,
//         avg: 2193.7,
//         price: 2112.4,
//         net: "-3.71%",
//         day: "+1.44%",
//       },
//       {
//         name: "SBIN",
//         qty: 4,
//         avg: 324.35,
//         price: 430.2,
//         net: "+32.63%",
//         day: "-0.34%",
//         isLoss: true,
//       },
//       {
//         name: "SGBMAY29",
//         qty: 2,
//         avg: 4727.0,
//         price: 4719.0,
//         net: "-0.17%",
//         day: "+0.15%",
//       },
//       {
//         name: "TATAPOWER",
//         qty: 5,
//         avg: 104.2,
//         price: 124.15,
//         net: "+19.15%",
//         day: "-0.24%",
//         isLoss: true,
//       },
//       {
//         name: "TCS",
//         qty: 1,
//         avg: 3041.7,
//         price: 3194.8,
//         net: "+5.03%",
//         day: "-0.25%",
//         isLoss: true,
//       },
//       {
//         name: "WIPRO",
//         qty: 4,
//         avg: 489.3,
//         price: 577.75,
//         net: "+18.08%",
//         day: "+0.32%",
//       },
//     ];

//     await HoldingsModel.insertMany(tempHoldings);
//     res.send("Holdings data saved successfully");
//   } catch (err) {
//     console.error("Error saving holdings:", err);
//     res.status(500).send("Failed to save holdings data");
//   }
// });

// app.get("/positions", async (req, res) => {
//   try {
//     const tempPositions = [
//       {
//         product: "CNC",
//         name: "EVEREADY",
//         qty: 2,
//         avg: 316.27,
//         price: 312.35,
//         net: "+0.58%",
//         day: "-1.24%",
//         isLoss: true,
//       },
//       {
//         product: "CNC",
//         name: "JUBLFOOD",
//         qty: 1,
//         avg: 3124.75,
//         price: 3082.65,
//         net: "+10.04%",
//         day: "-1.35%",
//         isLoss: true,
//       },
//     ];

//     await PositionsModel.insertMany(tempPositions);

//     res.send("Positions data saved successfully");
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Error saving positions");
//   }
// });

app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (error) {
    console.error("Error fetching holdings:", error);
    res.status(500).send("Error fetching holdings");
  }
});

app.get("/positions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (error) {
    console.error("Error fetching positions:", error);
    res.status(500).send("Error fetching positions");
  }
});

app.post("/newOrder", async (req, res) => {
  const { name, qty, price, mode } = req.body;
  try {
    if (mode == "BUY") {
      const newOrder = new OrdersModel({
        name,
        qty,
        price,
        mode,
      });

      await newOrder.save();
      res.status(201).send("Order created successfully");

      const newHolding = new HoldingsModel({
        name,
        qty,
        avg: price,
        price,
        net: "0.00%",
        day: "0.00%",
      });
      await newHolding.save();
    }

    if (mode === "SELL") {
      const newOrder = new OrdersModel({
        name,
        qty,
        price,
        mode,
      });

      await newOrder.save();
      res.status(201).send("Order created successfully");

      const result = await HoldingsModel.findOneAndDelete({
        name: name,
        qty: qty,
        price: price,
      });

      if (!result) {
        res.send("Holding not found for deletion:", { name, qty, price });
      }
    }
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).send("Error creating order");
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).send("Error fetching orders");
  }
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
