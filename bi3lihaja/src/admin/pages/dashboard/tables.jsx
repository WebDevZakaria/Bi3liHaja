import { useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { projectsTableData } from "../../data/projects-table-data";
import { authorsTableData } from "../../data/authors-table-data";
import NavBar from "./NavBar";

import { useDispatch,useSelector } from 'react-redux';

import { listProducts } from '../../../actions/productActions';

import { Link } from 'react-router-dom'



 function Tables() {
  const dispatch = useDispatch()
  const productList = useSelector(state=>state.productList)  
  const { products }  = productList



     useEffect(()=>{

        dispatch(listProducts())

   },[dispatch])



  // here you find all the product in the database
  
  return (
    <div>
    <NavBar />

    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white" className='text-center'>
            كل المنتجات
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["المنتج", "user", "السعر"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map(
                (product) => {
                  const className = `py-3 px-5 ${
                    product._id === products.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={product._id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src={product.image} alt='' size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {product.name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {product.user}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {product.user}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          
                        </Typography>
                      </td>
                     
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {product.price} DA
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-red-600"
                        >
                          delete
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
     
    </div>

    </div>
  );
}

export default Tables;
