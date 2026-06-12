const handler = () =>
  Response.json({ error: "Auth is not configured." }, { status: 404 });

export { handler as GET, handler as POST };
