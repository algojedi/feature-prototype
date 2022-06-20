var description = document.getElementById('description');
var editButton = document.getElementById('editButton');
description.readOnly = true;

// function that toggles the description
handleEdit = function () {
  if (description.readOnly) {
    description.readOnly = false;
    editButton.innerHTML = 'Save';
    editButton.classList.remove('btn-primary');
    editButton.classList.add('btn-danger');
  } else {
    description.readOnly = true;
    editButton.innerHTML = 'Edit';
    editButton.classList.remove('btn-danger');
    editButton.classList.add('btn-primary');
  }
};

newSelection = function (selection) {
  console.log({ selection });
};

function handleClassBtnClick(num) {
  var classDescription = document.getElementById('classDescription');
  classDescription.readOnly = true;
  switch (num) {
    case 1:
      classDescription.innerHTML = '... some explanation about the class ...';
      break;
    case 2:
      classDescription.innerHTML =
        '... some more explanation about the class ...';
      break;
    case 3:
      classDescription.innerHTML =
        'It is possible that foobar is a playful allusion to the World War II-era military slang FUBAR';
      break;
    case 4:
      classDescription.innerHTML =
        '... some more explanation about the class: Bazz.java ...';
      break;
    case 5:
      classDescription.innerHTML =
        '... some more explanation about the class FooBazz.java ...';
      break;
    default:
      break;
  }
}
