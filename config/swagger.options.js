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
      {
        url: 'https://backend-test-dot-curious-furnace-381420.uc.r.appspot.com/v1',
        description: 'Main Backend'
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
