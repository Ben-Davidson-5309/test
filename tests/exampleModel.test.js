const mockingoose = require('mockingoose').default;
const ExampleModel = require('../models/exampleModel');

describe('ExampleModel', () => {
    it('should create a new example', async () => {
        const exampleData = { name: 'Test Example' };
        mockingoose(ExampleModel).toReturn(exampleData, 'save');

        const example = new ExampleModel(exampleData);
        const savedExample = await example.save();

        expect(savedExample.name).toBe('Test Example');
    });
});