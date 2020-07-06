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
  var orderedList = '';
  var emptyList = [];
  for(var i = 0; i < deliveryOrders.length; i++) {
    emptyList.push(deliveryOrders[i].item);
    orderedList = emptyList.join(', ');
  }
  return orderedList;
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
