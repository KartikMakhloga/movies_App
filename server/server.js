let express = require("express");

let data = require("./data.json");

let allGenreObj = data.map((el) => {
  return el.genre;
});

//ek naya server bnati hai but ye sirf create krti use chalu nahi krti
let server = express();

//ye line server ko chalu krdeti hai
//ek port pr
server.listen(4000);

// "/" is a path here
// server.get("/",function(req,res){
//       res.send("hi");
// });

server.get("/movies", function (req, res) {
  res.json(data);
});
server.get("/genre", function (req, res) {
  let uniqueGenreObj = [];
  for (let i = 0; i < allGenreObj.length; i++) {
    let genreId = allGenreObj[i]["_id"];
    let index = uniqueGenreObj.findIndex((el) => {
      return el._id == genreId;
    });
    if (index == -1) {
      uniqueGenreObj.push(allGenreObj[i]);
    }
  }
  res.json(uniqueGenreObj);
});
// http://localhost:4000/
