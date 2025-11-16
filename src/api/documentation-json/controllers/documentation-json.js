const fs = require('fs');
const path = require('path');

module.exports = {
  async getDocumentation(ctx) {
    try {
      const documentationPath = path.join(
        __dirname,
        '../../../extensions/documentation/documentation/1.0.0/full_documentation.json'
      );

      if (!fs.existsSync(documentationPath)) {
        return ctx.notFound('Documentation file not found');
      }

      const documentation = fs.readFileSync(documentationPath, 'utf8');
      ctx.type = 'application/json';
      ctx.body = JSON.parse(documentation);
    } catch (error) {
      ctx.throw(500, `Error reading documentation: ${error.message}`);
    }
  },
};
