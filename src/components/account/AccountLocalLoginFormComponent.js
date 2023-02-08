import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil"

import { Input } from "../basic/Input"
import { LgButton } from "../basic/Button"
import Div from "../basic/Div"
import P from "../basic/P"
import EventInput from "./EventInput"
import useInput from "../../hooks/useInput"
import useFocusInput from "../../hooks/useFocusInput"

import { localLoginState } from "../../recoil/accountState"

const AccountLocalLoginFormComponent = () => {
  const [email, onChangeEmail] = useInput()
  const [emailFocus, onFocusEmail, onBlurEmail] = useFocusInput()
  const [password, onChangePassword] = useInput()
  const [passwordFocus, onFocusPassword, onBlurPassword] = useFocusInput()
  const [isCheck, setIsCheck] = useState(false)

  const [localLogin, setLocalLogin] = useRecoilState(localLoginState)

  const isCheckHandler = (e) => {
    if (e.target.checked) {
      setIsCheck(true)
    } else {
      setIsCheck(false)
    }
  }

  useEffect(() => {
    setLocalLogin({
      ...localLogin,
      email: email,
      pw: password,
      autoLogin: isCheck,
    })
  }, [email, password, isCheck])

  return (
    <React.Fragment>
      <EventInput
        placeholder={"이메일"}
        type={"email"}
        src={"../assets/images/email.svg"}
        onChange={(e) => {
          onChangeEmail(e)
        }}
        onFocus={onFocusEmail}
        onBlur={onBlurEmail}
        isFocus={emailFocus}
      />
      <EventInput
        placeholder={"비밀번호"}
        type={"password"}
        src={"../assets/images/password.svg"}
        onChange={onChangePassword}
        onFocus={onFocusPassword}
        onBlur={onBlurPassword}
        isFocus={passwordFocus}
      />

      <Div
        margin="0px 0px 12px 0px"
        width="400px"
        justifyContent="space-between"
        display="flex"
      >
        <Div display="flex">
          <Input
            type="checkbox"
            margin="0px 5px 0px 0px"
            onClick={(e) => {
              isCheckHandler(e)
            }}
          />
          <Div display="flex">
            <P>로그인 상태 유지</P>
          </Div>
        </Div>
        <Div display="flex">
          <Link style={{ textDecoration: "none" }} to="/signup">
            <Div display="flex">
              <P>회원가입</P>
            </Div>
          </Link>

          <Div display="flex" margin="0px 5px 0px 5px">
            <P>|</P>
          </Div>

          <Link style={{ textDecoration: "none" }} to="/find-pw">
            <Div display="flex">
              <P>비밀번호 찾기</P>
            </Div>
          </Link>
        </Div>
      </Div>

      <LgButton
        backgroundColor="primary"
        margin="0px 0px 30px 0px"
        onClick={() => {
          console.log(localLogin)
        }}
      >
        <P color="white" fontSize="lg" fontWeight="700">
          로그인
        </P>
      </LgButton>
    </React.Fragment>
  )
}

export default AccountLocalLoginFormComponent
