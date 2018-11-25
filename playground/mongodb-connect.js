const MongoClient = require ('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) =>{
  if(err){
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
//   db.collection('Todos').insertOne({
//        text: 'Someting to do',
//        completed: true
//   }, (err,result)=>{
//     if(err){
//       return console.log('unable to insert',err);
//     }
//     console.log(JSON.stringify(result.ops, undefined,2))
//   })
//   db.close();
// });
