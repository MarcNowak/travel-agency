import React from 'react';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import { Grid, Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';

const OrderForm = ({ tripCost, pricing, id}) => {
  return (
    <Grid>
      <Row>
        {pricing.map(options => (
          <Col md={4} key={id}>
            <OrderOption {...options} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} tripOptions={pricing} />
        </Col>
      </Row>
    </Grid >
  );
};

export default OrderForm;