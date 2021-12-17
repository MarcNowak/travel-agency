const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    endpoint: {
      orders: 'orders',
    },
  },

  popupMessages: {
    orderConfirm: 'Order sent correctly.',
    orderIncomplete: 'Order data is not complete. Please fill mandatory fields and try again.',
  },
};

export default settings;