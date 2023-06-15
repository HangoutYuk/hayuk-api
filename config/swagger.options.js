const config = require('../config/config')
const options = {
  failOnErrors: true,
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'HangoutYuk API - OpenAPI 3.0',
      description: "Dokumentasi lengkap API dari aplikasi HangoutYuk!\n- Pilih server backend sesuai kebutuhan\n- Login dahulu untuk mendapatkan auth token JWT\n- Salin token dari response yang didapat, masukan pada menu Authorize\n- Endpoint sudah dapat diakses\nKhusus untuk Recommender API ubah server manjadi  ML Recommender Endpoint",
      version: '1.0.0',
      "license": {
        "name": "MIT License",
        "url": "https://mit-license.org/"
      }
    },
    "externalDocs": {
      "description": "HangoutYuk Github",
      "url": "https://github.com/HangoutYuk"
    },
    servers: [
      {
        url: `${config.mainServer}`,
        description: 'Main Backend'
      },
      {
        url: `${config.devServer}`,
        description: 'Development Backend'
      },
      {
        url: `${config.localServer}`,
        description: 'Local Backend'
      },
      {
        url: `${config.mlEndpointServer}`,
        description: 'ML Recommender Endpoint'
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
      },
      {
        "name": "Recommender Endpoint",
        "description": "Endpoint untuk mengetes ML Recommender API"
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
