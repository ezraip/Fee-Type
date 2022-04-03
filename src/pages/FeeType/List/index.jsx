import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb } from "../../../components";
import { Link, useHistory } from "react-router-dom";
import { Collapse, Form, OverlayTrigger, Tooltip } from "react-bootstrap";
import { filePlus } from "../../../assets";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import { data } from "./data";

export default function List() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [list, setList] = useState(data);

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
        <button className="datatable-btn" onClick={() => handleDelete(row.id)}>
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        var arr = data.findIndex(function (e) {
          return e.id === id;
        });
        if (arr !== -1) data.splice(arr, 1);
        setList(data);
        console.log("new data: ", list);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

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
        <div className="d-flex align-items-center">
          <div className="search-datatable">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="advanced-btn w-100">
            <button
              className="advanced-option-btn"
              onClick={() => setOpen(!open)}
            >
              <span className="px-2 fw-bold">Advanced Options</span>
              <FontAwesomeIcon
                icon={`fa-solid ${open ? "fa-angles-down" : "fa-angles-up"} `}
              />
            </button>
          </div>
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
      <Collapse in={open}>
        <div className="advanced-option-collapse" id="advanced-option-collapse">
          <div className="d-flex justify-content-between">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold">Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Form.Select>
            </Form.Group>
            <div>
              <button className="refresh-btn">
                <FontAwesomeIcon icon="fa-solid fa-rotate" />
              </button>
            </div>
          </div>
        </div>
      </Collapse>
      <DataTable
        columns={columns}
        data={list}
        pagination
        selectableRows
        dense
      />
    </div>
  );
}
