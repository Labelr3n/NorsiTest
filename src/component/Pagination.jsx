import React, { useEffect } from 'react'

function Pagination({setLimit, totalClient, paginate}) {
    const pageClient = []

    for (let i = 1; i <= Math.ceil(totalClient / setLimit); i++) {
        pageClient.push(i)
    }
    

  return (
    <div>
      <ul className='pagination'>
        {
            pageClient.map(number => (
                <li className='page-item' key={number}>
                    <a href="#" className="page-link" onClick={() => paginate(number)}>
                        {number}
                    </a>
                </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Pagination
