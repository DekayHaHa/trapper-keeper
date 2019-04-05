import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Card, Tooltip, IconButton, CardContent, CardHeader } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { NoteItems } from './NoteItems';
import Icon from '@material-ui/core/Icon';
import { deleteNote } from '../thunks/deleteNote';

class NoteCard extends Component {

    render() {
        const { note, classes, deleteNote } = this.props;
        console.log('note card props: ', this.props.note)
      return (
        <Tooltip title='Edit Note' placement='bottom' enterDelay={500}>
            <Card className={classes.card}>
                <Link to='/' className={classes.delete}>
                    <Tooltip title='Delete Note'>
                    <IconButton onClick={() => deleteNote(note.id)}>
                        <Icon>delete</Icon>
                    </IconButton>
                    </Tooltip>
                </Link>
                <Link to={`/api/notes/${note.id}`} className={classes.link}>
                    <CardHeader title={note.title} classes={{ title: classes.title }} />
                    <CardContent>
                        <ul>
                            <NoteItems noteItems={note.itemsList} />
                        </ul>
                    </CardContent>
                  </Link>
            </Card>
        </Tooltip>
      )
    }
}

const styles = {
    link: {
        textDecoration: 'none'
    },
    card: {
        margin: 12
    },
    title: {
        color: '#515151'
    },
    delete: {
        float: 'right',
        margin: '5px'
    }
};

export const mapDispatchToProps = (dispatch) => ({
	deleteNote: (id) => dispatch(deleteNote(id))
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(NoteCard));
