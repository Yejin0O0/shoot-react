import React from "react"
import styled from "styled-components"
import { Outlet } from "react-router-dom"

import AdminNavComponent from "../../components/nav/AdminNavComponent"
import Div from "../../components/basic/Div"
import P from "../../components/basic/P"

const HeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  height: 60px;
  top: 0px;
  background-color: white;
  z-index: 2;
  margin: 0px 0px 0px 25px;
`

const AdminPage = () => {
  return (
    <React.Fragment>
      <HeaderBox>
        <P fontSize="title" fontWeight="700">
          SHOOT!
        </P>
      </HeaderBox>

      <Div
        display="flex"
        direction="row"
        width="100%"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <AdminNavComponent />
        <Outlet></Outlet>
      </Div>
    </React.Fragment>
  )
}

export default AdminPage