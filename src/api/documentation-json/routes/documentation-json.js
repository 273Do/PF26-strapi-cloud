module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/documentation.json',
      handler: 'documentation-json.getDocumentation',
      config: {
        auth: false,
      },
    },
  ],
};
