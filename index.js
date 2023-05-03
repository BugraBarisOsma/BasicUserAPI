const express = require("express");
const dbConnection = require("./db/dbConnection");
const userRouter = require("./routes/userRouter"); // kendi olsuturdugumuz dosyadan cektigimiz icin ./ kullaniyoruz
const errorMiddleWare = require("./middleware/errorMiddleWare");

const app = express();
app.use(express.json());

app.use("/api/users", userRouter); // api/usersa'a istek geldiginde userRoutera yonlendirilecek user islemleri orada yapilacak

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});
app.use(errorMiddleWare);

app.listen(3000, () => {
  console.log("Started at local 3000");
});
