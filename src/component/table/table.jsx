import React from "react";

const Table = ({props, sort}) => {

    function formatDate(date) {
        return date.toString().substr(0,10).replace('-','.').replace('-','.').substr(2,8).split('.').reverse().join('.')
      }

      function swapColumns(table, column1, column2) {
        const rows = table.rows;
        for (let i = 0; i < rows.length; i++) {
          const temp = rows[i].cells[column1].innerHTML;
          rows[i].cells[column1].innerHTML = rows[i].cells[column2].innerHTML;
          rows[i].cells[column2].innerHTML = temp;
        }
      }

      
    

    return (
      <div className="container" style={{maxWidth: '1200px', margin: '0 150px'}}>
        <table id='table' className="table">
          <thead>
            <tr>
              <th onClick={() => {sort('id')}}>ID</th>
              <th onClick={() => {sort('name')}}>NAME</th>
              <th onClick={() => {sort('sex')}}>SEX</th>
              <th onClick={() => {sort('job')}}>JOB</th>
              <th onClick={() => {sort('birthday')}}>BIRTHDAY</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {props.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.sex}</td>
                <td>{item.job}</td>
                <td>{formatDate(item.birthday)}</td>
                <td>
                  <button className="button">
                    {/* <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.7" clip-path="url(#clip0_121_2458)">
                        <path
                          d="M2 11.5002V14.0002H4.5L11.8733 6.62687L9.37333 4.12687L2 11.5002ZM13.8067 4.69354C14.0667 4.43354 14.0667 4.01354 13.8067 3.75354L12.2467 2.19354C11.9867 1.93354 11.5667 1.93354 11.3067 2.19354L10.0867 3.41354L12.5867 5.91354L13.8067 4.69354V4.69354Z"
                          fill="#9873FF"
                        />
                      </g>
                    </svg> */}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Table