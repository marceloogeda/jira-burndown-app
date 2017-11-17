import React, { Component } from 'react';

import ListAllSprints from './';

export default class QueryAllSprints extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    return fetch('https://jira.catho.com/rest/agile/latest/board/224/sprint', {
      credentials: 'include',
      method: 'GET',
      headers: {
        Authorization: 'Basic bWFyY2Vsby5vZ2VkYTpDQHRobzIxMjFA',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
    })
      .then(response => {
        console.log(response);
        response.json();
      })
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  render() {
    const { data } = this.state;

    return <ListAllSprints data={data} />;
  }
}
