import { useEffect, useState } from 'react';
import './app.css'
import API from './component/API/API';
import Checkbox from './component/checkbox';
import AddClient from './component/form/AddClient';
import Modal from './component/modal/MyModal';
import Pagination from './component/Pagination';
import Table from './component/table/table';
import Tabs from './component/tabs/Tabs';
import MyButton from './component/UI/button/MyButton';


function App() {

  const [state, setState] = useState([]);
  const [dirSort, setDirSort] = useState('')
  const [modal, setModal] = useState(false)
  const [setLimit] = useState(10)
  const [page, setPage] = useState(1)


  async function fetchPosts() {
    const response = await API.getAll()
    setState(response.data)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const [dragList, setDragList ] = useState([
    {id: 1, order: '1', text: 'ID'},
    {id: 2, order: '2', text: 'NAME'},
    {id: 3, order: '3', text: 'SEX'},
    {id: 4, order: '4', text: 'JOB'},
    {id: 5, order: '5', text: 'BIRTHDAY'},
  ])
  

  const lastClientIndex = page * setLimit;
  const firstClientIndex = lastClientIndex - setLimit;
  const currentPage = state.slice(firstClientIndex, lastClientIndex)

  const paginate = pageNumber => setPage(pageNumber)

  const sort = (field) => {
    setDirSort(field)
    dirSort ?
    setState([...state].sort((a,b) => a[field].localeCompare(b[field], undefined,{'numeric': true})))
    :
    setState([...state].sort((a,b) => b[field].localeCompare(a[field], undefined,{'numeric': true})))
    setDirSort(!dirSort)
  }
  

  return (
    <div className="App">
      <div className='container' style={{maxWidth: '1920px'}}>
      <Modal visible={modal} setVisible={setModal}>
      <AddClient state={state} setState={setState} setVisible={setModal}/>
      </Modal>
      <div style={{display: 'flex', flexDirection: 'column', width: '220px'}}>
      <MyButton style={{margin: '10px'}} children={'Новый сотрудник'} onClick={() => setModal(true)}/>
      </div>
      <Table  props={currentPage} sort={sort}/>
       <Checkbox dragList={dragList} setDragList={setDragList}/>
      </div>
      <Pagination
      setLimit={setLimit}
      totalClient={state.length}
      paginate={paginate}
      />
      <Tabs state={currentPage} />
    </div>
  );
}

export default App;
