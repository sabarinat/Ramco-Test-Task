
import { useEffect, useState } from 'react';
import { getComponent , getOverallComponent} from '../services/eventsrevice'
import commonData from '../services/common-datas';
import DataTable from "react-data-table-component";
import { useNavigate } from 'react-router-dom';
import '../styles/overall.css';

export const Overall = () => {
  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [tableColumn, setTableColumn] = useState();
  const [overAllDatas, setOverAllDatas] = useState();
  const [columnPageCount, setColumnPageCount] = useState(5);
  const [page, setPage] = useState(1);
  const handleRowClick = async (row) => {
    navigate(`events/${row.id}`);
  };
  const handleComponents = async (row) => {
    navigate(`components/${row.id}`);
  }
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);

   }
const handleChageRowsPerPage = (total) => {
    setColumnPageCount(total);
}
  const uploadOverAll = async () => {
    let componentColumn = commonData.componentColumnDatas();
    const overAllData = await getOverallComponent();
    setTableColumn(componentColumn);
    setOverAllDatas(overAllData);
  };

  const updateComponents = async () => {
    let componentColumn = commonData.componentColumnDatas();
    const data = await getComponent();
    setTableData(data);
    setTableColumn(componentColumn);
  };
  useEffect( () => {
    uploadOverAll();
    updateComponents();
  }, [])
  return (
    <>
      <div className="mainTbale">
      <DataTable
        className='common-table'
        columns={tableColumn}
        data={tableData}
        fixedHeader
        title="Component details"
        pagination
        paginationPerPage={columnPageCount}
        paginationRowsPerPageOptions={[5, 10, 20, 50]}
        paginationTotalRows={tableData.length}
        onRowClicked={handleRowClick}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleChageRowsPerPage}
      />
        <DataTable
        className='common-table'
        columns={tableColumn}
        data={overAllDatas}
        fixedHeader
        title="Overall Details"
        pagination
        onRowClicked={handleComponents}
      />
      </div>
      {/* {chartDatas && chartDatas.label && chartDatas.label.length ? (
        <div>
          <div class="charts">
            <LineChart chartDatas={chartDatas} />
          </div>
          <div class="charts">
            <BarChart chartDatas={chartDatas} />
          </div>
          <div class="charts">
            <DoughnutChart chartDatas={chartDatas} />
          </div>
        </div>
      ) : (
        ""
      )} */}
    </>
  );
}