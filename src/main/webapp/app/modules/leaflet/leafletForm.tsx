import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox
} from 'availity-reactstrap-validation';

import { IRootState } from 'app/shared/reducers';
import { getPositionsByYear } from 'app/shared/reducers/leaflet-reducer';

const mapStateToProps = ({ leafletReducer }: IRootState) => ({
  yearPositions: leafletReducer.yearPositions
});

const mapDispatchToProps = { getPositionsByYear };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export interface IformProp extends StateProps, DispatchProps {}

export class LeafletForm extends React.Component<IformProp> {
  handleChange = (event, erros) => {
    this.props.getPositionsByYear(event.target.value);
  };

  renderRadios = years => {
    return (
      <AvRadioGroup name="radioGroup" label="radioGroup">
        {years.map(year => (
          <AvRadio label={year} value={year} onChange={this.handleChange} />
        ))}
      </AvRadioGroup>
    );
  };

  render() {
    const years = [2004, 2005, 2006, 2007, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
    return <AvForm>{this.renderRadios(years)}</AvForm>;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LeafletForm);
