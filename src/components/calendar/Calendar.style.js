import styled from 'styled-components';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';

const AntdCalendar = generateCalendar(dayjsGenerateConfig);

export const Wrapper = styled.div`
  width:100%;
  margin-top: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-width: 295px;
  
  @media (min-width: 900px) {
    width: 40%;
    margin-top: 40px;
  }
`;

export const StyledCalendar = styled(AntdCalendar)`
    padding: 20px;
    background-color: lightgrey;
    box-sizing: border-box;
    border-radius: 10px;
    width: 100%;
    .ant-picker-panel {
        border-radius: 10px;
    }
  margin-bottom: 15px;
`;
