import express from "express";
const app = express();
const port = 5000; // Cổng server lắng nghe

// Định nghĩa route đơn giản để trả về "Hello World!"
app.get("/api/hello", (req, res) => {
  res.send({ message: "Big Education!" });
});

// Khởi động server và lắng nghe trên cổng đã định nghĩa
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
