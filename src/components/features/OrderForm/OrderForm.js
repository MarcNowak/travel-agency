import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OrderForm = ({ tripCost, options, pricing, id}) => {
  return (
    <Grid>
      <Row>
        {pricing.map(options => (
          <Col md={4} key={id}>
            <OrderOption {...options} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} tripOptions={options} />
        </Col>
      </Row>
    </Grid >
  );
};

export default OrderForm;