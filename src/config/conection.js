import mongoose from "mongoose";

mongoose.Promise = Promise;

mongoose.connection.on("connected", () => {
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB Connection Reestablished");
});

mongoose.connection.on("disconnected", () => {
});

mongoose.connection.on("close", () => {
});

mongoose.connection.on("error", (error) => {

  process.exit(1);
});

mongoose.set("debug", process.env.DEBUG);
const connectMongo = async () => {
  let connectionuri = process.env.MONGO;

  await mongoose.connect(connectionuri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectMongo;
