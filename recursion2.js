const dataArray = 
[
    {   type: "file",
        name: "director's cut.mov 1",
    },
    {   type: "directory",
        name: "my favorite pictures 1",
        children: [
          {
            type: "file",
            name: "photo of dog.bmp 2",
          },
          {
            type: "file",
            name: "photo of horse.bmp 2",
          },
          {
           type: "directory",
           name: "cats 2",
           children: [
             {
               type: "file",
               name: "chershire cat (good grin).png 3",
             },
             {
               type: "file",
               name: "alley cat.jpeg 3",
             },
           ]
        }
    ],
    },
    {
        type: "file",
        name: "plans.md 1",
    },
    {   type: "file",
        name: "smells like teen spirit.mp3 1",
    },
    {   type: "directory",
        name: "2015 vacation 1",
        children: [
          {
            type: "file",
            name: "street art.bmp 2",
          },
          {
            type: "file",
            name: "dumplings.bmp 2",
          },
          {
            type: "file",
            name: "giant rat.bmp 2",
          },
          {
            type: "file",
            name: "train.bmp 2",
          },
          {
           type: "directory",
           name: "pasta 2",
           children: [
             {
               type: "file",
               name: "linguine.png 3",
             },
             {
               type: "file",
               name: "rotini.jpeg 3",
             },
           ]
        }
    ],
    },
    {   type: "directory",
        name: "plants 1",
        children: [
          {
            type: "file",
            name: "hibiscus.bmp 2",
          },
          {
            type: "file",
            name: "lillies.bmp 2",
          },
          {
           type: "directory",
           name: "dogs 2",
           children: [
             {
               type: "file",
               name: "scooby dooby doo.png 3",
             },
             {
               type: "file",
               name: "oscar.jpeg 3",
             },
             {
              type: "directory",
              name: "chairs 3",
              children: [
                {
                  type: "file",
                  name: "nice hunter green arm chair.png 4",
                },
                {
                  type: "file",
                  name: "tattered.jpeg 4",
                },
              ]
           }
       ]
    }
  ]
}
];

//GOOD RECURSIVE FUNCTION BELOW

/*
function buildList2(data, counter, max){
  let newContainer = document.createElement('ul'); 
  data.forEach(function(data){
      if (counter >= max) {
        return;
      } else {
          let newListElement = document.createElement('li');
          newListElement.innerHTML = `${data.type}: ${data.name} (${counter})`;
          if (data.type == "directory") {
            newListElement.appendChild(buildList2(data.children, counter + 1, max))
            newContainer.appendChild(newListElement);
          } else {
            newListElement.innerHTML = `${data.type} - ${data.name} (${counter})`;
            newContainer.appendChild(newListElement);   
        }
      } 
  });
  return newContainer;
}; 

document.body.appendChild(buildList2(dataArray, 0, 2));
*/
// try and introduce testability
// make recursive function that builds a list, outputs data as javascript object that you can then feed into another
// function that writes the list to the DOM -- split the functionality 1) limiting data that is written (limitListDepth)
// give that function data of indeterminate depth, returns new directory that has limited depth; and then 2) another function
// that writes to the DOM 
// for first function, write a test case 

// another function getListDepth -- give deepest that directory list goes; test case is in HTML doc, if getListDepth
// of limitListDepth(data, 2) == 2, then write to document testPassed, else write to document testFails
// also write a test without limitListDepth, if getListDepth == depth, then test passed write to DOM, otherwise write test fails
// system under test

//write getListDepth function first

// test driven development

/*function limitListDepth(data, depth){
  let limitedDataArray = [];
  data.forEach(function(data){
    if(depth > 1){
      return;
    } else {
        let pushItem = data;
        if (data.type == "directory"){
          limitedDataArray.push(pushItem);
          limitListDepth(data.children, depth +1)
        } else {
          limitedDataArray.push(pushItem)
        }
    }
  });
  return limitedDataArray;
}

console.log(limitListDepth(dataArray, 0));
*/
/*      
      
      data.type == "directory"){
      limitedDataArray.push(data);
      limitListDepth(data.children, depth + 1);
    } else if (depth >= 1) {
      return limitedDataArray;
    } else {
      limitedDataArray.push(data);
    };
  });
  return limitedDataArray;
};
*/
    
/*

function limitListDepth(data, depth){
  let limitedDataArray = [];
  for (let i = 0; i < depth; i++){
    if (data.type == "directory"){
      limitListDepth(data.children, depth + 1);
    } else {
      limitedDataArray.push(data[i]);
    }
  };
  return limitedDataArray
};

console.log(dataArray, 0);
*/

/*function searchAll(data, depth) {
  let result = [];
  for (let i = 0; i < depth; i++){
    if (data.type == "directory"){
      result.push(data[i]);
      searchAll(data[i].children, depth + 1);
      } else {
        result.push(data[i]);
        };
  }
  return result;
}*/

//console.log(searchAll(dataArray, 2))

// iterate over each item of the array
// return items at a certain depth to a new array
// skip items 

/* function limitListDepth(data, counter, depth) {
  let limitedDataArray = [];
  for (item in data){
    if (item.includes(item.children) == false && counter !== depth){ 
      limitedDataArray.push(item)
      } if (item.type = 'directory' && counter > 1){
        limitListDepth(item.children, counter + 1, depth)
      } else {
        return;
      }
  }
  return limitedDataArray;
}; */

//iterate over each item of the array and push the first level of objects to the new array
//then, recurse into the directories, track depth of recursion, add children at selected depth to array (if applicable)
//return new array with only those items to a given depth

/*function limitListDepth(data, counter, depth){
  data.forEach(function(file){
  if (counter === depth) {
    return limitedDataArray;
  } else {
    let newData = {'type': file.type, 'name': file.name};
    if (file.type == "directory" && counter !== depth) {
      limitedDataArray.push(newData);
      limitedDataArray.push(limitListDepth(file.children, counter + 1, depth));
    } else {
      limitedDataArray.push(newData);
    }
  }        
  });
  return limitedDataArray;
};*/



/**
 * 
 * @param {array} data 
 * @param {number} counter 
 * @param {number} depth 
 */ 

function limitListDepth(data, counter, depth){
  let limitedDataArray = [];
  data.forEach(function(item){
    if (counter == depth){
      return limitedDataArray;
    } else {
      if (item.type == 'directory') {
        limitedDataArray.push({
          name: item.name,
          type: item.type,
          children: limitListDepth(item.children, counter + 1, depth)
        });
      } else {
        limitedDataArray.push(item);     
      }
    }
  });
  return limitedDataArray;
};

module.exports = {limitListDepth, dataArray} ;


    
   /* if (counter === depth) {
      return;
    } else {
      let newData = item;
      if (item.type == "directory") {
          limitedDataArray.concat(limitListDepth(item.children, counter + 1, depth));
          limitedDataArray.push(newData);
      } else {
        limitedDataArray.push(newData);
        }
      }       
    });
    return limitedDataArray;
  };
*/


function getListDepth(data){
    let maximumDepth = 0;  
    data.forEach(function(file){
        if (file.type == 'directory'){
          let depth = getListDepth(file.children) + 1
          maximumDepth = Math.max(depth, maximumDepth)
        }
      });  
      return maximumDepth;
  };

  function testGetListDepth(){
    if (getListDepth(dataArray) == 3){
      document.body.append("passed");
    } else {
      (document.body.append("failed"));
    }
  }
  
  // work on limitListDepth, 
  // take dataArray and write to the Dom
  // create simpler version of sampler data, one director with 3 or 4 children, write on paper what happens on each call
  // look at limitListDepth figure out if there is a way to make it more efficent by returning earlier if we know it doesn't have to do any more work


 
  if (getListDepth(limitListDepth(dataArray, 0, 2)) == 2){
    document.body.append("passed for depth 2");
  } else {
    (document.body.append("failed for depth 2"));
  }
  
  if (getListDepth(limitListDepth(dataArray, 0, 1)) == 1){
    document.body.append("passed for depth 1");
  } else {
    (document.body.append("failed for depth 1"));
  }

  if (getListDepth(limitListDepth(dataArray, 0, 3)) == 3){
    document.body.append("passed for depth 3");
  } else {
    (document.body.append("failed for depth 3"));
  }


  function print(data){
    let newContainer = document.createElement('ul'); 
    data.forEach(function(data){
      let newListElement = document.createElement('li');
      newListElement.innerHTML = `${data.type}: ${data.name}`;
      if (data.type == "directory") {
        newListElement.appendChild(print(data.children))
        newContainer.appendChild(newListElement);
        } else {
        newListElement.innerHTML = `${data.type} - ${data.name}`;
        newContainer.appendChild(newListElement);   
      } 
    });
  return newContainer;
  };   
  
  let valueToPass = limitListDepth(dataArray, 0, 1);
  let valueToPass2 = limitListDepth(dataArray, 0, 2);
  let valueToPass3 = limitListDepth(dataArray, 0, 3);

  document.body.appendChild(print(valueToPass));

/*
function limitListDepth(dataArray, counter, max){
  limitedDataArray = [];
  dataArray.forEach(function(dataArray){
    if (counter >= max){
      return;
    } else {
        if (dataArray.type == "directory") {
        limitedDataArray.push(dataArray.obj); 
        limitListDepth(dataArray.children, counter + 1, max);
    } else {
      limitedDataArray.push(dataArray.obj);
    }
  }
  return limitedDataArray;
  })
};
 */ 
 
 /* 
  
  let limitedDataArray = [];
  dataArray.forEach(function(dataArray){
    if (depth) {
      return;
    } else {
        if (dataArray.type == "directory") {
          dataArray.children += limitedDataArray
          limitListDepth(dataArray.children, depth + 1);
        } else {
          limitedDataArray++
        }
      }
  return limitedDataArray         
      });
};
*/








/* function buildList(data){
    dataArray.forEach(function(data){
        if(data.type == "directory"){
            console.log(data.name)
            buildList(data);
        } else {
            console.log(data.type);
            console.log(data.name);
        }
    });
}; */

/*

// parameter is array of nested objects and output is li DOM elements of the contents of the array
function buildList(data){
    // creating parent list that's going to contain all of this level's children to   
    let newContainer = document.createElement('ul'); 
    // for each item in our data input, add li to the container we created above, depending on type
    // create branch files lis under container with name
    // directories get results of output of buildList (gives ul)  
    data.forEach(function(data){
        let newListElement = document.createElement('li');
        if(data.type == "directory"){
            newListElement.appendChild(buildList(data.children));
            newContainer.appendChild(newListElement);
        } else {
            newListElement.innerHTML = `${data.type} - ${data.name}`;
            newContainer.appendChild(newListElement);   
        }
    });

    return newContainer;
}; 

document.body.appendChild(buildList(dataArray)); */

// TEST CODE BELOW!!!!

/*
// parameter is array of nested objects and output is li DOM elements of the contents of the array
function buildList(data, counter){
  // creating parent list that's going to contain all of this level's children to   
  let newContainer = document.createElement('ul'); 
  // for each item in our data input, add li to the container we created above, depending on type
  // create branch files lis under container with name
  // directories get results of output of buildList (gives ul)  
  data.forEach(function(data){
      let newListElement = document.createElement('li');
      if(data.type == "directory"){
          newListElement.innerHTML = `${data.type}: ${data.name} ${counter}`;
          if(counter <= 2) {newListElement.appendChild(buildList(data.children, counter + 1, max))};
          newContainer.appendChild(newListElement);
        } else {
            newListElement.innerHTML = `${data.type} - ${data.name}`;
            newContainer.appendChild(newListElement);   
        } 
  });

  return newContainer;
}; 

//document.body.appendChild(buildList(dataArray, 0));

*/
// get this working - modify data, add more depth to directories
// what is browser doing when its calling recursive function, how much space taking up, how managing memory
// what might benefit be of not modifying the counter variable - rather than incrememented counter, passing new value into function (immutability)
// look up arguments variable that javascript makes available in functions




// fix to say list directory name, then the ul
// try to set function up to limit the depth to go two deep


/* function buildList(data){
    for(let i = 0; i < dataArray.length; i++){
        if(data.type == "directory"){
            //console.log(data[i].name);
            //console.log(data[i].children[i].type);
            //console.log(data[i].children[i].name);
            buildList(data.children);
        } else {
            console.log(data[i].type);
            console.log(data[i].name);
        }
    };
}; */


    
/*

let build = function(type, container){
    dataArray.forEach(type, function(data){
        if(data.type == "directory") buildTree(data.type, newContainer);
    });
    console.log(build);
};

function build()

let build = function(type, container){
    dataArray.forEach(type, function(data){
        let newContainer = document.createElement('div');
        let newText = document.createTextNode(data.name)
        newContainer.appendChild(nameText);
        container.appendChild(newContainer);
        if(data.type == "directory") buildTree(data.type, newContainer);
    });
}; 
*/