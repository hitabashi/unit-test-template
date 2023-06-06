module.exports = {
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^/@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest'],
  },
  reporters: ['default'],
  modulePaths: ['node_modules', '<rootDir>/src'],
  verbose: true,
  silent: false,
};
