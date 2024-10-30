import React from 'react'
import UseState from '../../react-study/A_useState'
import UseEffect from '../../react-study/B_useEffect'
import StateEffect from '../../react-study/BookFilter'
import ReactCookie from '../../react-study/D_react_cookie'

export default function ReactStudy() {
  return (
    <>
    <h2>UseState: 상태관리</h2>
    <UseState/>

    <h2>UseEffect: 부수효과</h2>
    <UseEffect/>

    <h2>10/30 도서 test </h2>
    <StateEffect/>

    <h2>ReactCookie: 쿠키상태관리</h2>
    <ReactCookie/>
    </>
  )
}
