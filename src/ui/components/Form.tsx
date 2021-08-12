import React from 'react'
import { connect } from 'react-redux'
import { ApplicationState } from '../reducer'

import { Button, TextField, } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));


const initialData = {
    name: '',
    queriedAt: '',
    expiresAt: ''
} 


const Form = (props) => {
    /*
    FIXME: reset form field when form is submitted
    */

    const [data, setData] = React.useState({...initialData})
    
    const handleSubmit = (event) => {
        event.preventDefault()
        setData({...initialData})

        console.log(data)
        const newData = {name: data.name,
                        queriedAt: data.queriedAt,
                        expiresAt: data.expiresAt}
                        
        props.onCreate(newData)
    }

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value 
        })
    }

    const handleReset = () => {
        setData({...initialData})
    }

    const classes = useStyles();

    return (
        <>
        <Box display="flex" p={1} bgcolor="background.paper">
            <Box p={1} width="100%" bgcolor="grey.300">
                <div className={classes.root}>
                    <form onSubmit={handleSubmit} id="form-id">

                        <TextField
                            id="standard-full-width"
                            label="Name"
                            style={{ margin: 8 }}
                            placeholder="Name"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                            type='text'
                            name='name'
                            onChange={handleInputChange}
                        />

                        <TextField
                            label="queriedAt"
                            id="margin-none"
                            className={classes.textField}
                            required
                            type='text'
                            name='queriedAt'
                            placeholder="queriedAt"
                            onChange={handleInputChange}
                        />

                        <TextField
                            label="expiresAt"
                            id="margin-dense"
                            className={classes.textField}
                            required
                            type='text'
                            name='expiresAt'
                            placeholder="expiresAt"
                            onChange={handleInputChange}
                        />

                        <Button 
                            style={{ margin: 8 }}
                            type='submit' 
                            variant="outlined">
                                Add
                        </Button>

                        <Button 
                            style={{ margin: 8 }}
                            type='reset' 
                            variant="outlined"
                            onClick={handleReset}>
                                Clear
                        </Button>
                    </form>
                </div>
            </Box>
        </Box>
        </>
    )
}

const mapStateToProps = (state: ApplicationState) => ({
    text: state.text
})

export default connect(mapStateToProps)(Form)
