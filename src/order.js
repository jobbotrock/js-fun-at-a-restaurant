////////////////////////////// nameMenuItem ////////////////////////////////////

function takeOrder(order, deliveryOrders) {
  if (deliveryOrders.length === 3) {
    return;
  }
  deliveryOrders.push(order);
};

////////////////////////////// refundOrder /////////////////////////////////////

function refundOrder(orderNumber, deliveryOrders) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (orderNumber === deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
};

////////////////////////////// listItems ///////////////////////////////////////

function listItems(deliveryOrders) {
  // I am having trouble making this function more dynamic
  // Here's the not so dyanamic solutions
  return deliveryOrders[0].item + ', ' + deliveryOrders[1].item + ', ' + deliveryOrders[2].item
};

////////////////////////////// searchOrder /////////////////////////////////////

function searchOrder(deliveryOrders, order) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (order === deliveryOrders[i].item) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
