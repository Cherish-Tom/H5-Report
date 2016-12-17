import React, { Component } from 'react';
import areIntlLocalesSupported from 'intl-locales-supported';
import DatePicker from 'material-ui/DatePicker';
let DateTimeFormat;
if (areIntlLocalesSupported(['zh', 'zh-Hans-CN'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/zh');
    require('intl/locale-data/jsonp/zh-Hans-CN');
}
export default class DatePick extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <DatePicker
                defaultDate={this.props.date}
                name={this.props.name}
                textFieldStyle={{width: '100%', height: 40, lineHeight: '40px'}}
                underlineShow={false}
                okLabel='确认'
                cancelLabel='取消'
                DateTimeFormat={DateTimeFormat}
                locale='zh-Hans-CN'
                dialogContainerStyle={{minWidth: '75%'}}
            />
        )
    }
}
