const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Dokumentasi API HaYuk!',
      description: 'Dokumentasi lengkap mengenai semua API yang ada',
      version: '1.0.0'
    },
    servers: [
      // {
      //   url: 'https://backend-test-dot-curious-furnace-381420.uc.r.appspot.com/v1',
      //   description: 'Main Backend'
      // },
      {
        url: 'https://backend-dev-dot-curious-furnace-381420.uc.r.appspot.com/v1',
        description: 'Development Backend'
      }
    ],
    tags: [
      {
        name: 'Autentikasi',
        description: 'Endpoint untuk Autentikasi (Login & Register)'
      },
      {
        name: 'Manajemen Pengguna',
        description: 'Endpoint untuk manajemen pengguna'
      },
      {
        name: 'ML Model Endpoint',
        description: 'Endpoint untuk berkomunikasi dengan endpoint Model ML'
      }
    ],
    components: {
      schemas: {
        login: {
          type: 'object',
          properties: {
            email: {
              type: 'string',
              example: 'a.ibrahim@example.com'
            },
            password: {
              type: 'string',
              example: '12345678'
            }
          }
        },
        register: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'Ahmad Ibrahim'
            },
            email: {
              type: 'string',
              example: 'a.ibrahim@example.com'
            },
            password: {
              type: 'string',
              example: '12345678'
            }
          }
        }
      },
      securitySchemes: {
        AuthToken: {
          type: 'apiKey',
          name: 'auth-token',
          in: 'header'
        }
      }
    }
  },
  apis: ['./routes/*.js']
}

module.exports = options
