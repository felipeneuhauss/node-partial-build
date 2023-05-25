import { Options } from '@mikro-orm/core';

const mikroConfig: Options = {
  dbName: 'posts',
  clientUrl: 'mongodb://localhost:27017', // MongoDB connection URL
  debug: true, // Set to true in development, false in production
  entities: ['dist/entities/**/*.js'], // Path to your entity files
  type: 'mongo' as const, // Database type, change it according to your database driver
};

export default mikroConfig;
