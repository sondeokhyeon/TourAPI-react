import React from 'react';
import useAsync from '../../util/useAsync';
import styled from 'styled-components';
import { getRepeatInfo } from '../../util/API'
import { SUB_TITLE } from './Detail'

const CONTAINER = styled.div`
    display: flex; 
    width: 95%;
    margin: 20px auto;
    padding-top:20px;
    & + & {
        border-top:1px solid #c3c3c3;
    }
`;

const IMG = styled.img`
    width: 100%;
`

const IMG_CONTAINER = styled.div`
    width: 250px;
    flex:2;
    display:flex;
    justify-content:center;
`;

const DESC_CONTAINER = styled.div`
    flex:4;
    justify-content : center;
    display:flex;
    flex-direction:column;
    margin-left:20px;
`;

const courseParser = (item,index) => {
    return (
        <CONTAINER key={index} >
            <IMG_CONTAINER>
                <IMG src={item.subdetailimg} alt={item.subdetailalt}/>
            </IMG_CONTAINER>
            <DESC_CONTAINER>
                <h3><strong>{item.subname}</strong></h3>
                <p>{item.subdetailoverview}</p>
            </DESC_CONTAINER>
        </CONTAINER>
    )
}

const accParser = (item, index) => {
    return (
        <div key={index} >
        </div>
    )
}

const RepeatInfo = ({contentId, itemNo}) => {
    const args = `ServiceKey=%2B6kreK3SlK%2FHeXSglkdHXVcOjgM%2BHoHwQK%2BbDXAlMNTwbkNSgJXPlywyo7CO1ntAZ5CDfYU4xFI1p%2F9TJ3fbFw%3D%3D&MobileOS=ETC&MobileApp=AppTest&contentId=${contentId}&contentTypeId=${itemNo}`
    const [state] = useAsync(getRepeatInfo, args, true, 'repeat' ) 
    const {loading, data, error} = state;
    let title = '';
    let parser = null;

    if(loading) return <div>2</div>;
    if(error) return <div>1</div>;
    if(!data) return <div>데이터 없습니다.</div>
    
    if(itemNo === "32") {
      title = "숙소소개"  
      parser = accParser
    } else {
      title = "코스소개"
      parser = courseParser
    }
    return (
    <div>
        <SUB_TITLE>{title}</SUB_TITLE>
        {data.info.map(parser)}
    </div>
    )
    
}

export default RepeatInfo;