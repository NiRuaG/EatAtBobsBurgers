$(document).ready(() => {
  const $orderForm  = $("#order_form" );
  const $orderInput = $("#order_input");

  const devourSELECT = "button.devour";

  $orderInput.focus();

  $orderForm.submit(submitEvent => { // care -- don't need 'this', so we can fat-arrow
    submitEvent.preventDefault();
    // console.log("order form submit:\n", submitEvent);
    // console.log(Object.keys(submitEvent));

    const burger_name = $orderInput.val().trim();
    $orderInput.val(burger_name);
    if (!burger_name) { return false; }

    $.post("/api/order", { burger_name })
      .then(postResults => {
        // console.log("POST Results:\n", postResults);
        $orderInput.val(""); // reset input field
        location.reload();
      })
      .catch(error => {
        // console.log("POST ERROR:\n", error);
      });
  });

  $(document).on("click", devourSELECT, function(clickEvent) {
    // console.log("clickEvent!", clickEvent, $(this).data("id"));

    $.ajax({
      method: "PUT",
      url: "/api/devour/" + $(this).data("id")
    })
      .then(putResults => {
        // console.log("PUT results:\n", putResults);
        location.reload();
      })
      .catch(error => {
        // console.log("PUT Error:\n", error);
      });
  });
});
