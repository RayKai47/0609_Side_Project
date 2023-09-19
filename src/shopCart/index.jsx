import { useSelector } from 'react-redux';
import { Container, Table} from 'react-bootstrap';
import styled from 'styled-components';
import TableBody from './components/TableBody';

const tableTitle = [
  "選取",
  "圖片",
  "品名",
  "數量",
  "單價",
  "總價",
  "刪除",
]

const Msg = styled.p`
  margin-top: 150px;
  display: block;
`
const TableContainer = styled.div`
  min-height: 60vh;
`

const ShopCart = () => {
  const cartList = useSelector((state)=>state.cart);

  return (
      <TableContainer className="container mt-5">
        {cartList[0] ?
          <Table striped bordered hover>
            <>
              <thead>
                <tr>
                  {tableTitle.map((title) => (
                    <th key={title}>{title}</th>
                  ))}
                </tr>  
              </thead>
              <TableBody cartList={cartList}/>
            </>
          </Table>
        :
          <Msg className="fs-3 text-danger text-center">您尚未新增商品</Msg>
        }
      </TableContainer>
  )
};



export default ShopCart;