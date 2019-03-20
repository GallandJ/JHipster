import React from 'react';
import { connect } from 'react-redux';

import { IRootState } from 'app/shared/reducers';
import { getPositionsByYear } from 'app/shared/reducers/leaflet-reducer';

const mapStateToProps = ({ leafletReducer }: IRootState) => ({
  yearPositions: leafletReducer.yearPositions,
  positions: leafletReducer.positions
});

const mapDispatchToProps = { getPositionsByYear };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export interface ILeafletProp extends StateProps, DispatchProps {}

export class Leaflet extends React.Component<ILeafletProp> {
  async componentWillMount() {}

  render() {
    return (
      <div>
        <h1>Year selected</h1>
        {this.props.yearPositions}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaflet);
