import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OrderForm = (cost, options) => (
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={cost} tripOptions={options} />
      </Col>
    </Row>
  </Grid>
);

export default OrderForm;