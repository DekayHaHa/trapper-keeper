import React from 'react';
import { Divider, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

export const NoteItems = ({ noteItems, classes }) => {
    const itemsList = noteItems.map(item => (
      <div iscomplete={JSON.stringify(item.isComplete)} key={item.id} >
        <Typography id={item.id} className={item.isComplete ? classes.strikethrough : ''} style={{ color: '#000' }} >
          {item.text}
        </Typography>
        <Divider light />
      </div>
    ));

  console.log('items list: ', itemsList)
  console.log(classes)
    return (
      <div>
        {itemsList.filter(item => item.props.iscomplete === 'false')}
        <Divider className={classes.divider} />
        {itemsList.filter(item => item.props.iscomplete === 'true')}
      </div>
    );
};

const styles = {
  divider: {
    backgroundColor: '#9445FF'
  },
  strikethrough: {
    textDecoration: 'line-through'
  }
};

export default withStyles(styles)(NoteItems);