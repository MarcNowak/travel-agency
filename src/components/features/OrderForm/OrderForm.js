import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import Button from '../../common/Button/Button';

const sendOrder = (tripCost, countryName, options, tripId, tripName) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const payload = {
    ...options,
    countryName,
    tripId,
    tripName,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    }).then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const validateOrderData = (options, cost, countryName, tripId, tripName) => {
  if (options.name && options.contact) {
    sendOrder(cost, countryName, options, tripId, tripName);
    window.alert(settings.popupMessages.orderConfirm);
  }
  else {
    window.alert(settings.popupMessages.orderIncomplete);
  }
};

const OrderForm = ({ tripCost, options, setOrderOption }) => {
  return (
    <Grid>
      <Row>
        {pricing.map((option) => (
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary options={options} cost={tripCost} />
        </Col>
        <Button onClick={() => validateOrderData(options, tripCost)}>Order now!</Button>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  cost: PropTypes.string,
  countryName: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
  tripCost: PropTypes.string,
};

export default OrderForm;