import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../common/button';
import RatePanelComponentStyles from './RatePanelComponentStyle';
import withAuthorization from '../../hocs/withAuthorization';

export const RATE_ACTIONS = {
  UP: 'UP',
  DOWN: 'DOWN',
};

export const RatePanelComponent = (props) => {
  const {
    classes,
    rate,
    ratedUsers,
    onRate,
    authorizedUser,
  } = props;

  const canNotRateUp = !!(ratedUsers || [])
    .find(ratedUser => ratedUser.action && ratedUser.user.id === authorizedUser.id);
  const canNotRateDown = !!(ratedUsers || [])
    .find(ratedUser => !ratedUser.action && ratedUser.user.id === authorizedUser.id);

  return (
    <div className={classes.rateWrapper}>
      <Button className={classes.rateActionButton}
        type='success'
        disabled={canNotRateUp}
        onClick={() => onRate(RATE_ACTIONS.UP)}
      >
        <FontAwesomeIcon icon={['far', 'thumbs-up']}/>
      </Button>
      <div className={classes.rateLabel}>{rate}</div>
      <Button className={classes.rateActionButton}
        disabled={canNotRateDown}
        type='danger'
        onClick={() => onRate(RATE_ACTIONS.DOWN)}
      >
        <FontAwesomeIcon icon={['far', 'thumbs-down']}/>
      </Button>
    </div>
  );
};

RatePanelComponent.propTypes = {
  classes: PropTypes.object,
  ratedUsers: PropTypes.array,
  authorizedUser: PropTypes.object,
  rate: PropTypes.number,
  onRate: PropTypes.func,
};

export default withAuthorization(withStyles(RatePanelComponentStyles)(RatePanelComponent));
