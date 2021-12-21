/* eslint-disable react/jsx-props-no-spreading */
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}))

/**
 * Just a simple buttons container for now
 *
 */
const Shuriken = function ({ color = 'primary', ...rest }) {
  const classes = useStyles()
  return (
    <form>
      <Button className={classes.button} color={color} {...rest}>Shuriken</Button>
      <Button color="primary" className={classes.button}>
        Primary
      </Button>
      <Button color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button>
      <Button href="#flat-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="flat-button-file"
        multiple
        type="file"
      />
      <label htmlFor="flat-button-file">
        <Button component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </form>
  )
}

Shuriken.propTypes = {
  // eslint-disable-next-line react/require-default-props
  color: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  onClick: PropTypes.func,
}

export default Shuriken
