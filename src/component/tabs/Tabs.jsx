import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

export default function Tabs({state}) {

  return (
    <div className='container'>
      <Table state={state}/>
    </div>
  )
}
