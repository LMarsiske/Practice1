import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Radium from 'radium';

const styles = custTheme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: custTheme.spacing.unit * 3,
		marginRight: custTheme.spacing.unit * 3,
		[custTheme.breakpoints.up(400 + custTheme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto'
		}
	},
	paper: {
		marginTop: custTheme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${custTheme.spacing.unit * 2}px ${custTheme.spacing.unit *
			3}px ${custTheme.spacing.unit * 3}px`
	},
	avatar: {
		margin: custTheme.spacing.unit,
		backgroundColor: '#680000'
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: custTheme.spacing.unit
	},
	submit: {
		marginTop: custTheme.spacing.unit * 3,
		backgroundColor: '#680000',
		color: 'white'
	}
});

function SignIn(props) {
	const { classes } = props;

	return (
		<main className={classes.main}>
			<CssBaseline />
			<Paper className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form className={classes.form}>
					<FormControl
						color='#680000'
						className={classes.InputLabel}
						margin='normal'
						required
						fullWidth>
						<InputLabel htmlFor='email'>Email Address</InputLabel>
						<Input id='email' name='email' autoComplete='email' autoFocus />
					</FormControl>
					<FormControl margin='normal' required fullWidth>
						<InputLabel htmlFor='password'>Password</InputLabel>
						<Input
							name='password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
					</FormControl>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						className={classes.submit}>
						Sign in
					</Button>
				</form>
			</Paper>
		</main>
	);
}

SignIn.propTypes = {
	classes: PropTypes.object.isRequired
};

export default Radium(withStyles(styles)(SignIn));
