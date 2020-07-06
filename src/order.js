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
 console.log(deliveryOrders)

  for (var i = 0; i < deliveryOrders.length - 1; i++) {
    if (deliveryOrders.length > 1) {
      orderList = deliveryOrders[i].item;
    } else if (deliveryOrders.length < 1) {
      orderList = deliveryOrders[i].item + space;
    }
  }
  return orderList;
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
