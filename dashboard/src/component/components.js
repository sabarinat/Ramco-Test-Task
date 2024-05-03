import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getComponentDetailsByOverall, getComponentDetailsByCount } from '../services/componentservice'
import LineChart from '../component/line-chart';
import BarChart from '../component/bar-chart';
import DoughnutChart from '../component/doughnut';
import commonData from '../services/common-datas';
import DataTable from "react-data-table-component";
import { useNavigate } from 'react-router-dom';

export const ComponentData = () => {
    const navigate = useNavigate();
    const [chartDatas, setChartDatas] = useState();
    const [tableData, setTableData] = useState();
    const [tableColumn, setTableColumn] = useState();
    const { id } = useParams()
    const getTableDatas = async () => {
        setTableColumn(commonData.componentColumnDatas());
        const eventsTable = await getComponentDetailsByOverall(id);
        setTableData(eventsTable);
    }
    const getChartDatas = async () => {
        const datas = await getComponentDetailsByCount(id);
        setChartDatas(datas);
    }
    useEffect(() => {
        getChartDatas();
        getTableDatas();
    }, [])

    return (
        <>
            <div className='mainTbale'>
                <button className='backButton' onClick={() => navigate('/')}>Back To Overall</button>
                <div>
                    <DataTable
                        className='common-table'
                        columns={tableColumn}
                        data={tableData}
                        fixedHeader
                        title="Component details"
                        pagination
                    />
                </div>
                {chartDatas && chartDatas.label && chartDatas.label.length ? (
                    <div className='chartsContainer'>
                        <div class="charts">
                            <LineChart chartDatas={chartDatas} />
                        </div>
                        <div class="charts">
                            <BarChart chartDatas={chartDatas} />
                        </div>
                        <div class="charts barChart">
                            <DoughnutChart chartDatas={chartDatas} />
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    )
}