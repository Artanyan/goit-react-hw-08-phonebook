import { useSelector, useDispatch } from 'react-redux';
import { allActions, allSelectors } from 'redux/phonebook';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
}));

const Filter = () => {
  const filter = useSelector(allSelectors.getFilter);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onChangeValue = e => dispatch(allActions.changeFilter(e.target.value));

  return (
    <form className={classes.root} noValidate>
      <TextField
        id="outlined-basic"
        label="Find contacts by name"
        variant="outlined"
        type="text"
        value={filter}
        onChange={onChangeValue}
      />
    </form>
  );
};

export default Filter;
