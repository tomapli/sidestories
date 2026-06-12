const setCorsHeaders = (response: Response) => {
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Request-Method", "*");
  response.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  response.headers.set("Access-Control-Allow-Headers", "*");
};

export const OPTIONS = () => {
  const response = new Response(null, {
    status: 204,
  });
  setCorsHeaders(response);
  return response;
};

const handler = () => {
  const response = Response.json(
    { error: "tRPC is not configured." },
    { status: 404 },
  );
  setCorsHeaders(response);
  return response;
};

export { handler as GET, handler as POST };
