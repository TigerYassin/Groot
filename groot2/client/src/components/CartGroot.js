import React from 'react';
import { Input, Button } from 'reactstrap';
import { AppNavBar } from './AppNavBar';
import {Card, CardBody, Table, TableHead, TableBody} from 'mdbreact';
import './CartGroot.css'


import 'bootstrap/dist/css/bootstrap.min.css';

const CartGroot = () => {
  return (
      <div>
              <AppNavBar />
    <div className="CartGroot">
    <Card>
        {/* <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" /> */}
        <CardBody>
        <Table responsive>
            <TableHead color="primary-color" textWhite>
                <tr>
                <th scope="row"></th>
                <th>Location</th>
                <th>Product</th>
                <th>Price</th>
                <th className="qty">QTY</th>
                <th>Amount</th>
                </tr>
            </TableHead>

            <TableBody>
                <tr>
                <th scope="row">1</th>
                <td className="location">60 Luckie St NW, Atlanta, GA 30303</td>
                <td>Fruits</td>
                <td>$10.50</td>
                <td> 
            <Input type="number" name="quantity" className="qtyInput"></Input>
                </td>
                <td style={{fontWeight:'bold'}}>$10.50</td>
                </tr>

                <tr>
                <th scope="row">2</th>
                <td className="location">60 Luckie St NW, Atlanta, GA 30303</td>
                <td>Vegetable</td>
                <td>$11</td>
                <td> 
            <Input type="number" name="quantity" className="qtyInput"></Input>
                </td>
                <td style={{fontWeight:'bold'}}>$11</td>
                </tr>

                <tr>
                <th scope="row">3</th>
                <td className="location">60 Luckie St NW, Atlanta, GA 30303</td>
                <td>Juices</td>
                <td> $5.65</td>
                <td> 
            <Input type="number" name="quantity" className="qtyInput"></Input>
                </td>
                <td style={{fontWeight:'bold'}}>$5.65</td>
                </tr>

                <tr>
                <th scope="row"></th>
                <td colSpan="2"></td>
                <td id="total">Total</td>
                <td id="totalPrice">$70</td>
                <td> 
            <Button type="button" color="primary">Complete purchase
            </Button>
                </td>
                </tr>

            </TableBody>
        </Table>
        </CardBody>
    </Card>
    </div>
      </div>
  )
};

export default CartGroot;