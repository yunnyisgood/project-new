import React, { Children } from 'react'

const Home = () => (<>
<table className="table_lay">
<tr><td><h1>홈</h1></td></tr>
<tr><td><button>서버 연결 테스트</button></td></tr>
</table>
{Children}
</>)
export default Home

export const Counter = () => {
    return (<></>)
}