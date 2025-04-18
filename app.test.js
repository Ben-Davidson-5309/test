---FILEPATH test/app.test.js
---FIND
```
```
---REPLACE
```
import mongoose from 'mongoose';
import Mockingoose from 'mockingoose';
import ExampleModel from './models/exampleModel';

describe('Integration Tests', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should create a new example document', async () => {
    const exampleData = { name: 'Test Example', value: 42 };
    Mockingoose(ExampleModel).toReturn(exampleData, 'save');

    const example = new ExampleModel(exampleData);
    const savedExample = await example.save();

    expect(savedExample.name).toBe(exampleData.name);
    expect(savedExample.value).toBe(exampleData.value);
  });

  // Additional integration tests can be added here
});
```
---COMPLETE