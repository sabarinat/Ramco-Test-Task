const componentColumnDatas = () => {
    return ([
      {
        name: "id",
        selector: (row) => row.id,
      },
      {
        name: "component",
        selector: (row) => row.component,
      },
      {
        name: "startTime",
        selector: (row) => row.startTime,
      },
      {
        name: "endTime",
        selector: (row) => row.endTime,
      },
    ]);
}

const eventColumnDatas = () => {
  return ([
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "component",
      selector: (row) => row.component,
    },
    {
      name: "time",
      selector: (row) => row.time,
    },
    {
      name: "event",
      selector: (row) => row.event,
    },
  ]);
}

export default {
  componentColumnDatas: componentColumnDatas,
  eventColumnDatas: eventColumnDatas
};