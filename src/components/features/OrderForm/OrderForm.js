import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import { Grid, Row, Col } from 'react-flexbox-grid';

const OrderForm = ({ tripCost, options }) => {
  <Grid>
    <Row>
      <Col xs={12}>
        <OrderSummary tripCost={tripCost} tripOptions={options} />
      </Col>
    </Row>
  </Grid>
};

export default OrderForm;