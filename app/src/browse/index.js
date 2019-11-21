import React from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';

class Browse extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      suggestions: []
    }
  }

  componentDidMount() {
    this.getSuggestedProfiles();
  }

  getSuggestedProfiles = async () => {
    try {
      const res = await axios.get('http://localhost:3001/suggestions');

      if (res.status === 200) {
        console.log('Response:', res.data);
        this.setState({
          suggestions: res.data
        });
      }
    } catch (e) { console.log(e.message || e); }
  }

  render() {
    return (
      <div>
        <h1>Browse Component</h1>
        {
          this.state.suggestions.map(
            suggestion => <div key={suggestion.username}>
              <span>{suggestion.username}</span><br />
            </div>
          )
        }
      </div>
    );
  }
}

export default hot(module)(Browse);