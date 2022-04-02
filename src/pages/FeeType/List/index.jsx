import { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "../../../components";
import { Link, useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { filePlus } from "../../../assets";
import { data } from "./data";

export default function List() {
  const history = useHistory();

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
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-top">Click to edit</Tooltip>}
      >
        <button
          className="datatable-btn"
          onClick={() =>
            history.push({
              pathname: `/fee-type/${row.id}`,
              state: {
                feeTypeCode: row.id,
                feeTypeName: row.name,
                description: row.description,
              },
            })
          }
        >
          <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
        </button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-top">Click to view details</Tooltip>}
      >
        <button className="datatable-btn">
          <FontAwesomeIcon icon="fa-solid fa-eye" />
        </button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-top">Click to delete</Tooltip>}
      >
        <button className="datatable-btn">
          <FontAwesomeIcon icon="fa-solid fa-trash-can" />
        </button>
      </OverlayTrigger>
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

  // const handleButtonClick = () => {
  //   alert("clicked");
  // };

  return (
    <div className="content container-2xl">
      <Breadcrumb
        firstContent={{ name: "Master Data Management", link: "#" }}
        content={[{ name: "Fee Type", link: false }]}
      />
      <div style={{ marginTop: "10px", marginBottom: "30px" }}>
        <h4>Fee Type</h4>
      </div>
      <div className="filter-datatable d-flex align-items-center justify-content-between">
        <div className="search-datatable">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">Click to download</Tooltip>}
          >
            <button className="download-btn">
              <FontAwesomeIcon icon="fa-solid fa-download" />
            </button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">Click to print</Tooltip>}
          >
            <button className="print-btn">
              <FontAwesomeIcon icon="fa-solid fa-print" />
            </button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip id="tooltip-top">Click to create</Tooltip>}
          >
            <Link className="btn create-btn" to={"/fee-type/create"}>
              <img src={filePlus} alt="File Plus" />
              {"  "}
              <span>Create New</span>
            </Link>
          </OverlayTrigger>
        </div>
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
