const {limitListDepth, dataArray} = require('./recursion2'); 


const expected = [{"name": "director's cut.mov 1", "type": "file"}, {"children": [{"name": "photo of dog.bmp 2", "type": "file"}, {"name": "photo of horse.bmp 2", "type": "file"}, {"children": [], "name": "cats 2", "type": "directory"}], "name": "my favorite pictures 1", "type": "directory"}, {"name": "plans.md 1", "type": "file"}, {"name": "smells like teen spirit.mp3 1", "type": "file"}, {"children": [{"name": "street art.bmp 2", "type": "file"}, {"name": "dumplings.bmp 2", "type": "file"}, {"name": "giant rat.bmp 2", "type": "file"}, {"name": "train.bmp 2", "type": "file"}, {"children": [], "name": "pasta 2", "type": "directory"}], "name": "2015 vacation 1", "type": "directory"},
{"children": [{"name": "hibiscus.bmp 2", "type": "file"}, {"name": "lillies.bmp 2", "type": "file"}, {"children": [], "name": "dogs 2", "type": "directory"}], "name": "plants 1", "type": "directory"}]

const expected2 = [{"name": "director's cut.mov 1", "type": "file"}, {"children": [{"name": "photo of dog.bmp 2", "type": "file"}, {"name": "photo of horse.bmp 2", "type": "file"}, {"children": [{"name": "chershire cat (good grin).png 3", "type": "file"}, {"name": "alley cat.jpeg 3", "type": "file"}], "name": "cats 2", "type": "directory"}], "name": "my favorite pictures 1", "type": "directory"}, {"name": "plans.md 1", "type": "file"}, {"name": "smells like teen spirit.mp3 1", "type": "file"}, {"children": [{"name": "street art.bmp 2", "type": "file"}, {"name": "dumplings.bmp 2", "type": "file"}, {"name": "giant rat.bmp 2", "type": "file"}, {"name": "train.bmp 2", "type": "file"}, {"children": [ {"name": "linguine.png 3", "type": "file"}, {"name": "rotini.jpeg 3", "type": "file"}], "name": "pasta 2", "type": "directory"}], "name": "2015 vacation 1", "type": "directory"},
{"children": [{"name": "hibiscus.bmp 2", "type": "file"}, {"name": "lillies.bmp 2", "type": "file"}, {"children": [{"name": "scooby dooby doo.png 3", "type": "file"}, {"name": "oscar.jpeg 3", "type": "file"}, {"children":[], "name": "chairs 3", "type": "directory"}], "name": "dogs 2", "type": "directory"}], "name": "plants 1", "type": "directory"}]

describe('list depth functions', () => {
      test('recursion over array is limited to specified depth', () => {
          //Arrange
          const testData = dataArray
          //Act
          const actual = limitListDepth(testData, 0, 1);
          //Assert
          expect(actual).not.toContain('children');
      });
      test('recursion over array is limited to a depth of 2', () => {
        expect(limitListDepth(dataArray, 0, 2)).toEqual(expected)
      });
      test('recursion over array is limited to a depth of 3', () => {
        expect(limitListDepth(dataArray, 0, 3)).toEqual(expected2)
      });
})




