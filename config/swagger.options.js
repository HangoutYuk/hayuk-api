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
        url: 'https://dev-dot-hayuk-project.et.r.appspot.com/v1',
        description: 'Development Backend'
      },
      {
        url: 'http://localhost:8080/v1',
        description: 'Local Backend'
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
        name: 'Data Tempat',
        description: 'Endpoint untuk mendapatkan data rekomendasi tempat dari ML Endpoint dan data detail dari suatu tempat'
      },
      {
        name: 'Poll Website',
        description: 'Endpoint untuk membuat website polling dari tempat yang diinginkan'
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
        },
        uploadProfile: {
          type: 'object',
          properties: {
            photoFile: {
              type: 'string',
              format: 'binary'
            }
          }
        },
        pollDelete: {
          type: 'object',
          properties: {
            pollId: {
              type: 'string',
              example: 'ChIJCYpAP2DmaC4RshB4KjZqULA'
            }
          }
        },
        poll: {
          type: 'object',
          properties: {
            placeId: {
              type: 'string',
              example: 'ChIJCYpAP2DmaC4RshB4KjZqULA'
            },
            userId: {
              type: 'string',
              example: 'CAwo3o1RuwWJrM4eK3lVt'
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
