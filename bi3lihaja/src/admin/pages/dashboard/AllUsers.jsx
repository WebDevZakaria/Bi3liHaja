import React,{useEffect} from 'react'
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

import { listUsers } from '../../../actions/userActions';

import { Link } from 'react-router-dom'


function AllUsers() {


  const dispatch = useDispatch()
  const userList = useSelector(state=>state.userList)  

  const { users }  = userList



     useEffect(()=>{

        dispatch(listUsers())

   },[dispatch])













  return (
     <div>
    <NavBar />

    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">

          <Typography variant="h6" color="white" className='text-center'>
            كل المستخدمين
          </Typography>

        </CardHeader>

        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["اسم المستخدم", "رقم الهاتف", "الولاية", "", ""].map((el) => (
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
              {users.map(
                (user) => {
                  const className = `py-3 px-5 ${
                    user.id === users.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={user.id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src='' alt='' size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {user.first_name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {user.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {user.phone_number}
                        </Typography>
                        <Typography className="text-xs font-normal text-blue-gray-500">
                          
                        </Typography>
                      </td>
                     
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {user.wilaya} DA
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
  )
}

export default AllUsers
