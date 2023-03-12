const getIcon = (prompt: string) => {
  return '<svg>' + prompt + '</svg>';
}

export async function get({ params }) {
  const prompt = params.prompt;
  const icon = await getIcon(prompt);

  if (!icon) {
    return new Response(null, {
      status: 404,
      statusText: 'Not found'
    });
  }

  return new Response(JSON.stringify(icon), {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    }
  });
};
