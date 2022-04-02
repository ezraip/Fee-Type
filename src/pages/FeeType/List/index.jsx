import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "../../../components";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

export default function List() {
  const CustomDescription = ({ row }) => (
    <div>
      <div>{row.description}</div>
      <div>
        <div
          data-tag="allowRowEvents"
          style={{
            color: "grey",
            overflow: "hidden",
            whiteSpace: "wrap",
            textOverflow: "ellipses",
          }}
        ></div>
      </div>
    </div>
  );

  const CustomAction = ({ row }) => (
    <div className="d-flex justify-content-around">
      <Link className="datatable-button" to={`/fee-type/${row.id}`}>
        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
      </Link>
      <button className="datatable-button">
        <FontAwesomeIcon icon="fa-solid fa-eye" />
      </button>
      <button className="datatable-button">
        <FontAwesomeIcon icon="fa-solid fa-trash-can" />
      </button>
    </div>
  );

  const columns = useMemo(
    () => [
      {
        name: "Fee Type Code",
        selector: (row) => row.code,
        sortable: true,
      },
      {
        name: "Fee Type Name",
        selector: (row) => row.name,
        sortable: true,
      },
      {
        name: "Description",
        selector: (row) => row.description,
        sortable: true,
        cell: (row) => <CustomDescription row={row} />,
      },

      {
        name: "Status",
        selector: (row) => row.status,
        sortable: true,
      },
      {
        name: "Actions",
        button: true,
        cell: (row) => <CustomAction row={row} />,
        ignoreRowClick: true,
      },
    ],
    []
  );

  const data = [
    {
      id: 1,
      code: "1",
      name: "Service Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum. Etiam euismod nunc vel justo pretium, et pulvinar dolor malesuada.",
      status: "active",
      action: "1988",
    },
    {
      id: 2,
      code: "2",
      name: "Reissue Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
    {
      id: 3,
      code: "3",
      name: "Cancellation Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
    {
      id: 4,
      code: "4",
      name: "Refund Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
    {
      id: 5,
      code: "5",
      name: "MDR Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
    {
      id: 6,
      code: "6",
      name: "After Office Charge",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
    {
      id: 7,
      code: "7",
      name: "Late Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
    {
      id: 8,
      code: "8",
      name: "Domestic Flight Service Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
    {
      id: 9,
      code: "9",
      name: "International Flight Service Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
    {
      id: 10,
      code: "10",
      name: "Domestic Hotel Service Fee",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sollicitudin turpis vel enim efficitur interdum.",
      status: "active",
      action: "1988",
    },
  ];

  // const handleButtonClick = () => {
  //   alert("clicked");
  // };

  return (
    <div className="content">
      <Breadcrumb
        firstContent={{ name: "Master Data Management", link: "#" }}
        content={[{ name: "Fee Type", link: false }]}
      />
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <h4>Fee Type</h4>
      </div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        selectableRows
        dense
      />
    </div>
  );
}
