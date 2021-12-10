import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import PropTypes from 'prop-types';

const OrderForm = ({ tripCost, options, setOrderOption }) => {
  return (
    <Grid>
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} tripOptions={options} />
        </Col>
      </Row>
    </Grid >
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.object,
  tripOptions: PropTypes.object,
  options: PropTypes.object,
  setOrderOption: PropTypes.object,
};

export default OrderForm;