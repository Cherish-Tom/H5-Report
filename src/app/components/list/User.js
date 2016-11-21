import React from 'react';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import DownIcon from 'material-ui/svg-icons/Hardware/keyboard-arrow-down';
const UserList = () => (
  <List>
      <ListItem
          style= {{
              "borderBottom":"1px solid #ccc",
          }}
          primaryText={
            <div style={{"color":"red",}}>东方</div>
          }
          rightIcon={
            <DownIcon />
          }
      />
    <ListItem      
      primaryText={
        <div style={{"color":"red",}}>东方</div>
      }
    />
    <ListItem      
      primaryText={
        <div>东方</div>
      }
    />
    <ListItem      
      primaryText={
        <div>东方</div>
      }
    />
    <ListItem      
      primaryText={
        <div>东方</div>
      }
    />
  </List>
);

export default UserList;