const { MongoClient } = require('mongodb');

const url="mongodb+srv://satyavanarasi4_db_user:Node%40123@node.f5v79ee.mongodb.net/?retryWrites=true&w=majority&appName=Node";


const client = new MongoClient(url);

const dbName = 'HelloWorld';


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('mydata');

  // the following code examples can be pasted here...

 // const insertResult = await collection.insertMany([{ firstname: "Haritha" }, { lastname: "Krupa" }, { age: 25 } , {location:"east godavari"}]);
 // console.log('Inserted documents =>', insertResult);

  //const insertone = await collection.insertOne({firtname:"Zabee",lastname:"Ahmed",age:20,location:"Kadapa"});
  //console.log('Inserted documents =>', insertone);


  const updateResult = await collection.updateOne(
  { firtname: "Zabee" },  // filter (which document to find)
  {
    $set: {
      firtname: "Anajali",
      lastname: "podilapu",
      age: 22,
      location: "Vizianagaram"
    }
  }
);

console.log("Matched:", updateResult.matchedCount, "Modified:", updateResult.modifiedCount);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());