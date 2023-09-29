import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
import { useContext } from 'react';

const rootUrl = 'https://api.github.com';

const GitHubContext = React.createContext();

export const GitHubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [follwers, setFollowers] = useState(mockFollowers);

  const [request, setRequest] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: '' });
  const searchGithubUser = async user => {
    toggleError();
    setLoading(true); //initial page loading
    const res = await axios(`${rootUrl}/users/${user}`).catch(err => console.log('error', err));

    if (res) {
      setGithubUser(res.data); //updating the gituser state
      const { login, followers_url } = res.data;
      await Promise.allSettled([axios(`${rootUrl}/users/${login}/repos?per_page=100`), axios(`${followers_url}?per_page=100`)]).then(results => {
        const [repos, followers] = results;
        const status = 'fulfilled';
        if (repos.status === status) setRepos(repos.value.data);
        if (repos.status === status) setFollowers(followers.value.data);
      });
    } else {
      toggleError(true, 'there is no user with the user name');
    }
    checkreq(); //every time user search will show the no of req
    setLoading(false);
  };

  const checkreq = () => {
    toggleError();
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining }
        } = data;
        setRequest(remaining); //updating the no.of.req state
        if (remaining === 0) {
          //usecase1-used all req
          toggleError(true, 'Sorry, you have exceeded your 60 req/hour rate limit!');
        }
      })
      .catch(error => console.log(error), []);
  };
  // error fun with default vaLues
  const toggleError = (show = false, msg = '') => setError({ show, msg });

  useEffect(() => checkreq(), []); //initial loading of the page

  return <GitHubContext.Provider value={{ githubUser, repos, follwers, request, error, searchGithubUser, loading }}>{children}</GitHubContext.Provider>;
};

//global
export const useGitContext = () => {
  return useContext(GitHubContext);
};
