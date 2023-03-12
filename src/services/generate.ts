import axios from 'axios';

export async function fetchIconsFromPrompt(prompt: string) {
  return axios.get('/api/generate/' + prompt)
  .then(function (response) {
    console.log(response.data);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
  });
}
