import React from 'react';
import { Avatar, List, Radio, Calendar, Badge } from 'antd';
import { EventStyles } from './EventStyles';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const DashboardList = props => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={props.events}
            renderItem={item => {
                if (item.eventType === "hidden") {
                    return <div></div>
                }
                return (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar icon={EventStyles[item.eventType].icon} shape="square" style={{backgroundColor: EventStyles[item.eventType].color}} />}
                            title={item.date}
                            description={item.text}
                        /> 
                    </List.Item>
                );
            }}
        />
    )
}

const DashboardCalendar = props => {
    const dateCellRender = (value) => {
        let events = props.events.filter(event => event.date === value.format("YYYY-MM-DD"));
        return (
            <ul style={{
                listStyle: "none",
                margin: 0,
                padding: 0
            }}>
                {
                    events.map(item => {
                        if (item.eventType === "hidden") {
                            return <li key={item.id}></li>
                        }
                        return (
                            <li key={item.id}>
                                <Badge status={EventStyles[item.eventType].status} text={item.text} style={{
                                    overflow: "hidden",
                                    whiteSpace: "nowrap",
                                    width: "100%",
                                    textOverflow: "ellipsis",
                                    fontSize: "12px"
                                }}/>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }

    return (
        <Calendar 
            dateCellRender={dateCellRender}
        />
    );
}

class Dashboard extends React.Component {
    state = {
        viewType: "a"
    }

    onChange = (e) => {
        this.setState({viewType: e.target.value});
    }

    render() {
        if (this.props.visible) {
            if (this.props.course !== {}) {
                return (
                    <div>
                        <RadioGroup onChange={this.onChange} defaultValue="a">
                            <RadioButton value="a">List</RadioButton>
                            <RadioButton value="b">Calendar</RadioButton>
                        </RadioGroup>
                        {this.state.viewType==="a" ? <DashboardList events={this.props.course.events}/> : <DashboardCalendar events={this.props.course.events}/>}
                    </div>
                );
            }
        }
        return null;
    }
}

export default Dashboard;