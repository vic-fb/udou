import styled from 'styled-components';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generateCalendar from 'antd/es/calendar/generateCalendar';

const AntdCalendar = generateCalendar(dayjsGenerateConfig);

export const Wrapper = styled.div`
    width:40%;
    margin-top: 40px;
    box-sizing: border-box;
`;

export const StyledCalendar = styled(AntdCalendar)`
    padding: 20px;
    background-color: lightgrey;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    .ant-picker-panel {
        border-radius: 8px;
    }
`;
