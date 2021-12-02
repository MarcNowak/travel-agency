import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import {Grid, Row, Col} from 'react-flexbox-grid';

const OrderForm = () => (
<Grid>
  <Row>
    <Col xs={12}>
      <OrderSummary />
    </Col>
  </Row>
</Grid>
);

export default OrderForm;