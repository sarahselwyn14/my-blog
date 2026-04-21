import { MongoClient } from "mongodb";

const uri = "mongodb+srv://c0dingisc00l:code2college2026@myblogcluster.7ofsqzn.mongodb.net/?appName=MyBlogCluster";



const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
