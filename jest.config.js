module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.ts?$': 'babel-jest',
    },
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(test).ts?(x)'],
    transformIgnorePatterns: ['/node_modules/'],
    setupFilesAfterEnv: ['<rootDir>/src/__test__/setUpTest.ts'],
};
