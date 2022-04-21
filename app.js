
// Declarando variables
const btnCheckAnswer = document.getElementById("checkAnswer");
const btnStart = document.getElementById("starButton");
const btnReStart = document.getElementById("reStart");
const btnAnimationQuestion = document.getElementById("animationQuestionButton");
const btnAnimalsQuestion = document.getElementById("animalsQuestionButton");
const contentShowAnswer = document.getElementById("showAnswer");
const questionOne = document.getElementsByName("answerOne");
const questionTwo = document.getElementsByName("answerTwo");
const questionThree = document.getElementsByName("answerThree");
const animalQuestionOne = document.getElementsByName("animalQuestionOneAnswers");
const animalQuestionTwo = document.getElementsByName("animalQuestionTwoAnswers");
const animalQuestionThree = document.getElementsByName("animalQuestionThreeAnswers");
let n;
const nameUser= document.getElementById("txtPlayerName");
const out1= document.getElementById("output1");
const out2= document.getElementById("output2");
const out3= document.getElementById("output3");
const out4= document.getElementById("output4");

let score = 0;

// Estado inicial de la seccion de preguntas, la seccion de seleccion del tema y el para mostrar resultados
document.getElementById('sectionTypeQuestion').style.visibility = 'hidden';
document.getElementById('sectionAnimationQuestions').style.visibility='hidden';
document.getElementById('sectionAnimalQuestions').style.visibility='hidden';
document.getElementById('sectionAnswers').style.visibility='hidden';

// Función para saludo
/* const savePlayerName = () =>{
  var name= document.getElementById("txtPlayerName").value;
  var out1= document.getElementById("output1");
  out1.innerHTML = "Hola, " + name + " ¡Elige tu ruta!";
} */

//funcion de Boton empezar
const start = () => {
  //savePlayerName();
  out1.innerHTML = "Hola, " + nameUser.value + " ¡Elige tu ruta!";
  document.getElementById('sectionWelcome').style.visibility = 'hidden';
  document.getElementById('sectionWelcome').style.display = 'none';
  document.getElementById('sectionTypeQuestion').style.visibility = 'visible';
  //document.getElementById('sectionAnimationQuestions').style.visibility = 'visible';
}

//función de Botón Preguntas sobre animación
const chooseAnimation = () =>{
  out2.innerHTML = nameUser.value + " ¡Suerte en tu ruta!";
  document.getElementById('sectionTypeQuestion').style.visibility = 'hidden';
  document.getElementById('sectionTypeQuestion').style.display = 'none';
  document.getElementById('sectionAnimationQuestions').style.visibility = 'visible'; 
  document.getElementById('sectionAnimalQuestions').style.display='none';
  document.getElementById('sectionAnswers').style.visibility='visible';
  n=1;
}

//función de botón Preguntas sobre animales
const chooseAnimal = () =>{
  out3.innerHTML = nameUser.value + " ¡Suerte en tu ruta!";
  document.getElementById('sectionTypeQuestion').style.visibility = 'hidden';
  document.getElementById('sectionTypeQuestion').style.display = 'none';
  document.getElementById('sectionAnimalQuestions').style.visibility = 'visible';
  document.getElementById('sectionAnimationQuestions').style.display = 'none'; 
  document.getElementById('sectionAnswers').style.visibility='visible';
  n=2;
}

// función para mostrar alternativas seleccionadas sectionWelcome
const selectAnswer = () => {
  //alert(event.target.value);
  if (n===1){
    //Evaluando Pregunta 1 del questionario de Animación
    for (answer of questionOne) {
      if (answer.checked && answer.value === "Bob Esponja"){
        answer.labels[0].style.color = "#63b36e";
        score++; 
      }
      else if(answer.checked && answer.value === "Calamardo Tentáculos"){
        answer.labels[0].style.color = "#aa231e";
      }
      else if(answer.checked && answer.value === "Patricio Estrella"){
        answer.labels[0].style.color = "#aa231e";
      }
    }
    //Evaluando Pregunta 2 del questionario de Animación
    for (answer of questionTwo) {
      if (answer.checked && answer.value === "Espinaca")
      {
        answer.labels[0].style.color = "#63b36e";
        score++;
      }
      else if(answer.checked && answer.value === "Zanahoria"){
        answer.labels[0].style.color = "#aa231e";
      }
      else if(answer.checked && answer.value === "Lechuga"){
        answer.labels[0].style.color = "#aa231e";
      }
    }
    //Evaluando Pregunta 3 del questionario de Animación
    for (answer of questionThree) {
      if (answer.checked && answer.value === "Scar")
      {
        answer.labels[0].style.color = "#63b36e";
        score++;
      }
      else if(answer.checked && answer.value === "Mufasa"){
        answer.labels[0].style.color = "#aa231e";
      }
      else if(answer.checked && answer.value === "Jafar"){
        answer.labels[0].style.color = "#aa231e";
      }
    }  
  }else if (n==2){
    //Evaluando Pregunta 1 del questionario de Animales
    for (answer of animalQuestionOne) {
      if (answer.checked && answer.value === "6")
      {
        answer.labels[0].style.color = "#63b36e";
        score++;
      }
      else if(answer.checked && answer.value === "2"){
        answer.labels[0].style.color = "#aa231e";
      }
      else if(answer.checked && answer.value === "4"){
        answer.labels[0].style.color = "#aa231e";
      }
    }
    //Evaluando Pregunta 2 del questionario de Animales
    for (answer of animalQuestionTwo) {
      if (answer.checked && answer.value === "Guepardo")
      {
        answer.labels[0].style.color = "#63b36e";
        score++;
      }
      else if(answer.checked && answer.value === "León"){
        answer.labels[0].style.color = "#aa231e";
      }
      else if(answer.checked && answer.value === "Gacela"){
        answer.labels[0].style.color = "#aa231e";
      }
    }
    //Evaluando Pregunta 3 del questionario de Animales
    for (answer of animalQuestionThree) {
      if (answer.checked && answer.value === "Dragón de komodo")
      {
        answer.labels[0].style.color = "#63b36e";
        score++;
      }
      else if(answer.checked && answer.value === "Leon marino japonés"){
        answer.labels[0].style.color = "#aa231e";
      }
      else if(answer.checked && answer.value === "Tigre de tasmania"){
        answer.labels[0].style.color = "#aa231e";
      }
    }
  }
}

//Evento change del input tipo radio para ejecutar la función selectAnswer
//document.addEventListener("change", selectAnswer) 

// Función para mostrar respuestas correctas
const showAnswer = () => {
  selectAnswer();
  //alert("Respuestas Correctas: \n 1.Bob Esponja \n 2.Espinaca");
  // Pintando en el HTML las respuestas correctas
  if(n===1){
    out4.innerHTML = "Tu puntaje es: "+ score ;
    contentShowAnswer.innerHTML = "<label>Respuestas :</label> <ol type='1'><li>Bob Esponja</li><li>Espinaca</li><li>Scar</li></ol>"; 
  }else if(n===2){
    out4.innerHTML = "Tu puntaje es: "+ score ;
    contentShowAnswer.innerHTML = "<label>Respuestas :</label> <ol type='1'><li>6</li><li>Guepardo</li><li>Dragón de komodo</li></ol>";
  }
}

//Función para reiniciar juego
const reStartGame = () =>{
  location.reload();
}

//Evento click para ejecutar la función start
btnStart.addEventListener("click", start);
//Evento click para ejecutar la función chooseAnimation
btnAnimationQuestion.addEventListener("click",chooseAnimation);
//Evento click para ejecutar la función chooseAnimal
btnAnimalsQuestion.addEventListener("click",chooseAnimal);
//Evento click para ejecutar la función showAnswer
btnCheckAnswer.addEventListener("click", showAnswer);
//Evento click para ejecutar función reStart
btnReStart.addEventListener("click", reStartGame );


