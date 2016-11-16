import React from 'react';
import {List, ListItem} from 'material-ui/List';
// import Avatar from 'material-ui/Avatar';

const contactData = [
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    }
]


class ContactList extends React.Component {
    render() {
        return (
        <List>
            {contactData.map((item,index) => (
                <ListItem
                    key={index}
                    primaryText={item.name}
                    secondaryText={
                        <p>{item.company}{item.position}{item.tel}</p>
                    }
                />
            ))}
        </List>
        );
    }
}

export default ContactList;
