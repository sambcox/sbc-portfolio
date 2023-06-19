import axios from 'axios';

export const getRecentProjects = async () => {
  const accessToken = process.env.NEXT_PUBLIC_GITHUB_API_TOKEN;
  console.log(accessToken)
  const response = await axios.get('https://api.github.com/user/repos', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      sort: 'pushed',
      direction: 'desc',
      per_page: '10',
    },
  });

  return response.data;
};