import axios from 'axios';

const fetchIcons = async (prompt: string): Promise<[]> => {
  return axios.post('https://europe-west1-scrypr.cloudfunctions.net/createSVG', {
    'prompt': prompt,
  })
  .then(function (response) {
    console.log(response);
    return response.data;
  })
  .catch(function (error) {
    console.log(error);
    return error;
  });
}

export async function get({ params }) {
  const prompt = params.prompt;

  const data = await fetchIcons(prompt);

  if (!data) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
