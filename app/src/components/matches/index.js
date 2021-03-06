import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Title from '../generic/title';

import './matches.css';

import {
  Card,
  Button,
  Carousel
} from 'react-bootstrap';

const UPSTREAM_URI = `http://localhost:3001`;

class Matches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      matches: [],
    }
  }

  componentDidMount() {
    this.getMatches();
  }

  getMatches = async () => {
    try {
      const res = await axios.get(`${UPSTREAM_URI}/matches`);

      if (res.status === 200) {
        let matches = res.data;
        for (let match in matches) {
          let userInfo = await this.getUserInfo(matches[match].userId);
          let profileInfo = await this.getProfileInfo(matches[match].userId);

          Object.assign(matches[match], userInfo);
          Object.assign(matches[match], profileInfo);
        }
        this.setState({ matches: matches });
      }
    } catch (e) { console.log(e.message || e); }
  }

  getUserInfo = async (userId) => {
    try {
      const res = await axios.get(`${UPSTREAM_URI}/user?userId=` + userId);

      if (res.status === 200) {
        return res.data;
      }

      return null;
    } catch (e) { console.log(e.message || e); }
  }

  getProfileInfo = async (userId) => {
    try {
      const res = await axios.get(`${UPSTREAM_URI}/profile?userId=` + userId);

      if (res.status === 200) {
        return res.data;
      }

      return null;
    } catch (e) { console.log(e.message || e); }
  }

  render() {
    const { matches } = this.state;

    return (
      <div>
        <Title title='Matches' />
        {
          matches.map(match => <div key={match.username}>
            <Card>
              {
                match.images.length > 0 && (
                  <Carousel>
                    {
                      match.images.map((image, index) => (
                        <Carousel.Item key={index}>
                          <img
                            src={`${UPSTREAM_URI}/${image.path}`}
                            height='300px'
                            className='carousel-image'
                          />
                        </Carousel.Item>
                      ))
                    }
                  </Carousel>
                )
              }
              <Card.Body>
                <Card.Text>Username: {match.username}</Card.Text>
                <Card.Text>First Name: {match.firstName}</Card.Text>
                <Card.Text>Last Name: {match.lastName}</Card.Text>
                <Card.Text>Gender: {match.gender}</Card.Text>
                <Card.Text>Sexuality: {match.sexuality}</Card.Text>
                <Card.Text>Biography: {match.biography}</Card.Text>
                <Card.Text>Birthdate: {match.birthdate.split('T')[0]}</Card.Text>

                <div className='flex-spaced-around'>
                  <Link to={'/profile/' + match.userId} >
                    <Button>View Profile</Button>
                  </Link>
                  <Link
                    to={{
                      pathname: '/chat/' + match.matchId,
                      state: { targetUsername: match.username, targetId: match.userId },
                    }}
                  >
                    <Button>Chat</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
          )
        }
      </div>
    );
  }
}

export default Matches;