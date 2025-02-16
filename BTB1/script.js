window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Lấy dữ liệu về tên và hình ảnh của hành tinh
      let planetName = data[0].name; // Ví dụ: lấy tên hành tinh đầu tiên
      let planetImage = data[0].image; // Ví dụ: lấy hình ảnh hành tinh đầu tiên

      // Tạo các phần tử HTML để hiển thị thông tin
      let planetNameElement = document.createElement("h2");
      planetNameElement.textContent = planetName;

      let planetImageElement = document.createElement("img");
      planetImageElement.src = planetImage;
      planetImageElement.alt = planetName;

      // Thêm các phần tử vào div#destination
      let destinationDiv = document.getElementById("destination");
      destinationDiv.appendChild(planetNameElement);
      destinationDiv.appendChild(planetImageElement);
    });
});
