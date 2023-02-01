import React from "react"
import styled from "styled-components"
import { useRecoilValue } from "recoil"

import Div from "../../basic/Div"
import P from "../../basic/P"
import { Input } from "../../basic/Input"
import { SmButton } from "../../basic/Button"
import Profile from "../../common/Profile"
import { userInfoState } from "../../../recoil/headerState"

const InputDiv = styled(Div)`
  flex: 1;
`

const CommentInput = (props) => {
  const { commentType, idx } = props
  const userInfo = useRecoilValue(userInfoState)
  const { profile_img, email } = userInfo
  const profileObject = {
    profileImg: profile_img,
    email: email,
  }

  const EnterCommentEvent = (e) => {
    const CommentInputValue = document.getElementById(
      `${commentType}Input_${idx}`
    ).value
    if (commentType === "comment") {
      alert(`post번호가 ${idx}인 곳에 ${CommentInputValue} 댓글 추가`)
    } else {
      alert(`comment번호가 ${idx}인 곳에 ${CommentInputValue} 대댓글 추가`)
    }
  }

  return (
    <Div width="100%">
      <Div display="flex" width="100%">
        <Profile
          profileObject={profileObject}
          width={commentType === "comment" ? "40px" : "24px"}
        />
        <InputDiv margin="0 0 0 6px" borderBottom="1px solid #C8C8C8">
          <Input
            id={`${commentType}Input_${idx}`}
            type="text"
            placeholder={
              commentType === "comment" ? "댓글 추가" : "대댓글 추가"
            }
            width="100%"
            padding="0"
          />
        </InputDiv>
      </Div>
      <Div
        display="flex"
        justifyContent="end"
        width="100%"
        margin={commentType === "comment" ? " " : "5px"}
      >
        <SmButton onClick={EnterCommentEvent} backgroundColor="primary">
          <P color="white" fontSize="sm" fontWeight="700">
            입력
          </P>
        </SmButton>
      </Div>
    </Div>
  )
}

export default CommentInput