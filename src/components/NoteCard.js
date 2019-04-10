import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Tooltip, IconButton, CardContent, CardHeader } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import NoteItems from './NoteItems';
import Icon from '@material-ui/core/Icon';
import { deleteNote } from '../thunks/deleteNote';

export class NoteCard extends Component {
    render() {
        const { note, classes, deleteNote } = this.props;
        return (
            <Tooltip title='Edit Note' placement='bottom' id={note.id} enterDelay={500}>
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

NoteCard.propTypes = {
    note: PropTypes.object,
    classes: PropTypes.object,
    deleteNote: PropTypes.func
};

const styles = {
    link: {
        textDecoration: 'none'
    },
    card: {
        margin: 15,
        minWidth: 275,
        display: 'inline-block'
    },
    title: {
        color: '#515151'
    },
    delete: {
        float: 'right',
        margin: '5px'
    }
};

export const mapDispatchToProps = dispatch => ({
    deleteNote: id => dispatch(deleteNote(id))
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(NoteCard));
