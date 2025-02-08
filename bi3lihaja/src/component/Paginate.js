import React from 'react'

import { Pagination } from 'react-bootstrap'
import { LinkContainer} from 'react-router-bootstrap'



function Paginate({pages,page,isAdmin = 'false'}) {


  return (
    pages > 1 && (
        <Pagination style={{margin:'20px',borderRadius:'50px'}}>
            {[...Array(pages).keys()].map((x)=>(
                <LinkContainer key={x + 1 } to= {
                   
                    `/?page=${x+1}`
            
                    } style={{margin:'6px',borderRadius:'50px'}}>
                    <Pagination.Item active = {x + 1 === page} style = {{color:'black',backgroundColor:'red'}} > {x + 1} </Pagination.Item>

                     </LinkContainer>

            )
            )}
        </Pagination>
    )
  )
}

export default Paginate