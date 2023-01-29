export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ebpostrgres'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'embroidery_broderie'),
      user: env('DATABASE_USERNAME', 'stylkyn'),
      password: env('DATABASE_PASSWORD', 'banicek21'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
