import React, { useState, useEffect, createContext } from 'react';
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

  return <GitHubContext.Provider value={{ githubUser, repos, follwers }}>{children}</GitHubContext.Provider>;
};

//global
export const useGitContext = () => {
  return useContext(GitHubContext);
};
