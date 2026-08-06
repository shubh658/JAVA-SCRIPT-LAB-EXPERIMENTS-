document.getElementById("generateBill").addEventListener("click", function () {

    // Get Input Values
    let customer = document.getElementById("customer").value;
    let phone = document.getElementById("phone").value;
    let orderId = document.getElementById("orderId").value;
    let product = document.getElementById("product").value;

    let qty = parseFloat(document.getElementById("qty").value);
    let price = parseFloat(document.getElementById("price").value);

    let coupon = parseFloat(document.getElementById("coupon").value);
    let gst = parseFloat(document.getElementById("gst").value);

    let delivery = parseFloat(document.getElementById("delivery").value);

    let payment = document.getElementById("payment").value;

    // Validation
    if (customer === "" || phone === "" || product === "") {
        alert("Please fill all the required fields.");
        return;
    }

    // Calculations
    let subtotal = qty * price;

    let discount = subtotal * (coupon / 100);

    let amountAfterDiscount = subtotal - discount;

    let gstAmount = amountAfterDiscount * (gst / 100);

    let total = amountAfterDiscount + gstAmount + delivery;

    // Display Receipt
    document.getElementById("rName").textContent = customer;
    document.getElementById("rPhone").textContent = phone;
    document.getElementById("rOrder").textContent = orderId;
    document.getElementById("rProduct").textContent = product;

    document.getElementById("rSubtotal").textContent = subtotal.toFixed(2);
    document.getElementById("rDiscount").textContent = discount.toFixed(2);
    document.getElementById("rGST").textContent = gstAmount.toFixed(2);
    document.getElementById("rDelivery").textContent = delivery.toFixed(2);
    document.getElementById("rTotal").textContent = total.toFixed(2);

    document.getElementById("rPayment").textContent = payment;

    // Show Receipt
    document.getElementById("receipt").style.display = "block";

});
