import React, { Component } from 'react'
import Input from '@material-ui/core/Input';

class LocationSearch extends Component {
  render() {
    return (
      <Input
        onChange={this.props.fetchLocation}
        placeholder="Start typing a city..."
        autoFocus={true}
        fullWidth={true}
        inputProps={{
          'aria-label': 'Description',
        }}
      />
    )
  }
}

export default LocationSearch;
