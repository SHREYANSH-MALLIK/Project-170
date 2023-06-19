AFRAME.registerComponent("create-buttons", {
    init: function() {
      var button1 = document.createElement("orderSummaryButton");
      button1.innerHTML = "ORDER SUMMARY";
      button1.setAttribute("id", "order-summary-button");
      button1.setAttribute("class", "btn btn-warning");
  
      var orderButton = document.createElement("orderButton");
      orderButton.innerHTML = "ORDER NOW";
      orderButton.setAttribute("id", "order-button");
      orderButton.setAttribute("class", "btn btn-warning");

      var buttonDiv = document.getElementById("button-div");
      buttonDiv.appendChild(orderSummaryButton);
      buttonDiv.appendChild(orderButton);
    }
  });
  