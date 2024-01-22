import { createConnection } from "typeorm";

const connectDatabase = async () => {
  try {
    await createConnection();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default connectDatabase;
