import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../common/button';
import RatePanelComponentStyles from './RatePanelComponentStyle';

export const RATE_ACTIONS = {
  UP: 'UP',
  DOWN: 'DOWN',
};

export const RatePanelComponent = ({
  classes, rate, onRate, canRate,
}) => (
  <div className={classes.rateWrapper}>
    <Button className={classes.rateActionButton}
      onClick={() => onRate(RATE_ACTIONS.UP)}
      disabled={!canRate}
    >
      <FontAwesomeIcon icon={['far', 'thumbs-up']}/>
    </Button>
    <div className={classes.rateLabel}>{rate}</div>
    <Button className={classes.rateActionButton}
      onClick={() => onRate(RATE_ACTIONS.DOWN)}
      disabled={!canRate}
    >
      <FontAwesomeIcon icon={['far', 'thumbs-down']}/>
    </Button>
  </div>
);

RatePanelComponent.propTypes = {
  classes: PropTypes.object,
  rate: PropTypes.number,
  onRate: PropTypes.func,
  canRate: PropTypes.bool,
};

export default withStyles(RatePanelComponentStyles)(RatePanelComponent);
