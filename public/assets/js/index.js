$(document).ready(() => {
  console.log("index js loaded!");

  const orderForm = $("#order_form");
  const orderInput = $("#order_input");

  orderForm.submit(submitEvent => {
    submitEvent.preventDefault();
    // console.log("order form submit:\n", submitEvent);
    // console.log(Object.keys(submitEvent));

    const burger_name = orderInput.val().trim();
    orderInput.val(burger_name);
    if (!burger_name) { return false; }

    $.post("/api/order", { burger_name })
      .then(results => {
        console.log("POST Results:\n", results);
        orderInput.val(""); // reset input field
      })
      .catch(error => {
        console.log("POST ERROR:\n", error);
      });
  });
});
