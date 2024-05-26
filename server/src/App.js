const express = require("express");
const app = express();
const port = 3000; // Cổng server lắng nghe

// Định nghĩa route đơn giản để trả về "Hello World!"
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Khởi động server và lắng nghe trên cổng đã định nghĩa
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
